import Color from "color";
import { colors } from "../colors";

export default {
  color: colors.primary.base,
  background: colors.primary.lightest,
  boxShadowColor: colors.secondary.light,
  hoverBackground: Color(colors.primary.lightest).alpha(0.25).string(),
  dropdownBackground: colors.secondary.lighter,
  emptyState: colors.white,
  textColor: colors.black,
  iconColor: colors.black,
  white: colors.white,
  scrollBar: colors.secondary.light,
};
