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
    down: ["sm", "xs", "2xs"],
    base: "md",
    up: ["lg", "xl", "2xl", "3xl", "4xl"],
  },
};

const ROOT_FONT_SIZE_PX = 16; // typical browser default
const orderedKeys: TypographyLevels[] = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];

export const generateTypeScaleSizes = (typography: TypeScaleConfig): Readonly<TypeScaleSizes> => {
  const rootFontSizePx = ROOT_FONT_SIZE_PX;
  const baseRem = typography.baseFontSize;
  const basePx = baseRem * rootFontSizePx;
  let currentPx = basePx;

  const levels: Record<TypographyLevels, number> = {
    "2xs": 0,
    xs: 0,
    sm: 0,
    md: baseRem,
    lg: 0,
    xl: 0,
    "2xl": 0,
    "3xl": 0,
    "4xl": 0,
  };

  for (const level of typography.levels.up) {
    currentPx *= typography.sizeRatio; // increase size by ratio
    const roundedPx = Math.round(currentPx); // round to whole px for consistency
    levels[level] = roundedPx / rootFontSizePx; // convert back to rem and store
    currentPx = roundedPx; // carry forward rounded px
  }

  // Reset to base for computing smaller sizes
  currentPx = basePx;

  for (const level of typography.levels.down) {
    currentPx /= typography.sizeRatio;
    const roundedPx = Math.round(currentPx);
    levels[level] = roundedPx / rootFontSizePx;
    currentPx = roundedPx;
  }

  const orderedLevels: TypeScaleSizes = Object.fromEntries(
    orderedKeys.map((key) => [key, levels[key]]),
  ) as TypeScaleSizes;

  // Return via proxy (string with "rem" suffix)
  return new Proxy(orderedLevels as Readonly<TypeScaleSizes>, {
    get: (target, prop: string | symbol): string | undefined => {
      return typeof prop === "string" && prop in target
        ? `${(target as Record<string, number>)[prop]}rem`
        : undefined;
    },
  });
};

// Generate the type scale sizes based on the default configuration.
export const typeScale = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);
