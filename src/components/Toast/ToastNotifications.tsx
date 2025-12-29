import React, { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { Button, Text } from "../../index";
import { CloseSVG, DeactivateSVG, InfoIconSVG, SuccessIconSVG, WarningIconSVG } from "../../icons";
import { notificationStyles } from "./styles";

const ICONS = {
  info: <InfoIconSVG height={16} />,
  error: <DeactivateSVG height={16} />,
  success: <SuccessIconSVG height={16} />,
  warning: <WarningIconSVG height={16} />,
};

const ToastNotification = ({
  content,
  type,
  onClose,
}: {
  content: ReactNode;
  type: "info" | "success" | "warning" | "error";
  onClose: () => void;
}): JSX.Element => {
  return (
    <div
      css={(theme): SerializedStyles => notificationStyles(theme, type)}
      className="toast-notification"
    >
      <div className="toast-notification__icon-container">
        <span className="toast-notification__icon">{ICONS[type]}</span>
        <Text as="p" fontSize="sm" className="toast-notification__text">
          {content}
        </Text>
      </div>

      {Boolean(onClose) && (
        <Button
          aria-label="Close toast notification"
          className="toast-notification__close-btn"
          variant="link"
          onClick={onClose}
        >
          <CloseSVG height={20} />
        </Button>
      )}
    </div>
  );
};

export default ToastNotification;
