import React, { useState, useEffect } from "react";
import { SerializedStyles } from "@emotion/utils";
import classNames from "classnames";
import { InfoIconSVG } from "../../../icons";
import { Text, Tooltip } from "../../../";
import { ToggleContainer } from "./styles";

export type ToggleProps = {
  id?: string;
  labelBefore?: string;
  labelAfter?: string;
  defaultChecked?: boolean;
  description?: string;
  isDisabled?: boolean;
  required?: boolean;
  tooltip?: string;
  variant?: "primary" | "success";
  size?: "sm" | "md";
  notSwitchedOff?: boolean;
  subtitle?: string;
  hasInlineText?: boolean;
  [key: string]: unknown;
  onChange?: () => void;
};

const labelClassNames = (notSwitchedOff: boolean, isBefore: boolean, isRequired: boolean): string =>
  classNames("label", {
    "binary-bold": notSwitchedOff,
    "is-before": isBefore,
    required: isRequired,
  });

const switchClassNames = (isMedium: boolean, isSuccess: boolean): string =>
  classNames("switch", {
    md: isMedium,
    success: isSuccess,
  });

const thumbClassNames = (isMedium: boolean, isSuccess: boolean): string =>
  classNames({
    thumb: true,
    md: isMedium,
    success: isSuccess,
  });

const ToggleSwitch: React.FC<ToggleProps> = ({
  id = "toggle-switch",
  labelBefore,
  labelAfter,
  description,
  defaultChecked = false,
  isDisabled = false,
  required = false,
  hasInlineText = false,
  variant = "primary",
  notSwitchedOff = false,
  size = "sm",
  subtitle = "",
  tooltip,
  onChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const hasDescription = Boolean(description);
  const hasDescriptionTextWeight = hasDescription ? "700" : "400";
  const isMedium = size === "md";
  const isSuccess = variant === "success";

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();

    if (!isDisabled) {
      setIsChecked((prev) => !prev);
      if (onChange) onChange();
    }
  };

  return (
    <div
      css={(theme): SerializedStyles =>
        ToggleContainer(theme, {
          isChecked,
          isDisabled,
          hasDescription,
          notSwitchedOff,
        })
      }
      data-testid={id}
      data-checked={isChecked}
      {...rest}
    >
      <div className="switch-container">
        {labelBefore && (
          <div className="label-description-container label-before">
            <Text
              fontSize="sm"
              className={labelClassNames(notSwitchedOff, true, false)}
              onClick={handleToggle}
              weight={hasDescriptionTextWeight}
            >
              {tooltip && (
                <Tooltip content={tooltip}>
                  <InfoIconSVG height={16} />
                </Tooltip>
              )}
              {labelBefore}
            </Text>
            <Text fontSize="sm" as="div" className="description-text">
              {description}
            </Text>
          </div>
        )}

        <div className="switch-container">
          <div
            data-testid="switch"
            data-checked={isChecked}
            className={switchClassNames(isMedium, isSuccess)}
            onClick={handleToggle}
          >
            {hasInlineText && isMedium && (
              <Text fontSize="sm" className="inline-text">
                {isChecked ? "enabled" : "disabled"}
              </Text>
            )}
            <div className={thumbClassNames(isMedium, isSuccess)} />
          </div>
        </div>

        {labelAfter && (
          <div className="label-description-container label-after">
            <Text
              fontSize="sm"
              className={labelClassNames(notSwitchedOff, false, required)}
              onClick={handleToggle}
              as="div"
              weight={hasDescriptionTextWeight}
            >
              {labelAfter}
              {tooltip && (
                <Tooltip content={tooltip}>
                  <InfoIconSVG height={16} />
                </Tooltip>
              )}
            </Text>
            {description && (
              <Text fontSize="sm" as="div" className="description-text">
                {description}
              </Text>
            )}
          </div>
        )}
      </div>
      {subtitle && (
        <div className="subtitle-text">
          <Text fontSize={"sm"}>{subtitle}</Text>
        </div>
      )}
    </div>
  );
};

export default ToggleSwitch;