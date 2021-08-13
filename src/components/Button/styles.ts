import { css, Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./Button";
import { hexToRGBA } from "@theme/default/colors";

const roundDimensions = {
  md: "3.5rem",
  lg: "5rem",
};

const btnHeightDimensions = {
  md: "2.5rem",
  lg: "3rem",
};

const btnPadding = {
  md: "0 1.75rem",
  lg: "0 3rem",
};

export const btnContainer = (
  { typeScaleSizes, button }: Theme,
  {
    color,
    block,
    size,
    noGutters,
  }: { color: Color; block: boolean; size: Size; noGutters: boolean },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.lg,
  };

  return css`
    position: relative;
    font-size: ${fontSizes[size]};
    height: ${btnHeightDimensions[size]};
    min-width: ${btnHeightDimensions[size]};
    ${block ? "width: 100%" : ""};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${button[color].default.color};
    background-color: ${button[color].default.background};
    padding: ${noGutters ? 0 : btnPadding[size]};
    border: 1px solid ${button[color].default.borderColor};
    border-radius: 5px;
    line-height: 1.125rem;
    transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in,
      box-shadow 0.2s ease;

    &:hover {
      color: ${button[color].hover.color};
      background-color: ${button[color].hover.background};
      border-color: ${button[color].hover.borderColor};

      .loading-container {
        span > span {
          background: ${button[color].hover.color};
        }
      }
    }

    &:focus {
      color: ${button[color].hover.color};
      background-color: ${button[color].hover.background};
      border-color: ${button[color].hover.borderColor};

      .loading-container {
        span > span {
          background: ${button[color].hover.color};
        }
      }
    }

    &:focus-within {
      color: ${button[color].active.color};
      background-color: ${button[color].active.background};
      border-color: ${button[color].active.borderColor};

      .loading-container {
        span > span {
          background: ${button[color].active.color};
        }
      }
    }

    &:disabled,
    &.disabled {
      color: ${button.disabled.color};
      background-color: ${button.disabled.background};
      border-color: ${button.disabled.borderColor};
      cursor: not-allowed;

      .loading-container {
        span > span {
          background: ${button.disabled.color};
        }
      }
    }

    &.rounded {
      width: ${roundDimensions[size]};
      height: ${roundDimensions[size]};
      padding: 0;
      border-radius: 50%;

      div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &.ghost {
      color: black;
      background-color: transparent;
      border: none;

      &:hover {
        color: ${button[color].ghost.color};
        background-color: ${hexToRGBA(button[color].ghost.background, 0.16)};
      }
    }

    .icon-before {
      margin-right: 0.5rem;
    }

    .icon-after {
      margin-left: 0.5rem;
    }

    .loading-container {
      span > span {
        background: ${button[color].default.color};
      }
    }

    .btn-text {
      display: inline-flex;
    }
  `;
};
