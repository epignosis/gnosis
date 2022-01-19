import { css, Theme, SerializedStyles } from "@emotion/react";
import { Offset, Size } from "./Badge";

const sizes = {
  md: "1rem",
};
export const container = (
  { badge }: Theme,
  { size, offset }: { size: Size; offset: Offset },
): SerializedStyles => {
  return css`
    display: inline-block;
    position: relative;

    .contentContainer {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      position: absolute;
      width: ${sizes[size]};
      height: ${sizes[size]};
      background: ${badge.background};
      color: ${badge.color};
      border-radius: 50%;
      top: ${offset.top};
      right: ${offset.right};
    }
  `;
};
