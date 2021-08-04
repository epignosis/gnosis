import { css, SerializedStyles } from "@emotion/react";
import { GnosisTheme } from "../../theme/default/defaultTheme";

export const btnContainer = (
  theme: GnosisTheme,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: { color: string; size: string },
): SerializedStyles => css`
  background-color: ${theme.button.primary.default.background};
`;
