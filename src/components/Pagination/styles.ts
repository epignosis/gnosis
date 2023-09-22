import { css, SerializedStyles, Theme } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const container = ({ pagination }: Theme): SerializedStyles => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column-reverse;

    &.isRtl {
      direction: rtl;
    }

    ${mq["md"]} {
      flex-direction: row;
      gap: 2rem;
    }

    .pagination {
      display: flex;
      gap: 0.5rem;
    }

    .pagination-btn {
      width: 2.5rem;
      height: 2.5rem;

      svg {
        fill: ${pagination.iconColor};
      }

      &:hover,
      &:active,
      &:link,
      &:focus {
        svg {
          fill: ${pagination.color};
        }
        background-color: ${pagination.hoverBackground};
      }

      &.disabled,
      &.disabled:hover {
        background-color: transparent;
        svg {
          fill: currentColor;
        }
      }
    }

    .pagination-selector-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;
};
