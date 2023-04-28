import { colors, hexToRGBA } from "../colors";

export default {
  border: colors.grayBlue.base,
  rowBackgroundColor: colors.grayBlue.lighter,
  rowHoverColor: hexToRGBA(colors.primary.lightest.toString(), 0.4),
  headerBorderColor: hexToRGBA(colors.gray.lightest.toString(), 0.4),
};
