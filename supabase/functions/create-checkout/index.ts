import "@supabase/functions-js/edge-runtime.d.ts"
import Stripe from "stripe"

const stripe = new Stripe(
  Deno.env.get("STRIPE_SECRET_KEY")!,
)

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
}


Deno.serve(async (req) => {

  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    })
  }


  try {

    const { items } = await req.json()


    const session = await stripe.checkout.sessions.create({

      payment_method_types: [
        "card",
      ],

      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",

          product_data: {
            name: item.name,
            images: [item.image],
          },

          unit_amount: Math.round(item.price * 100),
        },

        quantity: item.quantity,
      })),

      mode: "payment",

      success_url:
        "http://localhost:4000/success",

      cancel_url:
        "http://localhost:4000/cart",
    })


    return Response.json(
      {
        url: session.url,
      },
      {
        headers: corsHeaders,
      },
    )


  } catch (error) {

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
        headers: corsHeaders,
      },
    )
  }
})