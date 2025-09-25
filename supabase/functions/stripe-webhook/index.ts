// /supabase/functions/stripe-webhook/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "npm:stripe@14";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20",
});
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const sig = req.headers.get("stripe-signature");
  const whSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig!, whSecret!);
  } catch (err) {
    return new Response(`Webhook Error: ${(err as Error).message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "invoice.paid": {
        const inv = event.data.object as any;
        const { id, hosted_invoice_url, invoice_pdf, customer, subscription, amount_due, currency } = inv;

        // Vincular por stripe_invoice_id si ya lo habías creado tú; si no, por customer/subscription
        await supabase
          .from("invoices")
          .update({
            status: "paid",
            pdf_url: invoice_pdf,
            hosted_invoice_url: hosted_invoice_url,
            amount_cents: amount_due,
            currency: (currency || "eur").toUpperCase(),
          })
          .eq("stripe_invoice_id", id);

        // Actualizar suscripción (periodos)
        if (subscription) {
          const s = await stripe.subscriptions.retrieve(subscription);
          await supabase
            .from("subscriptions")
            .update({
              status: s.status,
              current_period_start: new Date(s.current_period_start * 1000).toISOString(),
              current_period_end: new Date(s.current_period_end * 1000).toISOString(),
            })
            .eq("stripe_subscription_id", subscription);
        }
        break;
      }
      case "invoice.payment_failed": {
        const inv = event.data.object as any;
        await supabase
          .from("invoices")
          .update({ status: "past_due", hosted_invoice_url: inv.hosted_invoice_url, pdf_url: inv.invoice_pdf })
          .eq("stripe_invoice_id", inv.id);
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.created": {
        const s = event.data.object as any;
        await supabase
          .from("subscriptions")
          .update({
            status: s.status,
            current_period_start: new Date(s.current_period_start * 1000).toISOString(),
            current_period_end: new Date(s.current_period_end * 1000).toISOString(),
          })
          .eq("stripe_subscription_id", s.id);
        break;
      }
      case "invoice.finalized": {
        const inv = event.data.object as any;
        await supabase
          .from("invoices")
          .upsert({
            stripe_invoice_id: inv.id,
            amount_cents: inv.amount_due,
            currency: (inv.currency || "eur").toUpperCase(),
            status: inv.status?.replace("draft", "open"),
            hosted_invoice_url: inv.hosted_invoice_url,
            pdf_url: inv.invoice_pdf,
            // Nota: org_id y account_id los deberías setear cuando creas la invoice en Stripe (metadatos)
          }, { onConflict: "stripe_invoice_id" });
        break;
      }
      default:
        // No-op para otros eventos
        break;
    }
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Internal Error", { status: 500 });
  }
});