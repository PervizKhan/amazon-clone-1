"use client";

import Image from "next/image";
import Header from "../../components/Header";
import CheckoutProduct from "../../components/CheckoutProduct";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import { useSelector } from "react-redux";

import { useSession } from "next-auth/react";

const Checkout = () => {
  const session = true;
  const items = useSelector(selectItems);
  let total = useSelector(selectTotal);
  total = total.toFixed(2);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1280}
            height={250}
            alt="chekout page banner"
          />

          {/* middle */}
          <div className="flex flex-col lg:max-w-screen-xl p-5 space-y-5 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* right */}

        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap font-bold">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">{`$${total}`}</span>
            </h2>
            <button
              disabled={!session}
              className={session ? "button mt-2" : "button-disabled"}
            >
              {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
