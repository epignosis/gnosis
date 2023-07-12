import { colors, hexToRGBA } from "../colors";

export default {
  border: colors.secondary.base,
  rowBackgroundColor: colors.secondary.lighter,
  rowHoverColor: hexToRGBA(colors.primary.lightest, 0.25),
};
