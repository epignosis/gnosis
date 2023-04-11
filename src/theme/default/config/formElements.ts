import Color from "color";
import { colors } from "../colors";

export default {
  errors: {
    errorBorderColor: colors.red.base,
  },
  input: {
    placeholderColor: colors.black,
    borderHoverColor: colors.primary.light,
    inputBorderColor: colors.gray.lighter,
    background: colors.gray.lighter,
    backgroundFocus: colors.white,
    iconColor: colors.black,
    hoverColor: colors.black,
    disabledBackground: colors.gray.lighter,
    disabledBorder: colors.gray.base,
    disabledIcon: colors.gray.base,
    borderFocus: colors.primary.base,
  },
  radioButtonGroup: {
    normalBackground: colors.gray.lighter,
    normalFontColor: colors.black,
    selectedBackground: colors.primary.base,
    selectedFontColor: colors.white,
    borderColor: colors.gray.base,
  },
  multiSelect: {
    hover: colors.gray.lighter,
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
