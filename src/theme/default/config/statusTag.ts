import Color from "color";
import { colors } from "../colors";

export default {
  neutral: Color(colors.primary.lightest).alpha(0.25).string(),
  positive: Color(colors.green.light).alpha(0.15).string(),
  negative: Color(colors.red.light).alpha(0.15).string(),
  inactive: colors.secondary.light,
  warning: Color(colors.orange.base).alpha(0.15).string(),
  promo: colors.primary.base,
  pale: Color(colors.primary.lightest).alpha(0.25).string(),
  grey: colors.secondary.lighter,
  red: colors.red.base,
};
