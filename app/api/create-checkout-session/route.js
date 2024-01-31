import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, items } = body;
    const transformedItems = items.map((item) => ({
      price: "price_1Oc5I1B0MCCwdhUC0Lv2b7Oz",
      quantity: 1,
    }));

    const customer = stripe.customers.create();
    console.log(customer);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_options: {},
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error Creating Checkout Session: ", error);

    return NextResponse.json({ error });
  }
}
