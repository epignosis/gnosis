import Color from "color";
import { colors } from "../colors";

export default {
  default: {
    background: colors.white,
    borderColor: colors.secondary.light,
    color: colors.black,
  },
  hover: {
    background: Color(colors.primary.lightest).alpha(0.25).string(),
    borderColor: colors.primary.base,
    color: colors.primary.base,
  },
  active: {
    background: colors.primary.base,
    borderColor: colors.primary.base,
    color: colors.white,
  },
  disabled: {
    background: colors.secondary.lighter,
    borderColor: colors.secondary.light,
    color: colors.secondary.base,
  },
};
