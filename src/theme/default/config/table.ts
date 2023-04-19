import { colors, hexToRGBA } from "../colors";

export default {
  border: colors.secondary.base,
  rowBackgroundColor: colors.secondary.lighter,
  rowHoverColor: hexToRGBA(colors.primary.lightest.toString(), 0.4),
};
