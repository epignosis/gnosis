import { css, Theme, SerializedStyles, keyframes } from "@emotion/react";
import { Offset, Size } from "./Badge";

const sizes = {
  md: "0.5rem",
  lg: "0.75rem",
};

const grow = keyframes`
  0% { transform: scale(.1); }
  100% { transform: scale(1); }
`;

const active = keyframes`
  0% {
    transform: scale(.1);
    opacity: 1;
  }
  70% {
    transform: scale(2.5);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

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

    .content-container.pulse {
      animation: ${grow} 0.4s 1 linear;
      overflow: visible;
      position: absolute;
    }

    .content-container.pulse::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 0 2px 2px ${badge.background};
      animation: ${active} 2s infinite linear;
      z-index: -1;
    }
  `;
};
