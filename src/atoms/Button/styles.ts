import { css, SerializedStyles, Theme } from "@emotion/react";

export const btnContainer = (
  theme: Theme,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: { color: string; size: string },
): SerializedStyles => css`
  background-color: ${theme.button.primary.default.background};
`;
