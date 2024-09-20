import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <label
        htmlFor={type}
        className={cn(
          "flex h-full w-full rounded-lg border border-cc-gray-200 focus-within:border-cc-purple-700 bg-cc-white gap-3 placeholder:text-cc-gray-400 placeholder:opacity-50 text-cc-gray-400 focus-within:shadow-cc-purple-shadow caret-cc-purple-700 overflow-hidden p-3 items-center",
          { "border-cc-red": props.isError },
          className
        )}
      >
        {props.icon ? props.icon : null}
        <input
          type={type}
          className={cn("w-full h-full focus:outline-none", {
            "text-cc-red": props.isError,
          })}
          ref={ref}
          {...props}
        />
        {props.isError ? (
          <p className="text-xs text-cc-red flex-shrink-0">
            {props.errorMessage}
          </p>
        ) : null}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
