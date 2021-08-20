import Color from "color";
import { colors } from "../colors";

export default {
  color: colors.black,
  background: Color(colors.gray.base).lighten(0.6).hex(),
};
