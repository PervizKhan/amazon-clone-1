"use client";

import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue px-4 flex-grow py-2">
        {/* Logo */}
        <div className="flex items-center mt-2 flex-grow sm:flex-grow-0 cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="logo"
            className="cursor pointer object-contain"
          />
        </div>
        {/* Searchbar */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer ml-5">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* right of top nav */}

        <div className="text-white text-sm flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div onClick={session ? signOut : signIn} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account and lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">and orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 w-[18px] h-[18px] bg-yellow-400 text-center rounded-full font-semibold text-black">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-9" />
            <p className="hidden md:block font-bold md:text-sm mt-auto">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Bussiness</p>
        <p className="link">Today Deals</p>
        <p className="link hidden lg:inline-flex">Electonics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Care</p>
      </div>
    </header>
  );
};

export default Header;
