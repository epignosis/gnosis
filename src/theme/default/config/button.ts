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
      borderRadius: "5px",
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
      color: colors.secondary.darker,
      borderColor: colors.secondary.dark,
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
      background: colors.green.base,
      borderColor: colors.green.base,
      color: colors.white,
    },
    hover: {
      background: colors.green.light,
      borderColor: colors.green.light,
      color: colors.white,
    },
    active: {
      background: colors.green.base,
      borderColor: colors.green.base,
      color: colors.white,
    },
    ghost: {
      color: colors.green.base,
      background: colors.green.light,
      hoverColor: colors.white,
    },
    outline: {
      color: colors.green.base,
      borderColor: colors.green.base,
    },
    link: {
      color: colors.green.base,
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
  white: {
    default: {
      background: colors.white,
      borderColor: colors.white,
      color: colors.primary.darker,
    },
    hover: {
      background: colors.white,
      borderColor: colors.white,
      color: colors.primary.base,
    },
    active: {
      background: colors.white,
      borderColor: colors.white,
      color: colors.primary.base,
    },
    ghost: {
      color: colors.primary.darker,
      background: colors.white,
      hoverColor: colors.primary.base,
    },
    outline: {
      color: colors.primary.darker,
      borderColor: colors.white,
    },
    link: {
      color: colors.primary.darker,
      hoverColor: colors.primary.base,
    },
  },
  orange: {
    default: {
      background: colors.orange.base,
      borderColor: colors.orange.base,
      color: colors.black,
    },
    hover: {
      background: colors.orange.light,
      borderColor: colors.orange.light,
      color: colors.black,
    },
    active: {
      background: colors.orange.base,
      borderColor: colors.orange.base,
      color: colors.black,
    },
    ghost: {
      color: colors.orange.base,
      background: colors.orange.light,
      hoverColor: colors.black,
    },
    outline: {
      color: colors.black,
      borderColor: colors.orange.light,
    },
    link: {
      color: colors.orange.base,
      hoverColor: colors.primary.base,
    },
  },
};
