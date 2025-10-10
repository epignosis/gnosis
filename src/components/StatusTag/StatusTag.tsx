import React, { FC, HTMLAttributes } from "react";
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
  | "red"
  | "transparent";

export type StatusTagProps = HTMLAttributes<HTMLSpanElement> & {
  testId?: string;
  text?: string;
  size?: StatusTagSizes;
  icon?: IconType;
  iconSize?: number;
  color?: StatusTagColors;
  ariaLabel?: string;
  fontWeight?: "700" | "400";
};

const StatusTag: FC<StatusTagProps> = ({
  testId,
  text,
  icon: Icon,
  size = "md",
  color = "neutral",
  iconSize = 16,
  ariaLabel,
  fontWeight,
  ...rest
}) => {
  const dataTestId = testId ? testId : `status-tag-${text}`;
  const defaultFontWeight = size === "sm" ? "700" : "400";

  return (
    <span
      css={(theme): SerializedStyles =>
        statusTagStyles(theme, { size, fontWeight: fontWeight ?? defaultFontWeight })
      }
      data-testid={dataTestId}
      className={classNames("statusTag", `statusTag--${size}`, `statusTag--${color}`)}
      role="status"
      aria-label={ariaLabel ?? text}
      {...rest}
    >
      {Icon && (
        <span className="statusTag__icon" aria-hidden="true">
          <Icon height={iconSize} />
        </span>
      )}
      {text && <span className="statusTag__text">{text}</span>}
    </span>
  );
};

export default StatusTag;
