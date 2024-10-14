import React, { FC } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { statusTagStyles } from "./styles";
import { IconType } from "types/common";

export enum statusTagVariants {
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
  LG = "lg",
}

export type StatusTagProps = {
  testId?: string;
  text?: string;
  size?: statusTagSizes;
  icon?: IconType;
  variant?: statusTagVariants;
};

const StatusTag: FC<StatusTagProps> = ({
  testId,
  text,
  icon: Icon,
  size = statusTagSizes.LG,
  variant = statusTagVariants.NEUTRAL,
}) => {
  const dataTestId = testId ? testId : `status-tag-${text}`;

  return (
    <span
      css={(theme): SerializedStyles => statusTagStyles(theme, size)}
      data-testid={dataTestId}
      className={classNames("statusTag", `statusTag--${size}`, `statusTag--${variant}`)}
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
