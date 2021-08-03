export const DEFAULT_TYPESCALE_CONFIG = {
  baseFontSize: 1, // rem
  lineHeight: 1.5715,
  sizeRatio: 1.125, // major second
  levels: {
    base: "md",
    up: ["lg", "xl", "2xl", "3xl", "4xl"],
    down: ["sm", "xs", "2xs"],
  },
};

export type TypeScaleSizes = {
  "2xs": number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
  "4xl": number;
};

export type TypographyLevels = keyof TypeScaleSizes;

export type Typography = Readonly<{
  baseFontSize: number;
  lineHeight: number;
  sizeRatio: number;
  levels: {
    base: string;
    up: TypographyLevels[];
    down: TypographyLevels[];
  };
}>;

export const generateTypeScaleSizes = (typography: Typography) => {
  const levels = { [typography.levels.base]: typography.baseFontSize };
  let levelSize: number = typography.baseFontSize;

  typography.levels.up.forEach((level) => {
    levelSize = levelSize * typography.sizeRatio;
    Object.assign(levels, { [level]: levelSize.toFixed(3) });
  });

  levelSize = typography.baseFontSize;
  typography.levels.down.forEach((level) => {
    levelSize = levelSize / typography.sizeRatio;
    Object.assign(levels, { [level]: levelSize.toFixed(3) });
  });

  for (const key in levels) {
    if (levels.hasOwnProperty(key)) {
      levels[key] = `${levels[key]}rem`;
    }
  }

  return levels;
};
