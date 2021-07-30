import { css, SerializedStyles } from "@emotion/react";
import { mq } from "./utils/breakpoints";
import { CustomTheme } from "./talentLMSplus";

export default (theme: CustomTheme): SerializedStyles => css`
  html,
  body {
    background: ${theme.body.background};
  }

  /* Small devices (landscape phones, 576px and up) */
  ${mq["sm"]} {
  }

  /* Medium devices (tablets, 768px and up) */
  ${mq["md"]} {
  }

  /* Large devices (desktops, 992px and up) */
  ${mq["lg"]} {
  }

  /* Extra large devices (large desktops, 1200px and up) */
  ${mq["xl"]} {
  }
`;
