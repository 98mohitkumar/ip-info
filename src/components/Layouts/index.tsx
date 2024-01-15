import { type ComponentPropsWithoutRef } from "react";
import { OnlyAs } from "react-polymorphed";
import type { PolymorphicAsProp } from "@/lib/types";
import { cn, matches, polyRef } from "@/utils/helpers";

type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnWidthProps = {
  xs?: ColCount;
  sm?: ColCount;
  md?: ColCount;
  lg?: ColCount;
  xl?: ColCount;
};

type DivLayoutProps = ComponentPropsWithoutRef<"div">;

// ------------------- Layout container -----------------
export const LayoutContainer = polyRef<
  "section",
  DivLayoutProps,
  OnlyAs<PolymorphicAsProp<"section">>
>(({ className = "", as: Element = "section", children, ...props }, ref) => (
  <Element ref={ref} className={cn("mx-auto max-w-screen-lg px-1648", className)} {...props}>
    {children}
  </Element>
));

type FlexWrap = {
  wrap?:
    | "xs"
    | "max-xs"
    | "sm"
    | "max-sm"
    | "md"
    | "max-md"
    | "lg"
    | "max-lg"
    | "xl"
    | "max-xl"
    | "no-wrap";
};

// ----------------- Flex container ---------------
export const FlexBox = polyRef<"div", DivLayoutProps & FlexWrap, OnlyAs<PolymorphicAsProp<"div">>>(
  ({ className = "", as: Element = "div", wrap, children, ...props }, ref) => (
    <Element
      ref={ref}
      className={cn(
        "flex",
        {
          "flex-wrap": matches("xs", wrap),
          "flex-wrap sm:flex-nowrap": matches("max-xs", wrap),
          "sm:flex-wrap": matches("sm", wrap),
          "max-sm:flex-wrap": matches("max-sm", wrap),
          "md:flex-wrap": matches("md", wrap),
          "max-md:flex-wrap": matches("max-md", wrap),
          "lg:flex-wrap": matches("lg", wrap),
          "max-lg:flex-wrap": matches("max-lg", wrap),
          "xl:flex-wrap": matches("xl", wrap),
          "max-xl:flex-wrap": matches("max-xl", wrap),
          "flex-nowrap": matches("no-wrap", wrap),
        },
        className,
      )}
      {...props}>
      {children}
    </Element>
  ),
);

// ------------------ Flex item ------------------
const getColClasses = ({
  xs,
  sm,
  md,
  lg,
  xl,
  type = "flex",
}: ColumnWidthProps & {
  type?: "flex" | "grid";
}) => {
  let widthXsString: string;
  let widthSmString: string;
  let widthMdString: string;
  let widthLgString: string;
  let widthXlString: string;

  if (type === "grid") {
    widthXsString = xs ? `col-span-${xs}` : "";
    widthSmString = sm ? `sm:col-span-${sm}` : "";
    widthMdString = md ? `md:col-span-${md}` : "";
    widthLgString = lg ? `lg:col-span-${lg}` : "";
    widthXlString = xl ? `xl:col-span-${xl}` : "";
  } else {
    widthXsString = xs ? `w-${xs}/12` : "";
    widthSmString = sm ? `sm:w-${sm}/12` : "";
    widthMdString = md ? `md:w-${md}/12` : "";
    widthLgString = lg ? `lg:w-${lg}/12` : "";
    widthXlString = xl ? `xl:w-${xl}/12` : "";
  }

  return [widthXsString, widthSmString, widthMdString, widthLgString, widthXlString].join(" ");
};

type FlexColProps = ColumnWidthProps & DivLayoutProps & { grow?: boolean; shrink?: boolean };

export const Col = polyRef<"div", FlexColProps, OnlyAs<PolymorphicAsProp<"div">>>(
  (
    { className = "", as: Element = "div", xs, sm, md, lg, xl, children, grow, shrink, ...props },
    ref,
  ) => (
    <Element
      ref={ref}
      className={cn(
        "w-12/12 flex-shrink-0 flex-grow-0",
        getColClasses({
          xs,
          sm,
          md,
          lg,
          xl,
        }),
        { "flex-grow-1": grow },
        { "flex-shrink-1": shrink },
        className,
      )}
      {...props}>
      {children}
    </Element>
  ),
);

// ------------ Grid container ----------------
const getGridCols = ({ xs, sm, md, lg, xl }: ColumnWidthProps) => {
  const colXsString = xs ? `grid-cols-${xs}` : "";
  const colSmString = sm ? `sm:grid-cols-${sm}` : "";
  const colMdString = md ? `md:grid-cols-${md}` : "";
  const colLgString = lg ? `lg:grid-cols-${lg}` : "";
  const colXlString = xl ? `xl:grid-cols-${xl}` : "";

  return [colXsString, colSmString, colMdString, colLgString, colXlString].join(" ");
};

type GridBoxProps = DivLayoutProps & ColumnWidthProps;

export const GridBox = polyRef<"div", GridBoxProps, OnlyAs<PolymorphicAsProp<"div">>>(
  ({ className = "", children, as: Element = "div", xs, sm, md, lg, xl, ...props }, ref) => (
    <Element
      ref={ref}
      className={cn("grid", getGridCols({ xs, sm, md, lg, xl }), className)}
      {...props}>
      {children}
    </Element>
  ),
);

export const GridCol = polyRef<"div", GridBoxProps, OnlyAs<PolymorphicAsProp<"div">>>(
  ({ className = "", children, as: Element = "div", xs, sm, md, lg, xl, ...props }, ref) => (
    <Element
      ref={ref}
      className={cn("col-span-1", getColClasses({ xs, sm, md, lg, xl, type: "grid" }), className)}
      {...props}>
      {children}
    </Element>
  ),
);
