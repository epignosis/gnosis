import Color from "color";
import { colors } from "../colors";

export default {
  background: colors.white,
  shadow: colors.gray.lightest,
  hover: {
    background: Color(colors.primaryAccent.darkest).alpha(0.6).string(),
  },
  overlay: {
    background: Color(colors.primaryAccent.darkest).alpha(0.6).string(),
  },
};
