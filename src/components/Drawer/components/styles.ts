import { css, SerializedStyles, Theme } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const drawerHeader = (
  { drawer, typeScaleSizes }: Theme,
  { noGutters }: { noGutters: boolean },
): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${noGutters ? 0 : "1rem 0 1rem 2rem"};
    height: 100%;
    max-height: 4.5rem;

    ${mq["sm"]} {
      padding: ${noGutters ? 0 : "1rem 2rem"};
    }

    button {
      font-size: ${typeScaleSizes.md}rem;
      display: inline-flex;
      background-color: transparent;
      color: ${drawer.closeBtnColor.base};
      padding: 0 1rem;
      border: 0;
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${drawer.closeBtnColor.hover};
      }
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
