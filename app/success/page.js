import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import the CheckCircleIcon

const SuccessPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <CheckCircleIcon className="text-green-500 mx-auto h-16 w-16 mb-4" />{" "}
        {/* Replace the SVG with CheckCircleIcon */}
        <h1 className="text-2xl font-semibold mb-4">Payment Successful!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your payment was successful.
        </p>
        <Link href="/receipt" className="button mt-4 block">
          View Receipt
        </Link>
        <Link href="/" className="button mt-4 block">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
