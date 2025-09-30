import { css, Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./types";

const progressBarSize = {
  xs: "3px",
  sm: "5px",
  md: "28px",
  lg: "40px",
};

export const progressBarStyles = (
  { progressBar }: Theme,
  {
    percent,
    showPercentage,
    size,
    color,
    percentageAfter,
    borderRadius,
  }: {
    percent: number;
    showPercentage: boolean;
    size: Size;
    color: Color;
    percentageAfter: boolean;
    borderRadius?: string;
  },
): SerializedStyles => {
  return css`
    .label {
      color: ${progressBar[color].textColor};
    }

    .progress-bar-container {
      display: flex;
      flex-direction: ${percentageAfter ? "row" : "column"};
      width: ${percentageAfter ? `${percent}%` : "100%"};
      align-items: ${percentageAfter ? "center" : "flex-start"};
      gap: 0.5em;

      .percentage-container {
        position: relative;
        height: ${typeof size === "number" ? `${size}px` : progressBarSize[size]};
        width: 100%;
        background-color: ${percentageAfter ? "transparent" : progressBar[color].background};
        ${borderRadius && `border-radius: ${borderRadius}`};
        overflow: hidden;

        &::after {
          content: " ";
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          height: 100%;
          min-width: ${showPercentage && percent ? "20%" : "0%"};
          width: ${percentageAfter ? "100%" : `${percent}%`};
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
    }
  `;
};
