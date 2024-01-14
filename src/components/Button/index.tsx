import { ComponentPropsWithRef, forwardRef } from "react";
import { cn, matches } from "@/utils/helpers";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  background?: "primary" | "secondary" | "accent";
  variant?: "flat" | "muted" | "outlined";
  size?: "small" | "medium" | "large";
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
        },

        // flat variants
        matches("flat", variant) && {
          "border text-color-dark theme:border-primary-light theme:bg-primary-light hover:theme:bg-primary-light/90":
            matches("primary", background),
          "border theme:border-secondary-light theme:bg-secondary-light theme:text-color-light hover:theme:bg-secondary-light/90":
            matches("secondary", background),
          "border theme:border-accent-light theme:bg-accent-light theme:text-color-dark hover:theme:bg-accent-light/90":
            matches("accent", background),
          "pointer-events-none theme:border-gray-300 theme:bg-gray-200 theme:text-gray-500":
            disabled,
        },

        // muted variants
        matches("muted", variant) && {
          "theme:bg-primary-light/10 theme:text-primary-light hover:theme:bg-primary-light/15":
            matches("primary", background),
          "theme:bg-secondary-light/10 theme:text-secondary-dark hover:theme:bg-secondary-light/15":
            matches("secondary", background),
          "theme:bg-accent-light/10 theme:text-accent-light hover:theme:bg-accent-light/15":
            matches("accent", background),
          "pointer-events-none theme:bg-gray-300/10 theme:text-gray-300": disabled,
        },

        // outlined variants
        matches("outlined", variant) && [
          "border bg-transparent",
          {
            "theme:border-primary-light theme:text-color-light hover:theme:bg-primary-light/30":
              matches("primary", background),
            "theme:border-secondary-light theme:text-color-light hover:theme:bg-secondary-light/30":
              matches("secondary", background),
            "theme:border-accent-light theme:text-color-light hover:theme:bg-accent-light/30":
              matches("accent", background),
            "pointer-events-none theme:border-gray-200 theme:text-gray-300": disabled,
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
