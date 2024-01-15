import { ComponentPropsWithRef, forwardRef } from "react";
import { cn, matches } from "@/utils/helpers";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  background?: "primary" | "secondary" | "accent";
  variant?: "flat" | "muted" | "outlined";
  size?: "small" | "medium" | "large";
  weight?: "light" | "regular" | "medium" | "bold";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "medium",
      className,
      disabled,
      background = "primary",
      variant = "flat",
      weight = "medium",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        "w-fit transition-colors duration-300",

        // size variants
        {
          "rounded-md px-8 py-4 text-tiny": matches("small", size),
          "rounded-lg px-16 py-8 text-p": matches("medium", size),
          "rounded-xl px-24 py-12 text-h6": matches("large", size),

          "font-light": matches(weight, "light"),
          "font-regular": matches(weight, "regular"),
          "font-medium": matches(weight, "medium"),
          "font-bold": matches(weight, "bold"),
        },

        // flat variants
        matches("flat", variant) && {
          "border text-color-light theme:border-primary-light theme:bg-primary-dark hover:theme:bg-primary-dark/75":
            matches("primary", background),
          "border theme:border-secondary-dark theme:bg-secondary-dark theme:text-color-light hover:theme:bg-secondary-dark/75":
            matches("secondary", background),
          "border theme:border-accent-dark theme:bg-accent-dark theme:text-color-light hover:theme:bg-accent-dark/75":
            matches("accent", background),
          "pointer-events-none theme:border-gray-300 theme:bg-gray-200 theme:text-gray-500":
            disabled,
        },

        // muted variants
        matches("muted", variant) && {
          "theme:bg-primary-dark/10 theme:text-primary-dark hover:theme:bg-primary-dark/25":
            matches("primary", background),
          "theme:bg-secondary-dark/10 theme:text-secondary-dark hover:theme:bg-secondary-dark/25":
            matches("secondary", background),
          "theme:bg-accent-dark/10 theme:text-accent-dark hover:theme:bg-accent-dark/25": matches(
            "accent",
            background,
          ),
          "pointer-events-none theme:bg-gray-600/10 theme:text-gray-500": disabled,
        },

        // outlined variants
        matches("outlined", variant) && [
          "border bg-transparent",
          {
            "theme:border-primary-dark theme:text-color-dark hover:theme:bg-primary-dark/25":
              matches("primary", background),
            "theme:border-secondary-dark theme:text-color-dark hover:theme:bg-secondary-dark/25":
              matches("secondary", background),
            "theme:border-accent-dark theme:text-color-dark hover:theme:bg-accent-dark/25": matches(
              "accent",
              background,
            ),
            "pointer-events-none theme:border-gray-200 theme:text-gray-500": disabled,
          },
        ],
        className,
      )}
      {...props}>
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
