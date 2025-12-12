import { css, Theme, SerializedStyles } from "@emotion/react";

export const notificationStyles = (
  theme: Theme,
  type: "info" | "success" | "warning" | "error",
): SerializedStyles => {
  const { toastNotifications } = theme;
  return css`
    width: 25.625rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 5px;
    gap: 1rem;

    .toast-notification__icon-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .toast-notification__text {
      word-break: break-word;
    }

    .toast-notification__icon {
      height: 1rem;
      svg {
        fill: ${toastNotifications[type].color};
      }
    }

    .toast-notification__close-btn {
      padding: 0;

      svg {
        fill: ${toastNotifications[type].color};
      }

      &:hover {
        color: inherit;
      }
    }

    ${type === "info" &&
    css`
      background: ${toastNotifications.info.background};
      color: ${toastNotifications.info.color};
    `}
    ${type === "success" &&
    css`
      background: ${toastNotifications.success.background};
      color: ${toastNotifications.success.color};
    `}
    ${type === "warning" &&
    css`
      background: ${toastNotifications.warning.background};
      color: ${toastNotifications.warning.color};
    `}
    ${type === "error" &&
    css`
      background: ${toastNotifications.error.background};
      color: ${toastNotifications.error.color};
    `}
  `;
};
