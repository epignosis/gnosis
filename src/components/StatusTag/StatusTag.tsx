import React, { FC } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { statusTagStyles } from "./styles";
import { IconType } from "types/common";

export type StatusTagSizes = "sm" | "md";
export type StatusTagColors =
  | "neutral"
  | "positive"
  | "negative"
  | "inactive"
  | "warning"
  | "promo"
  | "pale"
  | "grey"
  | "red";

export type StatusTagProps = {
  testId?: string;
  text?: string;
  size?: StatusTagSizes;
  icon?: IconType;
  color?: StatusTagColors;
  onClick?: () => void;
};

const StatusTag: FC<StatusTagProps> = ({
  testId,
  text,
  icon: Icon,
  size = "md",
  color = "neutral",
  onClick,
}) => {
  const dataTestId = testId ? testId : `status-tag-${text}`;

  return (
    <span
      css={(theme): SerializedStyles => statusTagStyles(theme, size)}
      data-testid={dataTestId}
      className={classNames("statusTag", `statusTag--${size}`, `statusTag--${color}`)}
      role="status"
      aria-label={text}
      onClick={onClick}
    >
      {Icon && (
        <span className="statusTag__icon" aria-hidden="true">
          <Icon height={16} />
        </span>
      )}
      {text && <span className="statusTag__text">{text}</span>}
    </span>
  );
};

export default StatusTag;
