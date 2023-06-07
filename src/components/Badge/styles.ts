import { css, Theme, SerializedStyles } from "@emotion/react";
import { Offset, Size } from "./Badge";

const sizes = {
  md: "0.5rem",
};

export const container = (
  { badge }: Theme,
  { size, offset }: { size: Size; offset: Offset },
): SerializedStyles => {
  return css`
    display: inline-block;
    position: relative;

    &.has-content {
      .content-container {
        min-width: 1.25rem;
        height: 1.25rem;
        border: 2px solid ${badge.border};
      }
    }

    &.big-content {
      .content-container {
        min-width: 2rem;
        border-radius: 20px;
      }
    }

    .content-container {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      position: absolute;
      min-width: ${sizes[size]};
      height: ${sizes[size]};
      background: ${badge.background};
      color: ${badge.color};
      border-radius: 50%;
      inset-block-start: ${offset.top};
      inset-inline-end: ${offset.right};
      z-index: 1;
    }
  `;
};
