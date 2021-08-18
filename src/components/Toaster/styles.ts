import { css, Theme, SerializedStyles } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";
import { mq } from "@theme/utils/breakpoints";

export const toaster = ({ alert }: Theme): SerializedStyles => {
  return css`
    padding: 1rem;

    ${mq["md"]} {
      padding: 0;
    }

    .close-btn {
      color: ${hexToRGBA(alert.closeBtnColor, 0.25)};
      margin: auto;
    }

    .Toastify__toast-body {
      display: flex;
      align-items: center;
      border-radius: 5px;

      svg {
        margin-right: 1rem;
      }
    }

    .Toastify__toast--info {
      background: ${alert.info.background};
      color: ${alert.info.color};
    }

    .Toastify__toast--success {
      background: ${alert.success.background};
      color: ${alert.success.color};
    }

    .Toastify__toast--warning {
      background: ${alert.warning.background};
      color: ${alert.warning.color};
    }

    .Toastify__toast--error {
      background: ${alert.danger.background};
      color: ${alert.danger.color};
    }
  `;
};
