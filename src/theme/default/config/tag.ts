import Color from "color";
import { colors } from "../colors";

export default {
  backgroundColor: Color(colors.primary.lightest).alpha(0.25).string(),
  color: colors.primary.base,
};
