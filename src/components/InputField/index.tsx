import * as React from "react";
import { cn } from "@/utils/helpers";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "px-16 py-12",
          "text-p theme:text-gray-900",
          "placeholder:text-gray-600",
          "rounded-lg outline outline-1 theme:bg-gray-100/40 theme:outline-gray-200",
          "file:border-0 file:bg-transparent file:pl-0 file:pr-8 file:font-medium",
          "focus-visible:outline-0 focus-visible:ring-2 focus-visible:theme:ring-gray-700",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;
