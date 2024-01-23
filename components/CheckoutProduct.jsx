import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const [hasPrime] = useState(Math.random() < 0.4);

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(item));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(item));
  };
  return (
    <div className="grid grid-cols-5">
      <Image
        src={item.image}
        width={200}
        height={200}
        objectFit="contain"
        alt="checkout-product-image"
      />
      <div className="col-span-3 mx-5">
        <p>{item.title}</p>
        <div>
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{item.description}</p>
        <p className="font-medium text-gray-600">{`$${item.price}`}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
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
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
