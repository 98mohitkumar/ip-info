import { maxViewportWidth, minViewportWidth, pixelsPerRem } from "./misc";

const spacings = {
  static: [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80],
  responsive: [
    { min: 16, max: 24 },

    { min: 16, max: 32 },
    { min: 24, max: 32 },

    { min: 16, max: 40 },
    { min: 24, max: 40 },
    { min: 32, max: 40 },

    { min: 16, max: 48 },
    { min: 24, max: 48 },
    { min: 32, max: 48 },
    { min: 40, max: 48 },

    { min: 16, max: 64 },
    { min: 24, max: 64 },
    { min: 32, max: 64 },
    { min: 40, max: 64 },
    { min: 48, max: 64 },

    { min: 16, max: 80 },
    { min: 24, max: 80 },
    { min: 32, max: 80 },
    { min: 40, max: 80 },
    { min: 48, max: 80 },
    { min: 64, max: 80 },
  ],
};

function clampBuilder(minSpacing: number, maxSpacing: number) {
  const minWidth = minViewportWidth / pixelsPerRem;
  const maxWidth = maxViewportWidth / pixelsPerRem;

  const minScreenSpacing = minSpacing / pixelsPerRem;
  const maxScreenSpacing = maxSpacing / pixelsPerRem;

  const slope = (maxScreenSpacing - minScreenSpacing) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minScreenSpacing;

  return `clamp(${minScreenSpacing}rem, ${yAxisIntersection.toFixed(5)}rem + ${(
    slope * 100
  ).toFixed(5)}vw, ${maxScreenSpacing}rem)`;
}

const spacingsConfig = {
  margin: {
    auto: "auto",
    ...Object.fromEntries(spacings.static.map((s) => [s, `${s / 16}rem`])),
    ...Object.fromEntries(
      spacings.responsive.map(({ min, max }) => [`${min}${max}`, clampBuilder(min, max)]),
    ),
    ...Object.fromEntries([...Array(13).keys()].map((s) => [`offset-${s}`, `${s * 8.33}%`])),
  },
  padding: {
    ...Object.fromEntries(spacings.static.map((s) => [s, `${s / 16}rem`])),
    ...Object.fromEntries(
      spacings.responsive.map(({ min, max }) => [`${min}${max}`, clampBuilder(min, max)]),
    ),
  },
  gap: {
    ...Object.fromEntries(spacings.static.map((s) => [s, `${s / 16}rem`])),
    ...Object.fromEntries(
      spacings.responsive.map(({ min, max }) => [`${min}${max}`, clampBuilder(min, max)]),
    ),
  },
};

export default spacingsConfig;
