import { css } from "@emotion/react";
import { GnosisTheme } from "./default/defaultTheme";

export default (theme: GnosisTheme) => css`
  html,
  body {
    background: ${theme.body.background};
  }
`;
