import Color from "color";

export const THEME_COLOURS = {
  primary: "#0046AB",
  secondary: "#9EA5A9",
  green: "#1B7855",
  orange: "#FF9C28",
  red: "#D12525",
  black: "#232323",
  white: "#FFFFFF",
  blue: "#0046AB",
};

export type ThemeColors = {
  base: string;
  lighter: string;
  lightest: string;
  light: string;
  dark: string;
  darker: string;
  darkest: string;
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

export const colors = {
  primary: palletGenerator(THEME_COLOURS.primary),
  secondary: palletGenerator(THEME_COLOURS.secondary),
  green: palletGenerator(THEME_COLOURS.green),
  orange: palletGenerator(THEME_COLOURS.orange),
  red: palletGenerator(THEME_COLOURS.red),
  black: THEME_COLOURS.black,
  white: THEME_COLOURS.white,
  blue: THEME_COLOURS.blue,
};

export const hexToRGBA = (hex: string, alpha: number): string => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
