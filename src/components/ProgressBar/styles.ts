import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./ProgressBar";

const progressBarSize = {
  md: "28px",
  lg: "40px",
};

export const container = (
  { progressBar }: Theme,
  { percent, size, rounded }: { percent: number; size: Size; rounded: boolean },
): SerializedStyles => {
  return css`
    position: relative;
    height: ${progressBarSize[size]};
    width: 100%;
    background-color: ${progressBar.background};
    ${rounded && "border-radius: 5px"};
    overflow: hidden;

    &::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      min-width: ${percent ? "20%" : "0%"};
      width: ${percent}%;
      background-color: ${progressBar.progressBackground};
    }

    div {
      position: absolute;
      z-index: 1;
      height: 100%;
      width: ${percent - 5}%;
      max-width: 95%;
      min-width: ${percent ? "13%" : "0%"};
      display: flex;
      padding-left: 1rem;
      justify-content: flex-end;
      align-items: center;
      color: ${progressBar.percentColor};
    }
  `;
};
