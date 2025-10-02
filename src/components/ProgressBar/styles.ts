import { css, Theme, SerializedStyles } from "@emotion/react";
import { BorderRadius, Color, Size } from "./types";
import { getBorderRadiusCss } from "./helpers";

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
    borderRadius?: number | BorderRadius;
  },
): SerializedStyles => {
  const borderRadiusCss = getBorderRadiusCss(borderRadius);

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
        ${borderRadiusCss}
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
          transition: width 0.3s;
        }

        div {
          position: absolute;
          z-index: 1;
          height: 100%;
          width: ${percent - 5}%;
          max-width: 95%;
          min-width: ${percent ? "13%" : "0%"};
          display: flex;
          justify-content: flex-end;
          padding-inline-start: 1rem;
          align-items: center;
          color: ${progressBar[color].percentColor};
        }
      }
    }
  `;
};
