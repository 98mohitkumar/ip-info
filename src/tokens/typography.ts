import { maxViewportWidth, minViewportWidth, pixelsPerRem } from "./misc";

const fontSizes = {
  static: [
    { key: "h1Static", size: 72, lineHeight: 72, letterSpacing: -3 },
    { key: "h2Static", size: 56, lineHeight: 60, letterSpacing: -2 },
    { key: "h3Static", size: 40, lineHeight: 44, letterSpacing: -1.5 },
    { key: "h4Static", size: 32, lineHeight: 36, letterSpacing: -1 },
    { key: "h5Static", size: 24, lineHeight: 32, letterSpacing: -1 },
    { key: "h6Static", size: 20, lineHeight: 28, letterSpacing: -0.8 },

    // base size and variations of p
    { key: "p", size: 16, lineHeight: 24, letterSpacing: -0.6 },
    { key: "small", size: 14, lineHeight: 20, letterSpacing: -0.1 },
    { key: "tiny", size: 12, lineHeight: 16, letterSpacing: 0.3 },
    { key: "micro", size: 10, lineHeight: 12, letterSpacing: 0.3 },
  ],
  responsive: [
    {
      key: "h1",
      size: { minSize: 45, maxSize: 72 },
      lineHeight: { minHeight: 52.8, maxHeight: 72 },
      letterSpacing: { minSpacing: -1.56, maxSpacing: -3 },
    },
    {
      key: "h2",
      size: { minSize: 38, maxSize: 56 },
      lineHeight: { minHeight: 44, maxHeight: 60 },
      letterSpacing: { minSpacing: -1.3, maxSpacing: -2 },
    },
    {
      key: "h3",
      size: { minSize: 31.1, maxSize: 40 },
      lineHeight: { minHeight: 36.2, maxHeight: 44 },
      letterSpacing: { minSpacing: -1.1, maxSpacing: -1.5 },
    },
    {
      key: "h4",
      size: { minSize: 26, maxSize: 32 },
      lineHeight: { minHeight: 30.24, maxHeight: 36 },
      letterSpacing: { minSpacing: -0.86, maxSpacing: -1 },
    },
    {
      key: "h5",
      size: { minSize: 21.6, maxSize: 24 },
      lineHeight: { minHeight: 30.24, maxHeight: 32 },
      letterSpacing: { minSpacing: -0.86, maxSpacing: -1 },
    },
    // base size 18, scale: 1.2
    {
      key: "h6",
      size: { minSize: 18, maxSize: 20 },
      lineHeight: { minHeight: 25.2, maxHeight: 28 },
      letterSpacing: { minSpacing: -0.72, maxSpacing: -0.8 },
    },
  ],
};

const staticFontSizeBuilder = (size: number, lineHeight: number, letterSpacing: number) => {
  return [
    `${size / pixelsPerRem}rem`,
    {
      lineHeight: `${lineHeight / pixelsPerRem}rem`,
      letterSpacing: `${letterSpacing / pixelsPerRem}rem`,
    },
  ];
};

const responsiveFontSizeBuilder = (
  minSize: number,
  maxSize: number,
  minHeight: number,
  maxHeight: number,
  minSpacing: number,
  maxSpacing: number,
) => {
  const minWidth = minViewportWidth / pixelsPerRem;
  const maxWidth = maxViewportWidth / pixelsPerRem;

  const minScreenSize = minSize / pixelsPerRem;
  const maxScreenSize = maxSize / pixelsPerRem;

  const minScreenLineHeight = minHeight / pixelsPerRem;
  const maxScreenLineHeight = maxHeight / pixelsPerRem;

  const minScreenSpacing = minSpacing / pixelsPerRem;
  const maxScreenSpacing = maxSpacing / pixelsPerRem;

  const slope = (maxScreenSize - minScreenSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minScreenSize;

  const lineHeightSlope = (maxScreenLineHeight - minScreenLineHeight) / (maxWidth - minWidth);
  const lineHeightYAxisIntersection = -minWidth * lineHeightSlope + minScreenLineHeight;

  const spacingSlope = (maxScreenSpacing - minScreenSpacing) / (maxWidth - minWidth);
  const spacingYAxisIntersection = -minWidth * spacingSlope + minScreenSpacing;

  return [
    `clamp(${minScreenSize}rem, ${yAxisIntersection.toFixed(5)}rem + ${(slope * 100).toFixed(
      5,
    )}vw, ${maxScreenSize}rem)`,
    {
      lineHeight: `clamp(${minScreenLineHeight}rem, ${lineHeightYAxisIntersection.toFixed(
        5,
      )}rem + ${(lineHeightSlope * 100).toFixed(5)}vw, ${maxScreenLineHeight}rem)`,
      letterSpacing: `clamp(${minScreenSpacing}rem, ${spacingYAxisIntersection.toFixed(5)}rem + ${(
        spacingSlope * 100
      ).toFixed(5)}vw, ${maxScreenSpacing}rem)`,
    },
  ];
};

type FontConfig = {
  [key: string]: [
    fontSize: string,
    {
      lineHeight: string;
      letterSpacing: string;
    },
  ];
};

const fontSizesConfig: FontConfig = {
  ...Object.fromEntries(
    fontSizes.static.map(({ key, size, lineHeight, letterSpacing }) => [
      [key],
      staticFontSizeBuilder(size, lineHeight, letterSpacing),
    ]),
  ),

  ...Object.fromEntries(
    fontSizes.responsive.map(
      ({
        key,
        size: { minSize, maxSize },
        lineHeight: { minHeight, maxHeight },
        letterSpacing: { minSpacing, maxSpacing },
      }) => [
        [key],
        responsiveFontSizeBuilder(minSize, maxSize, minHeight, maxHeight, minSpacing, maxSpacing),
      ],
    ),
  ),
};

export default fontSizesConfig;
