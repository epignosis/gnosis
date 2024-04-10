import Color from "color";
import { colors } from "../colors";

export default {
  generic: {
    required: colors.red.base,
  },
  errors: {
    errorBorderColor: colors.red.base,
  },
  input: {
    placeholderColor: colors.black,
    borderHoverColor: colors.primary.light,
    borderFocusColor: colors.primary.base,
    inputBorderColor: colors.secondary.lighter,
    background: colors.secondary.lighter,
    backgroundFocus: colors.white,
    iconColor: colors.black,
    iconHoverColor: colors.secondary.base,
    hoverColor: colors.secondary.lighter,
    disabledColor: colors.secondary.base,
    disabledBackground: colors.secondary.lighter,
    disabledBorder: colors.secondary.base,
    disabledIcon: colors.secondary.base,
    borderFocus: colors.primary.base,
    infoTooltipColor: colors.blue,
    verticalLineColor: colors.secondary.base,
    textColor: colors.black,
    textColorFocused: colors.white,
  },
  radioButtonGroup: {
    normalBackground: colors.secondary.lighter,
    normalFontColor: colors.black,
    selectedBackground: colors.primary.base,
    selectedFontColor: colors.white,
    borderColor: Color(colors.secondary.light).alpha(0.5).string(),
  },
  multiSelect: {
    background: Color(colors.primary.lightest).alpha(0.25).string(),
    hoverClose: Color(colors.primary.lighter).alpha(0.5).string(),
    hover: colors.secondary.lighter,
  },
  checkbox: {
    partiallySelected: colors.white,
    input: {
      background: colors.primary.base,
      borderColor: colors.black,
      shadowColor: Color(colors.primary.lightest).alpha(0.25).string(),
    },
    disabled: {
      borderColor: colors.secondary.base,
    },
  },
  generalError: {
    borderColor: colors.red.base,
    background: Color(colors.red.light).alpha(0.15).string(),
  },
  toggleSwitch: {
    hoverDisabledColor: Color(colors.primary.lightest).alpha(0.5).string(),
    backgroundEnabled: colors.primary.base,
    backgroundInlineEnabled: colors.green.base,
    backgroundDisabled: colors.secondary.base,
    backgroundInlineDisabled: Color(colors.primary.lightest).alpha(0.5).string(),
    disabledBackground: colors.secondary.light,
    textColor: colors.white,
    requiredAsteriskColor: colors.red.base,
  },
};
