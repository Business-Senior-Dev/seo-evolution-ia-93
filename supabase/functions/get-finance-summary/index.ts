import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[GET-FINANCE-SUMMARY] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Create Supabase client with service role key for data access
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    
    const user = userData.user;
    if (!user?.id) throw new Error("User not authenticated");
    logStep("User authenticated", { userId: user.id });

    // Get user's organization ID
    const { data: profile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('org_id')
      .eq('user_id', user.id)
      .single();

    if (profileError || !profile?.org_id) {
      throw new Error("User organization not found");
    }

    const orgId = profile.org_id;
    logStep("Organization found", { orgId });

    // Get current date and calculate date ranges
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfYear = new Date(currentYear, 0, 1);
    const twelveMonthsAgo = new Date(currentYear, currentMonth - 11, 1);

    // Calculate MRR (Monthly Recurring Revenue)
    logStep("Calculating MRR");
    const { data: monthlySubscriptions } = await supabaseClient
      .from('subscriptions')
      .select(`
        plans!inner(price_cents, interval)
      `)
      .eq('org_id', orgId)
      .eq('plans.interval', 'month')
      .in('status', ['trialing', 'active', 'past_due']);

    const mrr = monthlySubscriptions?.reduce((sum, sub) => {
      return sum + (sub.plans?.price_cents || 0);
    }, 0) || 0;

    // Calculate ARR (Annual Recurring Revenue)
    logStep("Calculating ARR");
    const { data: annualSubscriptions } = await supabaseClient
      .from('subscriptions')
      .select(`
        plans!inner(price_cents, interval)
      `)
      .eq('org_id', orgId)
      .eq('plans.interval', 'year')
      .in('status', ['trialing', 'active', 'past_due']);

    const annualRevenue = annualSubscriptions?.reduce((sum, sub) => {
      return sum + (sub.plans?.price_cents || 0);
    }, 0) || 0;

    const arr = (mrr * 12) + annualRevenue;

    // Calculate paid revenue for current month
    logStep("Calculating current month revenue");
    const { data: currentMonthInvoices } = await supabaseClient
      .from('invoices')
      .select('amount_cents')
      .eq('org_id', orgId)
      .eq('status', 'paid')
      .gte('created_at', firstDayOfMonth.toISOString());

    const paidThisMonth = currentMonthInvoices?.reduce((sum, invoice) => {
      return sum + invoice.amount_cents;
    }, 0) || 0;

    // Calculate pending amounts
    logStep("Calculating pending amounts");
    const { data: pendingInvoices } = await supabaseClient
      .from('invoices')
      .select('amount_cents')
      .eq('org_id', orgId)
      .in('status', ['open', 'past_due']);

    const openAmount = pendingInvoices?.reduce((sum, invoice) => {
      return sum + invoice.amount_cents;
    }, 0) || 0;

    // Calculate active projects
    logStep("Calculating active projects");
    const { data: activeProjects } = await supabaseClient
      .from('projects')
      .select('id')
      .eq('org_id', orgId)
      .eq('status', 'active');

    const activeProjectsCount = activeProjects?.length || 0;

    // Get revenue by month for the last 12 months
    logStep("Getting revenue by month");
    const { data: revenueData } = await supabaseClient
      .from('invoices')
      .select('amount_cents, created_at')
      .eq('org_id', orgId)
      .eq('status', 'paid')
      .gte('created_at', twelveMonthsAgo.toISOString())
      .order('created_at');

    // Group by month
    const revenueByMonth = [];
    const monthMap = new Map();

    // Initialize all months with 0
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, currentMonth - 11 + i, 1);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthMap.set(monthKey, {
        month: date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }),
        revenue: 0
      });
    }

    // Aggregate actual revenue data
    revenueData?.forEach(invoice => {
      const date = new Date(invoice.created_at);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      if (monthMap.has(monthKey)) {
        monthMap.get(monthKey).revenue += invoice.amount_cents / 100; // Convert to euros
      }
    });

    const revenueByMonthArray = Array.from(monthMap.values());

    // Get top accounts YTD
    logStep("Getting top accounts YTD");
    const { data: topAccountsData } = await supabaseClient
      .from('invoices')
      .select(`
        account_id,
        amount_cents,
        accounts!inner(name)
      `)
      .eq('org_id', orgId)
      .eq('status', 'paid')
      .gte('created_at', firstDayOfYear.toISOString());

    // Aggregate by account
    const accountMap = new Map();
    topAccountsData?.forEach(invoice => {
      const accountId = invoice.account_id;
      if (!accountMap.has(accountId)) {
        accountMap.set(accountId, {
          id: accountId,
          name: invoice.accounts?.name || 'Unknown',
          totalRevenue: 0,
          invoiceCount: 0
        });
      }
      const account = accountMap.get(accountId);
      account.totalRevenue += invoice.amount_cents / 100; // Convert to euros
      account.invoiceCount += 1;
    });

    const topAccountsYTD = Array.from(accountMap.values())
      .sort((a, b) => b.totalRevenue - a.totalRevenue)
      .slice(0, 10);

    // Add subscription status for top accounts
    for (const account of topAccountsYTD) {
      const { data: subscription } = await supabaseClient
        .from('subscriptions')
        .select('status')
        .eq('account_id', account.id)
        .eq('org_id', orgId)
        .in('status', ['trialing', 'active', 'past_due'])
        .limit(1);

      account.subscriptionStatus = subscription?.[0]?.status || 'none';

      // Get latest invoice date
      const { data: latestInvoice } = await supabaseClient
        .from('invoices')
        .select('created_at')
        .eq('account_id', account.id)
        .eq('org_id', orgId)
        .eq('status', 'paid')
        .order('created_at', { ascending: false })
        .limit(1);

      account.lastInvoiceDate = latestInvoice?.[0]?.created_at || null;
    }

    const summary = {
      mrr: Math.round(mrr / 100), // Convert to euros
      arr: Math.round(arr / 100), // Convert to euros
      paidThisMonth: Math.round(paidThisMonth / 100), // Convert to euros
      openAmount: Math.round(openAmount / 100), // Convert to euros
      activeProjects: activeProjectsCount,
      revenueByMonth: revenueByMonthArray,
      topAccountsYTD
    };

    logStep("Summary calculated", summary);

    return new Response(JSON.stringify(summary), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in get-finance-summary", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});