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
  GREY = "grey",
  RED = "red",
}

export enum statusTagSizes {
  MD = "md",
  SM = "sm",
}

export type StatusTagProps = {
  testId?: string;
  text?: string;
  size?: statusTagSizes;
  icon?: IconType;
  color?: statusTagColors;
};

const StatusTag: FC<StatusTagProps> = ({
  testId,
  text,
  icon: Icon,
  size = statusTagSizes.MD,
  color = statusTagColors.NEUTRAL,
}) => {
  const dataTestId = testId ? testId : `status-tag-${text}`;

  return (
    <span
      css={(theme): SerializedStyles => statusTagStyles(theme, size)}
      data-testid={dataTestId}
      className={classNames("statusTag", `statusTag--${size}`, `statusTag--${color}`)}
      role="status"
      aria-label={text}
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
