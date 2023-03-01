import { colors } from "../colors";

export default {
  disabled: {
    background: "#EEEEEE",
    color: "#B9B9B9",
    borderColor: "#DBDBDB",
  },
  primary: {
    default: {
      background: colors.primary.base,
      borderColor: colors.primary.base,
      color: colors.white,
    },
    hover: {
      background: colors.primaryAccent.light,
      borderColor: colors.primary.light,
      color: colors.white,
    },
    active: {
      background: colors.primaryAccent.base,
      borderColor: colors.primaryAccent.base,
      color: colors.white,
    },
    ghost: {
      color: colors.primary.base,
      background: colors.primary.lightest,
    },
    outline: {
      color: colors.primary.base,
      borderColor: colors.primary.base,
    },
    link: {
      color: colors.primary.base,
      hoverColor: colors.primaryAccent.light,
    },
  },
  secondary: {
    default: {
      background: "#EDEFF3",
      borderColor: "#EDEFF3",
      color: "#57606B",
    },
    hover: {
      background: "#E3E4E8",
      borderColor: "#E3E4E8",
      color: "#57606B",
    },
    active: {
      background: "#DEDFE2",
      borderColor: "#DEDFE2",
      color: "#57606B",
    },
    ghost: {
      color: "#7A7A7A",
      background: "#B8B8B8",
    },
    outline: {
      color: "#5C5C5C",
      borderColor: "#EDEFF3",
    },
    link: {
      color: "#232323",
      hoverColor: colors.primaryAccent.light,
    },
  },
  danger: {
    default: {
      background: colors.red.base,
      borderColor: colors.red.base,
      color: colors.white,
    },
    hover: {
      background: colors.red.base,
      borderColor: colors.red.base,
      color: colors.white,
    },
    active: {
      background: colors.red.base,
      borderColor: colors.red.base,
      color: colors.white,
    },
    ghost: {
      color: colors.red.base,
      background: colors.red.lightest,
    },
    outline: {
      color: colors.red.base,
      borderColor: colors.red.base,
    },
    link: {
      color: colors.red.base,
      hoverColor: colors.red.base,
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
