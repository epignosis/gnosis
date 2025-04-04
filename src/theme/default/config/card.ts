import Color from "color";
import { colors } from "../colors";

export default {
  background: colors.white,
  shadow: colors.secondary.light,
  border: colors.secondary.light,
  hover: {
    background: Color(colors.primary.darker).alpha(0.9).string(),
  },
  overlay: {
    background: Color(colors.primary.darker).alpha(0.5).string(),
  },
};
