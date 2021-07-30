import { css } from "@emotion/react";

export const btnContainer = (theme, props) => {
  console.log(theme, props);

  return css`
    background-color: ${theme.button.primary.default.background};
  `;
};
