import { generateTypeScaleSizes, DEFAULT_TYPESCALE_CONFIG } from "../utils/typography";
import { colors } from "./colors";
import {
  alert,
  badge,
  breadcrumb,
  button,
  card,
  chip,
  drawer,
  formElements,
  loader,
  modal,
  progressBar,
  result,
  sidebar,
  tabs,
  tag,
  tooltip,
  pagination,
} from "./config";

const typeScaleSizes = generateTypeScaleSizes(DEFAULT_TYPESCALE_CONFIG);

const defaultTheme = {
  body: {
    color: colors.black,
    background: colors.white,
    fontSize: "100%",
    lineHeight: 1.5715,
    fontFamily: `"Mulish", Arial, sans-serif`,
  },
  link: {
    color: colors.primary.base,
    hoverColor: colors.primary.lighter,
  },
  typeScaleSizes,
  alert,
  badge,
  breadcrumb,
  button,
  card,
  chip,
  drawer,
  formElements,
  loader,
  modal,
  progressBar,
  result,
  sidebar,
  tabs,
  tag,
  tooltip,
  pagination,
};

export type GnosisTheme = typeof defaultTheme;

export default defaultTheme;
