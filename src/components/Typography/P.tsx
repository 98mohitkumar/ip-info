import { OnlyAs } from "react-polymorphed";
import type { FontSizeProps, SupportedTypographyAsProp, TypographyCustomProps } from "@/lib/types";
import { cn, matches, polyRef } from "@/utils/helpers";

type ParagraphCustomProps = TypographyCustomProps & {
  size?: FontSizeProps;
};

const P = polyRef<
  SupportedTypographyAsProp, // valid as prop values for suggestions
  ParagraphCustomProps, // custom typography props
  OnlyAs<SupportedTypographyAsProp> // valid as from values for type Checking
>(
  (
    {
      className,
      children,
      as: Element = "p",
      noMargin,
      size = "default",
      weight = "regular",
      ...props
    },
    ref,
  ) => (
    <Element
      ref={ref}
      className={cn(
        "my-8",
        { "m-0": noMargin },
        {
          "font-light": matches(weight, "light"),
          "font-regular": matches(weight, "regular"),
          "font-medium": matches(weight, "medium"),
          "font-bold": matches(weight, "bold"),
        },
        {
          "text-h6": matches(size, "large"),
          "text-p": matches(size, "default"),
          "text-small": matches(size, "small"),
          "text-tiny": matches(size, "tiny"),
          "text-micro": matches(size, "micro"),
        },
        className,
      )}
      {...props}>
      {children}
    </Element>
  ),
);

export default P;
