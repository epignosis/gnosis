import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { container, segmentedButton } from "./styles";
import { IconType } from "types/common";

export type SegmentedButtonOption = {
  value: string;
  label?: ReactNode;
  icon?: IconType;
  disabled?: boolean;
};

export type SegmentedButtonsProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange" | "role"
> & {
  options: SegmentedButtonOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
};

const SegmentedButtons: FC<SegmentedButtonsProps> = ({
  options,
  value,
  onChange,
  className,
  ariaLabel,
  ...rest
}) => {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={classNames("segmented-buttons", className)}
      css={container}
      {...rest}
    >
      {options.map((option, index) => {
        const Icon = option.icon;
        const isSelected = option.value === value;
        const hasLabel = option.label !== undefined && option.label !== null;
        const hasIcon = Boolean(Icon);
        const showOnlyIcon = hasIcon && !hasLabel;

        return (
          <button
            key={option.value}
            type="button"
            id={`segmented-button-${index}`}
            data-testid={`segmented-buttons__button-${index}`}
            css={(theme): SerializedStyles =>
              segmentedButton(theme, {
                isSelected,
                isFirst: index === 0,
                isLast: index === options.length - 1,
                hasLabel,
                hasIcon,
              })
            }
            className={classNames("segmented-buttons__button", {
              "segmented-buttons__button--selected": isSelected,
              "segmented-buttons__button--icon-only": showOnlyIcon,
            })}
            disabled={option.disabled}
            aria-pressed={isSelected}
            aria-label={showOnlyIcon && typeof option.value === "string" ? option.value : undefined}
            onClick={(): void => onChange(option.value)}
          >
            {Icon && <Icon className="segmented-buttons__icon" aria-hidden="true" height={16} />}
            {hasLabel && <span className="segmented-buttons__label">{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedButtons;
