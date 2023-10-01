import { OnlyAs } from "react-polymorphed";
import { SupportedTypographyAsProp, type TypographyCustomProps } from "@/lib/types";
import { cn, matches, polyRef } from "@/utils/helpers";

const H6 = polyRef<
  SupportedTypographyAsProp, // valid as prop values for suggestions
  TypographyCustomProps, // custom typography props
  OnlyAs<SupportedTypographyAsProp> // valid as from values for type Checking
>(({ className, children, as: Element = "h6", noMargin, weight = "bold", ...props }, ref) => {
  return (
    <Element
      ref={ref}
      className={cn(
        "my-8 text-h6",
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
  );
});

export default H6;
