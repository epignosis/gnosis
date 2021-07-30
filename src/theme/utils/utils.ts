import Color from "color";

export type ThemeColors = {
  base: string;
  lighter: string;
  lightest: string;
  light: string;
  dark: string;
  darker: string;
  darkest: string;
};

export type FontFamily = "Mulish" | "Fredoka One";

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

type TypeScaleSizes = {
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

export const palletGenerator = (base: string): ThemeColors => ({
  base,
  lightest: Color(base).lighten(0.7).hex(),
  lighter: Color(base).lighten(0.5).hex(),
  light: Color(base).lighten(0.2).hex(),
  dark: Color(base).darken(0.2).hex(),
  darker: Color(base).darken(0.4).hex(),
  darkest: Color(base).darken(0.6).hex(),
});
