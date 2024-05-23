"use client";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { UserButton } from '@clerk/nextjs'
import { usePathname } from "next/navigation";
const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "dashboard",
      icon: LayoutGrid,
      path:"/dashboard"
    },
    {
      id: 2,
      name: "budgets",
      icon: PiggyBank,
      path:"/dashboard/budget"
    },
    {
      id: 3,
      name: "expense",
      icon: ReceiptText,
      path:"/dashboard/expenses"
    },
    {
      id: 4,
      name: "upgrade",
      icon: ShieldCheck,
      path:"/dashboard/upgrade"
    },
  ];
  const path = usePathname();
  useEffect(() => {
console.log(path);
  },[])
  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <h2 className={ ` capitalize flex gap-2 items-center text-gray-500  p-5 cursor-pointer rounded-md font-medium hover:text-primary hover:bg-blue-100 ${path==menu.path&&'text-primary bg-blue-100'}`}>
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="capitalize fixed bottom-10 flex gap-2 items-center">
        <UserButton/>
profile
      </div>
    </div>
  );
};

export default SideNav;
