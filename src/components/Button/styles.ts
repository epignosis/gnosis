import { css, Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./Button";

type ButtonAttrs = {
  color: Color;
  block: boolean;
  size: Size;
  noGutters: boolean;
};

const roundDimensions = {
  sm: "3rem",
  md: "3.5rem",
  lg: "5rem",
};

const baseButton = (
  { typeScaleSizes, button }: Theme,
  { size, block, noGutters }: Omit<ButtonAttrs, "color">,
): SerializedStyles => {
  const fontSizes = {
    sm: typeScaleSizes.sm,
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.lg,
  };
  const btnHeightDimensions = {
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
  };
  const btnPadding = {
    sm: "0 1rem",
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
    padding: ${noGutters ? "0 0.25rem" : btnPadding[size]};
    border-radius: ${button["primary"].default?.borderRadius};
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
        background: ${button[color].hover.color} !important;
      }
    }
  }

  &:focus-visible {
    color: ${button[color].hover.color};
    background-color: ${button[color].hover.background};
    border-color: ${button[color].hover.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].hover.color} !important;
      }
    }
  }

  &:active {
    color: ${button[color].active.color};
    background-color: ${button[color].active.background};
    border-color: ${button[color].active.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].active.color} !important;
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
        background: ${button[color].hover.color} !important;
      }
    }
  }

  &:focus-visible {
    color: ${button[color].hover.color};
    background-color: ${button[color].hover.background};
    border-color: ${button[color].hover.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].hover.color} !important;
      }
    }
  }

  &:active {
    color: ${button[color].active.color};
    background-color: ${button[color].active.background};
    border-color: ${button[color].active.borderColor};

    .loading-container {
      span > span {
        background: ${button[color].active.color} !important;
      }
    }
  }
`;

const ghostButton = (button: Theme["button"], color: Color): SerializedStyles => css`
  background-color: transparent;
  border: none;
  color: ${button[color].ghost.color};

  &:hover {
    color: ${button[color].ghost.hoverColor};
    background-color: ${button[color].ghost.background};
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

const iconBeforeButton = (size: Size, noGutters: boolean): SerializedStyles => {
  const btnPadding = {
    sm: undefined,
    md: "1.25rem 1.75rem",
    lg: "1.875rem 3rem",
  };

  return css`
    padding-block: 0;
    padding-inline: ${noGutters ? "0.25rem 0.75rem" : btnPadding[size]};

    .icon {
      margin-inline-end: ${noGutters ? "0.25rem" : " 0.5rem"};
    }
  `;
};

const iconAfterButton = (size: Size, noGutters: boolean): SerializedStyles => {
  const btnPadding = {
    sm: undefined,
    md: "1.75rem 1.25rem",
    lg: "3rem 1.875rem",
  };

  return css`
    padding-block: 0;
    padding-inline: ${noGutters ? "0.75rem 0.25rem" : btnPadding[size]};

    .icon {
      margin-inline-start: ${noGutters ? "0.25rem" : " 0.5rem"};
    }
  `;
};

export const btnContainer = (
  theme: Theme,
  { color, size, noGutters, ...attrs }: ButtonAttrs,
): SerializedStyles => {
  const { button } = theme;

  return css`
    ${baseButton(theme, { size, noGutters, ...attrs })};

    &.solid {
      ${solidButton(button, color)};
    }

    &.outline {
      ${outlineButton(button, color)};
    }

    &.ghost {
      ${ghostButton(button, color)};
    }

    &.linkButton {
      ${linkButton(button, color)};
    }

    &.icon-before {
      ${iconBeforeButton(size, noGutters)};
    }

    &.icon-after {
      ${iconAfterButton(size, noGutters)}
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
            background: ${button.disabled.color} !important;
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
        background: ${button[color].default.color} !important;
      }
    }

    &.underlined .btn-text {
      text-decoration: underline;
    }

    .btn-text {
      display: inline-flex;
    }

    .loading {
      position: relative;
      inset-inline-start: ${noGutters ? "0" : "-12px"};
    }
  `;
};
