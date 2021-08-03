import { css } from "@emotion/react";
import { GnosisTheme } from "../default/defaultTheme";

export default ({ body, link }: GnosisTheme) => css`
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
