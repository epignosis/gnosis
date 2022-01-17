import { css, SerializedStyles, Theme } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";

export const container = ({ pagination }: Theme): SerializedStyles => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    .pagination-options {
      margin: 0 1rem;

      button {
        margin-right: 0.5rem;

        &:last-of-type {
          margin: 0;
        }
      }

      .isActive {
        background: ${hexToRGBA(pagination.background, 0.16)};
        color: ${pagination.color};
      }
    }
  `;
};
