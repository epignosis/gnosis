import { css } from "@emotion/react";
import { GnosisTheme } from "../../theme/default/defaultTheme";

export const btnContainer = (theme: GnosisTheme, props) => {
  console.log(theme, props);

  return css`
    background-color: ${theme.button.primary.default.background};
  `;
};
