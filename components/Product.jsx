"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-4 p-10 z-30 bg-white">
      <p className="absolute top-2 right-2 text-gray-400 italic text-sm">
        {category}
      </p>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          width={200}
          height={200}
          alt="product Image"
          className="w-48 h-48 object-contain"
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 " />
          ))}
      </div>
      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <p className="mb-5">{`$${price}`}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 mb-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Amazon_Prime_logo_%282022%29.svg/150px-Amazon_Prime_logo_%282022%29.svg.png"
            alt="prime"
            width={50}
            height={40}
            className="w-12 h-8 pt-2"
          />
          <p className="text-sm text-gray-500">FREE Next-day Delievry</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
