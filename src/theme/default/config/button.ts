import Color from "color";
import { colors } from "../colors";

export default {
  disabled: {
    background: colors.secondary.lighter,
    color: colors.secondary.base,
    borderColor: colors.secondary.base,
  },
  primary: {
    default: {
      background: colors.primary.base,
      borderColor: colors.primary.base,
      color: colors.white,
    },
    hover: {
      background: colors.primary.light,
      borderColor: colors.primary.light,
      color: colors.white,
    },
    active: {
      background: colors.primary.base,
      borderColor: colors.primary.base,
      color: colors.white,
    },
    ghost: {
      color: colors.primary.base,
      background: Color(colors.primary.lightest).alpha(0.25).string(),
      hoverColor: colors.primary.base,
    },
    outline: {
      color: colors.primary.base,
      borderColor: colors.primary.base,
    },
    link: {
      color: colors.primary.base,
      hoverColor: colors.primary.light,
    },
  },
  secondary: {
    default: {
      background: colors.secondary.lighter,
      borderColor: colors.secondary.lighter,
      color: colors.black,
    },
    hover: {
      background: colors.secondary.base,
      borderColor: colors.secondary.base,
      color: colors.black,
    },
    active: {
      background: colors.secondary.lighter,
      borderColor: colors.secondary.lighter,
      color: colors.black,
    },
    ghost: {
      color: colors.black,
      background: colors.secondary.light,
      hoverColor: colors.black,
    },
    outline: {
      color: colors.secondary.base,
      borderColor: colors.secondary.base,
    },
    link: {
      color: colors.black,
      hoverColor: colors.secondary.base,
    },
  },
  danger: {
    default: {
      background: colors.red.base,
      borderColor: colors.red.base,
      color: colors.white,
    },
    hover: {
      background: colors.red.light,
      borderColor: colors.red.light,
      color: colors.white,
    },
    active: {
      background: colors.red.base,
      borderColor: colors.red.base,
      color: colors.white,
    },
    ghost: {
      color: colors.red.base,
      background: colors.red.light,
      hoverColor: colors.white,
    },
    outline: {
      color: colors.red.base,
      borderColor: colors.red.base,
    },
    link: {
      color: colors.red.base,
      hoverColor: colors.red.lightest,
    },
  },
  success: {
    default: {
      background: colors.green.dark,
      borderColor: colors.green.dark,
      color: colors.white,
    },
    hover: {
      background: colors.green.light,
      borderColor: colors.green.light,
      color: colors.white,
    },
    active: {
      background: colors.green.dark,
      borderColor: colors.green.dark,
      color: colors.white,
    },
    ghost: {
      color: colors.green.dark,
      background: colors.green.light,
      hoverColor: colors.white,
    },
    outline: {
      color: colors.green.dark,
      borderColor: colors.green.dark,
    },
    link: {
      color: colors.green.dark,
      hoverColor: colors.green.lightest,
    },
  },
  primaryLight: {
    default: {
      background: Color(colors.primary.lightest).alpha(0.25).string(),
      borderColor: "transparent",
      color: colors.white,
    },
    hover: {
      background: Color(colors.primary.lightest).alpha(0.5).string(),
      borderColor: "transparent",
      color: colors.white,
    },
    active: {
      background: Color(colors.primary.lightest).alpha(0.5).string(),
      borderColor: Color(colors.primary.lightest).alpha(0.5).string(),
      color: colors.white,
    },
    ghost: {
      color: colors.white,
      background: Color(colors.primary.lightest).alpha(0.5).string(),
      hoverColor: colors.white,
    },
    outline: {
      color: colors.white,
      borderColor: Color(colors.primary.lightest).alpha(0.25).string(),
    },
    link: {
      color: colors.white,
      hoverColor: Color(colors.white).alpha(0.7).string(),
    },
  },
  primaryDarker: {
    default: {
      background: colors.primary.darker,
      borderColor: colors.primary.darker,
      color: colors.white,
    },
    hover: {
      background: Color(colors.primary.darker).alpha(0.9).string(),
      borderColor: Color(colors.primary.darker).alpha(0.9).string(),
      color: colors.white,
    },
    active: {
      background: colors.primary.darker,
      borderColor: colors.primary.darker,
      color: colors.white,
    },
    ghost: {
      color: colors.primary.darker,
      background: Color(colors.primary.darker).alpha(0.15).string(),
      hoverColor: colors.primary.darker,
    },
    outline: {
      color: colors.primary.darker,
      borderColor: colors.primary.darker,
    },
    link: {
      color: colors.primary.darker,
      hoverColor: colors.primary.base,
    },
  },
};
