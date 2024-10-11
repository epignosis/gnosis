import React, { FC } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { statusTagStyles } from "./styles";
import { IconType } from "types/common";

export enum statusTagColors {
  NEUTRAL = "neutral",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  INACTIVE = "inactive",
  WARNING = "warning",
  PROMO = "promo",
  PALE = "pale",
  PENDING = "pending",
  GREY = "grey",
  RED = "red",
}

export enum statusTagSizes {
  MD = "md",
  LG = "lg",
}

export type StatusTagProps = {
  text: string;
  showIcon?: boolean;
  showText?: boolean;
  size?: statusTagSizes;
  icon?: IconType;
  color?: statusTagColors;
};

const StatusTag: FC<StatusTagProps> = ({
  text,
  icon: Icon,
  size = statusTagSizes.LG,
  color = statusTagColors.NEUTRAL,
  showIcon,
  showText = true,
}) => {
  return (
    <span
      css={(theme): SerializedStyles => statusTagStyles(theme, size, showText)}
      data-testid="status-tag"
      className={classNames("statusTag", `statusTag--${size}`, `statusTag--${color}`)}
      role="status"
      aria-label={text}
    >
      {showIcon && Icon && (
        <span className="statusTag__icon" aria-hidden="true">
          <Icon height={16} />
        </span>
      )}
      {showText && <span className="statusTag__text">{text}</span>}
    </span>
  );
};

export default StatusTag;
