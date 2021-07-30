import { palletGenerator } from "./utils/utils";

export const THEME_COLOURS = {
  blue: "#1B68B3",
  turquoise: "#2CD1F8",
  orange: "#FF8000",
  red: "#E53935",
  green: "#41BD54",
  gray: "#999999",
  black: "#232323",
  white: "#FFFFFF",
};

const colors = {
  blue: palletGenerator(THEME_COLOURS.blue),
  turquoise: palletGenerator(THEME_COLOURS.turquoise),
  orange: palletGenerator(THEME_COLOURS.orange),
  red: palletGenerator(THEME_COLOURS.red),
  green: palletGenerator(THEME_COLOURS.green),
  gray: palletGenerator(THEME_COLOURS.gray),
  black: THEME_COLOURS.black,
  white: THEME_COLOURS.white,
};

const talentLMSplus = {
  body: {
    background: colors.white,
  },
  button: {
    disabled: {
      background: "#EEEEEE",
      color: "#B9B9B9",
      borderColor: "#DBDBDB",
    },
    primary: {
      default: {
        background: colors.blue.base,
        borderColor: colors.blue.base,
        color: colors.white,
      },
      hover: {
        background: colors.blue.lightest,
        borderColor: colors.blue.lightest,
        color: colors.white,
      },
      active: {
        background: colors.blue.lighter,
        borderColor: colors.blue.lighter,
        color: colors.white,
      },
      ghost: {
        color: colors.blue.base,
        background: colors.blue.lightest,
      },
    },
    secondary: {
      default: {
        background: "#EDEFF3",
        borderColor: "#EDEFF3",
        color: colors.gray.darker,
      },
      hover: {
        background: "#F2F2F2",
        borderColor: "#F2F2F2",
        color: colors.gray.darker,
      },
      active: {
        background: colors.gray.lighter,
        borderColor: colors.gray.lighter,
        color: colors.gray.darker,
      },
      ghost: {
        color: colors.gray.dark,
        background: colors.gray.light,
      },
    },
    tertiary: {
      default: {
        background: colors.white,
        borderColor: "#9AB6D9",
        color: colors.blue.light,
      },
      hover: {
        background: colors.blue.lightest,
        borderColor: colors.blue.lightest,
        color: colors.white,
      },
      active: {
        background: colors.blue.lighter,
        borderColor: colors.blue.lighter,
        color: colors.white,
      },
      ghost: {
        color: colors.blue.base,
        background: colors.blue.lightest,
      },
    },
    danger: {
      default: {
        background: "#F20000",
        borderColor: "#F20000",
        color: colors.white,
      },
      hover: {
        background: "#F20000",
        borderColor: "#F20000",
        color: colors.white,
      },
      active: {
        background: "#F20000",
        borderColor: "#F20000",
        color: colors.white,
      },
      ghost: {
        color: colors.red.base,
        background: colors.red.lightest,
      },
    },
    success: {
      default: {
        background: colors.green.base,
        borderColor: colors.green.base,
        color: colors.white,
      },
      hover: {
        background: colors.green.base,
        borderColor: colors.green.base,
        color: colors.white,
      },
      active: {
        background: colors.green.base,
        borderColor: colors.green.base,
        color: colors.white,
      },
      ghost: {
        color: colors.green.base,
        background: colors.green.lightest,
      },
    },
  },
};

export type CustomTheme = typeof talentLMSplus;

export default talentLMSplus;
