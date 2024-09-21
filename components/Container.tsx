import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full bg-cc-white rounded-xl", className)}>
      {children}
    </div>
  );
};

export default Container;
