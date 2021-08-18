import { css, Theme, SerializedStyles } from "@emotion/react";

export default ({ body, link }: Theme): SerializedStyles => css`
  html {
    font-size: 100%;
  }

  body {
    font-size: 0.875rem;
    line-height: ${body.lineHeight};
    background: ${body.background};
    color: ${body.color};
  }

  a {
    color: ${link.color};
    text-decoration: none;

    &:hover {
      color: ${link.hoverColor};
    }
  }
`;
