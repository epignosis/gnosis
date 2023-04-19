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
    },
    outline: {
      color: colors.primary.base,
      borderColor: colors.primary.base,
    },
    link: {
      color: colors.primary.base,
      hoverColor: Color(colors.primary.lightest).alpha(0.25).string(),
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
      background: colors.secondary.lighter,
    },
    outline: {
      color: colors.secondary.base,
      borderColor: colors.secondary.base,
    },
    link: {
      color: colors.black,
      hoverColor: colors.secondary.lighter,
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
      background: Color(colors.red.light).alpha(0.15).string(),
    },
    outline: {
      color: colors.red.base,
      borderColor: colors.red.base,
    },
    link: {
      color: colors.red.base,
      background: Color(colors.red.light).alpha(0.15).string(),
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
      background: Color(colors.green.light).alpha(0.15).string(),
    },
    outline: {
      color: colors.green.base,
      borderColor: colors.green.base,
    },
    link: {
      color: colors.green.base,
      hoverColor: Color(colors.green.light).alpha(0.15).string(),
    },
  },
};
