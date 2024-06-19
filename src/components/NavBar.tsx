import Image from "next/image";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between item-center">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px">
          <li>Home</li>
          <Link href="/about">
            <li>About</li>
            </Link>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            Signup
          </button>
        </ul>
        <IoIosMenu className="md:hidden text-accent" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
