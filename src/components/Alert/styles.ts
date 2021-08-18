import { css, Theme, SerializedStyles } from "@emotion/react";
import { AlertType } from "./Alert";
import { hexToRGBA } from "@theme/default/colors";
import { mq } from "@theme/utils/breakpoints";

export const container = ({ alert }: Theme, { type }: { type: AlertType }): SerializedStyles => {
  return css`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${alert[type].background};
    color: ${alert[type].color};
    border-radius: 5px;
    padding: 2rem 3.5rem 2rem 1.75rem;

    .icon {
      display: none;
      margin-right: 1.5rem;

      ${mq["md"]} {
        display: block;
      }
    }

    .close-btn {
      position: absolute;
      height: 100%;
      right: 0.5rem;
      cursor: pointer;
      color: ${hexToRGBA(alert.closeBtnColor, 0.25)};
      background: transparent;
      padding: 0;
      border: 0;

      ${mq["xl"]} {
        right: 1.5rem;
      }
    }
  `;
};
