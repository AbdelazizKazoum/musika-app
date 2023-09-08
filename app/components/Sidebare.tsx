"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import NavbarItem from "./NavbarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebare: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 ">
        <Box className="px-5 py-3  ">
          {routes.map((item) => (
            <NavbarItem
              active={item.active}
              icon={item.icon}
              href={item.href}
              label={item.label}
              key={item.label}
            ></NavbarItem>
          ))}
        </Box>
        <Box className=" overflow-y-auto h-full ">
          <Library />
        </Box>
      </div>
      <main className="h-full  flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebare;
