import Color from "color";

const THEME_COLOURS = {
  blue: "#1B68B3",
  turquoise: "#2CD1F8",
  orange: "#FF8000",
  red: "#E53935",
  green: "#41BD54",
  gray: "#999999",
  black: "#232323",
  white: "#FFFFFF",
};

const palletGenerator = (base: string) => ({
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
  black: THEME_COLOURS.black,
  white: THEME_COLOURS.white,
};
