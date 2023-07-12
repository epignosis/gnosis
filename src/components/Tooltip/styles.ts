import { css, Theme, SerializedStyles } from "@emotion/react";

export const tooltipContainer = (
  maxWidth: number,
  { typeScaleSizes, tooltip }: Theme,
): SerializedStyles => {
  return css`
    max-width: ${maxWidth}px;
    background: ${tooltip.background};
    border: 1px solid ${tooltip.border};
    border-radius: 5px;
    color: ${tooltip.color};
    padding: 0.5rem;
    font-size: ${typeScaleSizes["2xs"]};

    &.tooltip[data-placement^="top"] > #arrow {
      bottom: -1px;
    }

    &.tooltip[data-placement^="bottom"] > #arrow {
      top: -1px;
    }

    &.tooltip[data-placement^="left"] > #arrow {
      right: -4px;
    }

    &.tooltip[data-placement^="right"] > #arrow {
      left: -4px;
    }

    #arrow,
    #arrow::before {
      position: absolute;
      width: 1rem;
      height: 0.5rem;
      z-index: -1;
    }

    #arrow::before {
      content: "";
      transform: rotate(45deg);
      background: ${tooltip.border};
    }
  `;
};
