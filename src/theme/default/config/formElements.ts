import Color from "color";
import { colors } from "../colors";

export default {
  errors: {
    errorBorderColor: colors.red.base,
  },
  input: {
    placeholderColor: colors.black,
    borderHoverColor: colors.primary.light,
    inputBorderColor: colors.secondary.lighter,
    background: colors.secondary.lighter,
    backgroundFocus: colors.white,
    iconColor: colors.black,
    hoverColor: colors.black,
    disabledBackground: colors.secondary.lighter,
    disabledBorder: colors.secondary.base,
    disabledIcon: colors.secondary.base,
    borderFocus: colors.primary.base,
  },
  radioButtonGroup: {
    normalBackground: colors.secondary.lighter,
    normalFontColor: colors.black,
    selectedBackground: colors.primary.base,
    selectedFontColor: colors.white,
    borderColor: colors.secondary.base,
  },
  multiSelect: {
    hover: colors.secondary.lighter,
  },
  checkbox: {
    input: {
      background: colors.primary.base,
      borderColor: colors.black,
      shadowColor: Color(colors.primary.lightest).alpha(0.25).string(),
    },
  },
  generalError: {
    borderColor: colors.red.base,
    background: Color(colors.red.light).alpha(0.15).string(),
  },
};
