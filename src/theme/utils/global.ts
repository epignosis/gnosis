import { css, Theme, SerializedStyles } from "@emotion/react";

export default ({ body, link }: Theme): SerializedStyles => css`
  html,
  body {
    font-size: 100%;
    background: ${body.background};
    color: ${body.color};
  }

  body {
    font-size: ${body.fontSize};
    line-height: ${body.lineHeight};
  }

  a {
    color: ${link.color};

    &:hover {
      color: ${link.hoverColor};
    }
  }
`;
