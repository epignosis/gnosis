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

    &:after {
      position: absolute;
      width: ${sizes[size]};
      height: ${sizes[size]};
      content: "";
      background: ${badge.background};
      border-radius: 50%;
      top: ${offset.top};
      right: ${offset.right};
    }
  `;
};
