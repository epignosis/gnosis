import Color from "color";
import { colors } from "../colors";

export default {
  primary: {
    background: Color(colors.primary.lightest).alpha(0.25).string(),
    progressBackground: colors.primary.base,
    percentColor: colors.white,
    textColor: colors.primary.base,
  },
  success: {
    background: colors.secondary.lighter,
    progressBackground: colors.green.base,
    percentColor: colors.white,
    textColor: colors.black,
  },
  white: {
    background: Color(colors.primary.lightest).alpha(0.25).string(),
    progressBackground: colors.white,
    percentColor: colors.black,
    textColor: colors.white,
  },
  darkgreen: {
    background: colors.secondary.lighter,
    progressBackground: colors.green.darker,
    percentColor: colors.white,
    textColor: colors.black,
  },
};
