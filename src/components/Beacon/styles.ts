import { css, keyframes, SerializedStyles, Theme } from "@emotion/react";

// Keyframes
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

export const beaconContainer = (
  { beacon }: Theme,
  placement: "left" | "right",
  offsetX: string,
  offsetY: string,
): SerializedStyles => css`
  .beacon-content {
    position: relative;
    display: inline-block;
  }

  .beacon {
    position: absolute;
    top: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: ${beacon.color};
    animation: ${grow} 0.4s 1 linear;
    pointer-events: none;
    ${placement === "left"
      ? `
        left: 0;
        right: auto;
        transform: translate(calc(-1 * ${offsetX}), calc(-1 * ${offsetY})) translate(-50%, -50%);
      `
      : `
        right: 0;
        left: auto;
        transform: translate(${offsetX}, calc(-1 * ${offsetY})) translate(50%, -50%);
      `}
  }

  .beacon::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px ${beacon.color};
    animation: ${active} 2s infinite linear;
  }
`;
