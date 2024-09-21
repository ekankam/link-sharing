import React from "react";
import Image from "next/image";
import { getIcon } from "@/lib/getIcon";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-16 md:gap-[51px] md:items-center md:justify-center h-screen bg-cc-gray-100 p-8 md:p-0">
      <Image src={getIcon("logo-large")} alt="DevLinks Logo" priority />
      {children}
    </section>
  );
};

export default AuthLayout;
