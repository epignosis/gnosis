import { colors } from "./colors";
import { button, tag, chip, badge, loader } from "./atoms/";

// ATOMS
// Button

const defaultTheme = {
  body: {
    color: colors.black,
    background: colors.white,
    fontSize: "100%",
    lineHeight: 1.5715,
  },
  typeScaleSizes: {
    md: "1rem",
    lg: "1.125rem",
    xl: "1.266rem",
    "2xl": "1.424rem",
    "3xl": "1.602rem",
    "4xl": "1.802rem",
    sm: "0.889rem",
    xs: "0.790rem",
    "2xs": "0.702rem",
  },
  link: {
    color: colors.blue.base,
    hoverColor: colors.blue.lighter,
  },
  button,
  loader,
  chip,
  tag,
  badge,
};

export type GnosisTheme = typeof defaultTheme;

export default defaultTheme;
