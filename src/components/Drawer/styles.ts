import { css, SerializedStyles, Theme } from "@emotion/react";

export const drawerContainer = ({ drawer }: Theme, width: string): SerializedStyles => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1001;

    .dialog {
      position: absolute;
      height: 100%;
      width: 100%;
      max-width: ${width};
      display: flex;
      flex-direction: column;
      background-color: ${drawer.dialog};
      padding: 0;
      border: 0;

      &.placement-left {
        left: 0;
        right: auto;
      }

      &.placement-right {
        left: auto;
        right: 0;
      }
    }
  `;
};
