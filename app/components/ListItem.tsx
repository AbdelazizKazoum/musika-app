import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  href: string;
  name: string;
}
const ListItem: React.FC<ListItemProps> = ({ image, href, name }) => {
  return (
    <button
      className="
            relative
            group flex items-center rounded-md 
            overflow-hidden gap-x-4 
            transition bg-neutral-100/10 pr-4
          hover:bg-neutral-100/20 "
    >
      <div
        className="  
            relative 
            min-h-[64px] 
            min-w-[64px]"
      >
        <Image fill className="object-cover" src={image} alt="img" />
      </div>
      <p
        className="
                font-medium
                 trancate 
                 py-5
                 "
      >
        {name}
      </p>
      <div
        className=" 
                absolute
                right-5 
                rounded-full
                flex
                justify-center
                items-center
                transition
                opacity-0
                hover:scale-110
                group-hover:opacity-100
                bg-green-500 p-3"
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
