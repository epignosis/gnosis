import { css, SerializedStyles, Theme } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";
import { mq } from "@theme/utils/breakpoints";

export const container = ({ pagination }: Theme): SerializedStyles => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      display: inline-block;
    }

    .mobile-pagination {
      margin: 0 1rem;
    }

    .pagination-options {
      margin: 0 1rem;

      .active {
        background: ${hexToRGBA(pagination.background, 0.16)};
        color: ${pagination.color};
      }

      #page-selection {
        margin-right: 0.5rem;

        &:last-of-type {
          margin: 0;
        }
      }
    }

    .total-pages {
      ${mq["md"]} {
        margin-right: 2rem;
      }
    }
  `;
};
