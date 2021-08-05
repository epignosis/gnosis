import { css, SerializedStyles, Theme } from "@emotion/react";

export const btnContainer = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.button.primary.default.background};
`;
