"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button className="capitalize">get started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
