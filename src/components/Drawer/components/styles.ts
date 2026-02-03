import { css, SerializedStyles } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const drawerHeader = ({ noGutters }: { noGutters: boolean }): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${noGutters ? 0 : "2rem 0"};
    padding-block: ${noGutters ? 0 : "1rem"};
    height: 100%;
    max-height: 4.5rem;

    ${mq["sm"]} {
      padding: ${noGutters ? 0 : "1rem 2rem"};
    }

    .close-button {
      margin-inline-end: -0.8rem;
    }
  `;
};

export const drawerBody = css`
  height: 100%;
  overflow-y: auto;
`;

export const maskContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const footerContainer = css`
  padding: 1rem;

  ${mq["md"]} {
    padding: 2rem;
  }
`;
