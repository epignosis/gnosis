import { css, Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./ProgressBar";

const progressBarSize = {
  xs: "3px",
  sm: "5px",
  md: "28px",
  lg: "40px",
};

export const container = (
  { progressBar }: Theme,
  {
    percent,
    showPercentage,
    size,
    rounded,
    color,
  }: { percent: number; showPercentage: boolean; size: Size; rounded: boolean; color: Color },
): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .label {
      color: ${progressBar[color].textColor};
    }

    .percentage-container {
      position: relative;
      height: ${progressBarSize[size]};
      width: 100%;
      background-color: ${progressBar[color].background};
      ${rounded && "border-radius: 5px"};
      overflow: hidden;

      &::after {
        content: " ";
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        height: 100%;
        min-width: ${showPercentage && percent ? "20%" : "0%"};
        width: ${percent}%;
        background-color: ${progressBar[color].progressBackground};
      }

      div {
        position: absolute;
        z-index: 1;
        height: 100%;
        width: ${percent - 5}%;
        max-width: 95%;
        min-width: ${percent ? "13%" : "0%"};
        display: flex;
        padding-inline-start: 1rem;
        justify-content: flex-end;
        align-items: center;
        color: ${progressBar[color].percentColor};
      }
    }
  `;
};
