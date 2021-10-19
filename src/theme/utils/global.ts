import { css, Theme, SerializedStyles } from "@emotion/react";

export default ({ body, link }: Theme): SerializedStyles => css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${body.fontFamily};
    color: ${body.color};
    background: ${body.background};
  }

  p {
    margin: 0;
  }

  img {
    display: block;
  }

  a,
  button {
    cursor: pointer;
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: 0.875rem;
    line-height: ${body.lineHeight};
  }

  a {
    color: ${link.color};
    text-decoration: none;

    &:hover {
      color: ${link.hoverColor};
    }
  }
`;
