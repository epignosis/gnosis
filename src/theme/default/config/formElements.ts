import { colors } from "../colors";

export default {
  errors: {
    errorBorderColor: colors.red.base,
  },
  input: {
    placeholderColor: "#737373",
    borderHoverColor: colors.blue.base,
    inputBorderColor: "#E8E8E8",
    background: "#F1F1F1",
    backgroundFocus: colors.white,
    iconColor: colors.black,
    hoverColor: "#F8F8F8",
    disabledBackground: "#eeeeee",
    disabledBorder: "#cccccc",
    disabledIcon: "#C9C9C9",
  },
  radioButtonGroup: {
    normalBackground: "#F1F1F1",
    normalFontColor: colors.black,
    selectedBackground: colors.blue.base,
    selectedFontColor: colors.white,
    borderColor: "#E8E8E8",
  },
  multiSelect: {
    hover: colors.gray.lighter,
  },
  checkbox: {
    input: {
      background: colors.blue.base,
      borderColor: "#cccccc",
      shadowColor: "#0e59bb1a",
    },
  },
  generalError: {
    borderColor: colors.red.base,
    background: colors.red.lightest,
  },
};
