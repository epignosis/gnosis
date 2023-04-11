import Color from "color";
import { colors } from "../colors";

export default {
  color: colors.primary.base,
  background: Color(colors.primary.lightest).alpha(0.25).string(),
};
