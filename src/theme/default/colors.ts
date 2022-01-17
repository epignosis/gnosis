import Color from "color";

export const THEME_COLOURS = {
  blue: "#1B68B3",
  turquoise: "#2CD1F8",
  orange: "#FF9C28",
  red: "#F20000",
  green: "#41BD54",
  gray: "#6E6E6E",
  lightGray: "#9EA5A9",
  black: "#232323",
  white: "#FFFFFF",
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
  blue: palletGenerator(THEME_COLOURS.blue),
  turquoise: palletGenerator(THEME_COLOURS.turquoise),
  orange: palletGenerator(THEME_COLOURS.orange),
  red: palletGenerator(THEME_COLOURS.red),
  green: palletGenerator(THEME_COLOURS.green),
  gray: palletGenerator(THEME_COLOURS.gray),
  lightGray: palletGenerator(THEME_COLOURS.lightGray),
  black: THEME_COLOURS.black,
  white: THEME_COLOURS.white,
};

export const hexToRGBA = (hex: string, alpha: number): string => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
