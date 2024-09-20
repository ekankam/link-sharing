import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none py-[11px] px-[27px]",
  {
    variants: {
      variant: {
        default:
          "bg-cc-purple-700 text-cc-white hover:bg-cc-purple-400 focus-visible:ring-cc-purple-400 hover:shadow-cc-purple-shadow active:bg-cc-purple-400 disabled:bg-cc-purple-700 disabled:text-cc-gray-700 disabled:opacity-25",
        outline:
          "border border-cc-purple-700 text-cc-purple-700 bg-cc-white hover:bg-cc-purple-100 focus-visible:ring-cc-purple-700 active:bg-cc-purple-100 disabled:border-cc-purple-700 disabled:opacity-25",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
