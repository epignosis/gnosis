import { css, SerializedStyles, Theme } from "@emotion/react";

export const container = ({ pagination }: Theme): SerializedStyles => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    .previous-page-btn,
    .next-page-btn {
      &:hover,
      &:active,
      &:link,
      &:focus {
        svg {
          fill: ${pagination.color};
        }
        background-color: ${pagination.hoverBackground}!important;
      }

      .rotate-left {
        height: 24px;
        transform: rotateZ(-90deg);
      }

      .rotate-right {
        height: 24px;
        transform: rotateZ(90deg);
      }

      &.disabled {
        background-color: transparent;
        svg {
          fill: currentColor;
        }
      }

      &:hover {
        &.disabled {
          background-color: transparent !important;
          svg {
            fill: currentColor;
          }
        }
      }
    }

    .results-per-page {
      display: flex;
      align-items: center;
      margin-right: 32px;
    }

    .total-pages {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  `;
};
