import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION-STATUS] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    // Initialize Supabase client with the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Get account ID from request body
    const { accountId } = await req.json();
    if (!accountId) throw new Error("Account ID is required");
    logStep("Account ID provided", { accountId });

    // Get account information
    const { data: accountData, error: accountError } = await supabaseClient
      .from('accounts')
      .select('id, email, org_id')
      .eq('id', accountId)
      .single();
    
    if (accountError || !accountData) {
      throw new Error("Account not found or access denied");
    }
    logStep("Account found", { email: accountData.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Find Stripe customer
    const customers = await stripe.customers.list({ 
      email: accountData.email, 
      limit: 1 
    });

    if (customers.data.length === 0) {
      logStep("No Stripe customer found, updating database with no subscription");
      return new Response(JSON.stringify({ 
        hasActiveSubscription: false,
        subscriptions: []
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const customerId = customers.data[0].id;
    logStep("Found Stripe customer", { customerId });

    // Get active subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
    });

    const activeSubscriptions = [];
    for (const subscription of subscriptions.data) {
      const price = await stripe.prices.retrieve(subscription.items.data[0].price.id);
      
      activeSubscriptions.push({
        id: subscription.id,
        status: subscription.status,
        priceCents: price.unit_amount,
        currency: price.currency.toUpperCase(),
        interval: price.recurring?.interval,
        currentPeriodStart: new Date(subscription.current_period_start * 1000).toISOString(),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
      });

      // Update or insert subscription in database
      await supabaseClient
        .from('subscriptions')
        .upsert({
          account_id: accountId,
          org_id: accountData.org_id,
          stripe_subscription_id: subscription.id,
          stripe_customer_id: customerId,
          stripe_price_id: subscription.items.data[0].price.id,
          status: subscription.status,
          price_cents: price.unit_amount,
          currency: price.currency.toUpperCase(),
          interval: price.recurring?.interval || 'month',
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        }, { 
          onConflict: 'stripe_subscription_id'
        });
    }

    logStep("Subscription status checked", { 
      activeCount: activeSubscriptions.length,
      subscriptions: activeSubscriptions 
    });

    return new Response(JSON.stringify({
      hasActiveSubscription: activeSubscriptions.length > 0,
      subscriptions: activeSubscriptions,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in check-subscription-status", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});