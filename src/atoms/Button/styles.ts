import { css, SerializedStyles } from "@emotion/react";
import { GnosisTheme } from "../../theme/default/defaultTheme";

export const btnContainer = (theme: GnosisTheme): SerializedStyles => css`
  background-color: ${theme.button.primary.default.background};
`;
