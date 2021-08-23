import { colors } from "../colors";

export default {
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
    outline: {
      color: colors.blue.base,
      borderColor: colors.blue.base,
    },
    link: {
      color: colors.blue.base,
      hoverColor: colors.blue.lightest,
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
    outline: {
      color: colors.gray.darker,
      borderColor: "#EDEFF3",
    },
    link: {
      color: "#232323",
      hoverColor: colors.blue.lightest,
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
    outline: {
      color: "#F20000",
      borderColor: "#F20000",
    },
    link: {
      color: "#F20000",
      hoverColor: "#F20000",
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
    outline: {
      color: colors.green.base,
      borderColor: colors.green.base,
    },
    link: {
      color: colors.green.base,
      hoverColor: colors.green.base,
    },
  },
};
