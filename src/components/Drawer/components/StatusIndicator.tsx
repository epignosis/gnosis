import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { InfoIconSVG, SuccessIconSVG, CloseCircledSVG } from "../../../icons";
import Text from "../../Text/Text";
import { statusIndicatorStyles } from "./styles";

export type StatusIndicatorType = "success" | "error" | "info";

export type StatusIndicatorProps = {
  type: StatusIndicatorType;
  content: ReactNode;
};

const ICONS = {
  info: <InfoIconSVG height={16} />,
  error: <CloseCircledSVG height={24} />,
  success: <SuccessIconSVG height={16} />,
};

const StatusIndicator: FC<StatusIndicatorProps> = ({ type, content }) => {
  return (
    <div
      css={(theme): SerializedStyles => statusIndicatorStyles(theme, type)}
      data-testid="drawer-status-indicator"
      className={`drawer-status-indicator drawer-status-indicator--${type}`}
    >
      <div className="drawer-status-indicator__icon-container">
        <span className="drawer-status-indicator__icon">{ICONS[type]}</span>
        <Text as="p" fontSize="sm" className="drawer-status-indicator__text">
          {content}
        </Text>
      </div>
    </div>
  );
};

export default StatusIndicator;
