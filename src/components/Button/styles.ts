import { css, Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./Button";
import { hexToRGBA } from "@theme/default/colors";

type ButtonAttrs = {
  color: Color;
  block: boolean;
  size: Size;
  noGutters: boolean;
};

const roundDimensions = {
  md: "3.5rem",
  lg: "5rem",
};

const baseButton = (
  { typeScaleSizes }: { typeScaleSizes: Theme["typeScaleSizes"] },
  { size, block, noGutters }: Omit<ButtonAttrs, "color">,
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.lg,
  };
  const btnHeightDimensions = {
    md: "2.5rem",
    lg: "3rem",
  };
  const btnPadding = {
    md: "0 1.75rem",
    lg: "0 3rem",
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
    padding: ${noGutters ? 0 : btnPadding[size]};
    border-radius: 5px;
    line-height: 1.125rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in,
      box-shadow 0.2s ease;
  `;
};

const solidButton = (button: Theme["button"], color: Color): SerializedStyles => css`
  color: ${button[color].default.color};
  background-color: ${button[color].default.background};
  border: 1px solid ${button[color].default.borderColor};

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

  &:active {
    color: ${button[color].active.color};
    background-color: ${button[color].active.background};
    border-color: ${button[color].active.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].active.color};
      }
    }
  }
`;

const outlineButton = (button: Theme["button"], color: Color): SerializedStyles => css`
  color: ${button[color].outline.color};
  background-color: transparent;
  border: 1px solid ${button[color].outline.borderColor};

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

  &:active {
    color: ${button[color].active.color};
    background-color: ${button[color].active.background};
    border-color: ${button[color].active.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].active.color};
      }
    }
  }
`;

const ghostButton = (button: Theme["button"], color: Color): SerializedStyles => css`
  background-color: transparent;
  border: none;

  &:hover {
    color: ${button[color].ghost.color};
    background-color: ${hexToRGBA(button[color].ghost.background, 0.16)};
  }
`;

const linkButton = (button: Theme["button"], color: Color): SerializedStyles => css`
  color: ${button[color].link.color};
  background-color: transparent;
  border: none;

  &:hover {
    color: ${button[color].link.hoverColor};
  }
`;

const iconBeforeButton = (size: Size): SerializedStyles => {
  const btnPadding = {
    md: "0 1.75rem 0 1.25rem",
    lg: "0 3rem 0 1.875rem",
  };

  return css`
    padding: ${btnPadding[size]};

    .icon {
      margin-right: 0.5rem;
    }
  `;
};
const iconAfterButton = (size: Size): SerializedStyles => {
  const btnPadding = {
    md: "0 1.25rem 0 1.75rem",
    lg: "0 1.875rem 0 3rem",
  };

  return css`
    padding: ${btnPadding[size]};

    .icon {
      margin-left: 0.5rem;
    }
  `;
};

export const btnContainer = (
  { typeScaleSizes, button }: Theme,
  { color, size, ...attrs }: ButtonAttrs,
): SerializedStyles => {
  return css`
    ${baseButton({ typeScaleSizes }, { size, ...attrs })};

    &.solid {
      ${solidButton(button, color)};
    }

    &.outline {
      ${outlineButton(button, color)};
    }

    &.ghost {
      ${ghostButton(button, color)};
    }

    &.link {
      ${linkButton(button, color)};
    }

    &.icon-before {
      ${iconBeforeButton(size)};
    }

    &.icon-after {
      ${iconAfterButton(size)}
    }

    &:disabled,
    &.disabled {
      &,
      &:hover,
      &:focus,
      &:active {
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
