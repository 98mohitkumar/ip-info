import clsx, { ClassValue } from "clsx";
import { forwardRef } from "react";
import { PolyRefFunction } from "react-polymorphed";
import { extendTailwindMerge } from "tailwind-merge";
import colors from "@/tokens/colors";
import fontSizesConfig from "@/tokens/typography";

type Matchable = string | number | boolean | undefined;

export const matches = (prop: Matchable, value: Matchable) => prop === value;

const textColorClasses = Object.entries(colors)
  .map(([key, value]) => {
    if (matches(typeof value, "string")) {
      return key;
    } else {
      return Object.entries(value).map(([nestedKey]) => `${key}-${nestedKey}`);
    }
  })
  .flat();

const twMerge = extendTailwindMerge({
  classGroups: {
    "font-size": [{ text: Object.keys(fontSizesConfig) }],
    "text-color": [{ text: textColorClasses }],
  },
});

export const cn = (...classNames: ClassValue[]) => {
  return twMerge(clsx(...classNames));
};

export const polyRef = forwardRef as PolyRefFunction;
