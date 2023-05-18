import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Modal";
import { mq } from "@theme/utils/breakpoints";

const widthDimensions = {
  md: "32rem",
  lg: "64rem",
  fullscreen: "100%",
};

export const modalContent = css`
  padding: 1.5rem;
`;

export const modalHeader = ({ modal }: Theme): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    border-bottom: 1px solid ${modal.border};

    .close-btn {
      svg {
        color: ${modal.color};

        &:hover {
          color: ${modal.iconHover};
        }
      }
    }
  `;
};

export const modalFooter = ({ modal }: Theme): SerializedStyles => {
  return css`
    padding: 1.25rem;
    border-top: 1px solid ${modal.border};
  `;
};

// plain styles as string
export const portalStyles = (size: Size, opacity: number): SerializedStyles => {
  return css`
    .overlay-base {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, ${opacity.toString()});
      opacity: 0;
      z-index: 9999;
      transition: opacity 0.2s ease-in-out;

      &.overlay-before {
        opacity: 0;
      }
    }

    .overlay-after {
      opacity: 1;
    }

    .content-after {
      background-color: #fff;
      height: 100%;
      width: 100%;
      border-radius: 0;

      ${mq["md"]} {
        height: auto;
        border-radius: 5px;
        width: ${widthDimensions[size]};
        max-width: 90%;
      }

      ${size === "fullscreen" &&
      `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    }
  `;
};
