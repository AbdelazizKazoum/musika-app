"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `bg-gradient-to-b h-fit from-emerald-800  p-6 `,
        className
      )}
    >
      <div className=" w-full mb-4 flex items-center justify-between ">
        <div className="items-center hidden md:flex gap-x-2">
          <button
            onClick={() => router.forward()}
            className="bg-black rounded-full flex justify-center hover:opacity-75 translate "
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.back()}
            className="bg-black rounded-full flex justify-center hover:opacity-75 translate "
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex translate md:hidden justify-center gap-x-2">
          <button className="flex justify-center items-center bg-white rounded-full p-2 ">
            <HiHome className="text-black" size={22} />
          </button>
          <button className="flex justify-center items-center bg-white rounded-full p-2 ">
            <BiSearch className="text-black" size={22} />
          </button>
        </div>
        <div className=" w-fit flex items-center justify-center gap-x-3">
          <div className="">
            <Button className="bg-trasparent  text-neutral-300 font-medium ">
              Sign up
            </Button>
          </div>
          <div className="">
            <Button className="font-medium px-6 py-2">Log in</Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
