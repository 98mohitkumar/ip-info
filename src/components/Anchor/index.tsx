import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { OnlyAs } from "react-polymorphed";
import type { FontSizeProps } from "@/lib/types";
import { cn, matches, polyRef } from "@/utils/helpers";

type AnchorCustomProps = ComponentPropsWithRef<"a"> & {
  weight?: "light" | "regular" | "medium" | "bold";
  size?: FontSizeProps;
  underline?: boolean;
};

const A = polyRef<
  "a", // valid as prop values for suggestions
  AnchorCustomProps, // custom typography props
  OnlyAs<"a" | typeof Link> // valid as from values for type Checking
>(
  (
    { children, as: Element = "a", className, href = "#", underline, weight, size, ...props },
    ref,
  ) => {
    return (
      <Element
        ref={ref}
        href={href}
        className={cn(
          "theme:text-blue-dark text-p",
          "transition-all duration-300 ease-in-out",
          { "underline hover:no-underline": underline },
          { "font-light": matches(weight, "light") },
          { "font-normal": matches(weight, "regular") },
          { "font-medium": matches(weight, "medium") },
          { "font-bold": matches(weight, "bold") },
          { "text-h6": matches(size, "large") },
          { "text-small": matches(size, "small") },
          { "text-tiny": matches(size, "tiny") },
          { "text-micro": matches(size, "micro") },
          className,
        )}
        {...props}>
        {children}
      </Element>
    );
  },
);

export default A;
