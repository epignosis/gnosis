import { css, SerializedStyles } from "@emotion/react";

export const aspectRatioContainer = (padding: number): SerializedStyles => {
  return css`
    position: relative;
    height: 0;
    padding-top: ${padding}%;
    overflow: hidden;

    .aspect-ratio-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
};
