import type { FunctionComponent, JSX, HTMLAttributes } from "react";

export type TypographyCustomProps = HTMLAttributes<HTMLElement> & {
  noMargin?: boolean;
  weight?: "light" | "regular" | "medium" | "bold";
};

export type FontSizeProps = "large" | "small" | "tiny" | "micro";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FunctionalComponent = FunctionComponent<any>;

export type SupportedTypographyAsProp =
  | Extract<
      keyof JSX.IntrinsicElements,
      "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a"
    >
  | FunctionalComponent;

export type PolymorphicAsProp<T> = T | FunctionalComponent;
