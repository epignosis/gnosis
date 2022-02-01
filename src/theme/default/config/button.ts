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
      background: "#3F8DF2",
      borderColor: "#3F8DF2",
      color: colors.white,
    },
    active: {
      background: "#1978F3",
      borderColor: "#1978F3",
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
      hoverColor: "#3F8DF2",
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
      hoverColor: "#3F8DF2",
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
