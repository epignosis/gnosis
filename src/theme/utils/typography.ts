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

export type TypeScaleConfig = {
  baseFontSize: number;
  lineHeight: number;
  sizeRatio: number;
  levels: {
    base: string;
    up: TypographyLevels[];
    down: TypographyLevels[];
  };
};

export const DEFAULT_TYPESCALE_CONFIG: Readonly<TypeScaleConfig> = {
  baseFontSize: 1, // rem
  lineHeight: 1.5715,
  sizeRatio: 1.125, // major second
  levels: {
    base: "md",
    up: ["lg", "xl", "2xl", "3xl", "4xl"],
    down: ["sm", "xs", "2xs"],
  },
};

export const generateTypeScaleSizes = (typography: TypeScaleConfig): Readonly<TypeScaleSizes> => {
  const levels = { [typography.levels.base]: typography.baseFontSize };
  let levelSize: number = typography.baseFontSize;

  typography.levels.up.forEach((level) => {
    levelSize = levelSize * typography.sizeRatio;
    Object.assign(levels, { [level]: levelSize.toFixed(3) });
  });

  // Set the base font size so we can calculate correctly the "down" typescale levels
  levelSize = typography.baseFontSize;

  typography.levels.down.forEach((level) => {
    levelSize = levelSize / typography.sizeRatio;
    Object.assign(levels, { [level]: levelSize.toFixed(3) });
  });

  const typeScale = new Proxy(levels as Readonly<TypeScaleSizes>, {
    get: (target, prop): string => `${target[prop]}rem`,
  });

  return typeScale;
};

// Generate the type scale sizes based on the default configuration.
export const typeScale = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);
