import Link from "next/link";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  label: string;
  icon: IconType;
  active?: boolean;
  href: string;
}

const NavbarItem: React.FC<NavItemProps> = ({
  label,
  icon: Icon,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex py-2 gap-x-4 w-full font-medium text-md text-neutral-400 hover:text-white transition cursor-pointer`,
        active && "text-white"
      )}
    >
      <Icon size={26}></Icon>
      <p className="trancate w-full">{label}</p>
    </Link>
  );
};

export default NavbarItem;
