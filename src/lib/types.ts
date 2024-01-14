import type { FC, JSX, HTMLAttributes } from "react";

export type TypographyCustomProps = HTMLAttributes<HTMLElement> & {
  noMargin?: boolean;
  weight?: "light" | "regular" | "medium" | "bold";
};

export type FontSizeProps = "large" | "default" | "small" | "tiny" | "micro";

export type SupportedTypographyAsProp =
  | Extract<
      keyof JSX.IntrinsicElements,
      "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a"
    >
  | FC;

export type PolymorphicAsProp<T> = T | FC;
