import { colors, hexToRGBA } from "../colors";

export default {
  border: colors.grayBlue,
  rowBackgroundColor: colors.grayBlue.lighter,
  rowHoverColor: hexToRGBA(colors.primary.lightest.toString(), 0.4),
};
