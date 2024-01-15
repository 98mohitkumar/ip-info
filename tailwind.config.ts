import { bicolor } from "tailwind-bicolor";
import { type Config } from "tailwindcss";
import colors, { modifierPairMap } from "./src/tokens/colors";
import spacings from "./src/tokens/spacings";
import fontSize from "./src/tokens/typography";
const variants = ["sm", "md", "lg", "xl"];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/preview/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /grid-cols-/, variants },
    { pattern: /col-span-/, variants },
    {
      pattern: /w-(1\/12|2\/12|3\/12|4\/12|5\/12|6\/12|7\/12|8\/12|9\/12|10\/12|11\/12|12\/12)/,
      variants,
    },
  ],
  theme: {
    ...spacings,
    fontSize,
    colors,
    extend: {
      width: {
        "12/12": "100%",
      },
    },
    fontFamily: {
      sans: ["var(--inter)"],
      mono: ["var(--font-geist-mono)"],
    },
  },
  darkMode: "class",
  plugins: [
    bicolor({
      variantName: "theme",
      getColor({ classColor, theme }) {
        if (classColor.shade && classColor.shade in modifierPairMap) {
          return theme(
            `colors.${classColor.color}.${
              modifierPairMap[Number(classColor.shade) as keyof typeof modifierPairMap]
            }`,
          );
        }

        if (classColor.color && classColor.color.includes("-")) {
          return theme(
            `colors.${classColor.color.split("-")[0]}.${
              classColor.color.split("-")[1] === "dark" ? "light" : "dark"
            }`,
          );
        }

        // return same color
        return theme(`colors.${classColor.color}`);
      },
    }),
  ],
};

export default config;
