import { OnlyAs } from "react-polymorphed";
import type { SupportedTypographyAsProp, TypographyCustomProps } from "@/lib/types";
import { cn, matches, polyRef } from "@/utils/helpers";

const H2 = polyRef<
  SupportedTypographyAsProp, // valid as prop values for suggestions
  TypographyCustomProps, // custom typography props
  OnlyAs<SupportedTypographyAsProp> // valid as from values for type Checking
>(({ className, children, as: Element = "h2", noMargin, weight = "bold", ...props }, ref) => (
  <Element
    ref={ref}
    className={cn(
      "my-12 text-h2",
      { "m-0": noMargin },
      {
        "font-light": matches(weight, "light"),
        "font-normal": matches(weight, "regular"),
        "font-medium": matches(weight, "medium"),
        "font-bold": matches(weight, "bold"),
      },
      className,
    )}
    {...props}>
    {children}
  </Element>
));

export default H2;
