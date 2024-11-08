import React, { useState, useEffect } from "react";
import { SerializedStyles } from "@emotion/utils";
import classNames from "classnames";
import { Text, Tooltip } from "../../../";
import { InfoIconSVG } from "../../../icons";
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
  inlineTextTranslations?: {
    enabled: string;
    disabled: string;
  };
  [key: string]: unknown;
  InternalIcon?: JSX.Element;
  onChange?: () => void;
};

const labelClassNames = (
  customClassName: string,
  notSwitchedOff: boolean,
  isRequired: boolean,
): string =>
  classNames(customClassName, {
    "binary-bold": notSwitchedOff,
    required: isRequired,
  });

const switchClassNames = (customClassName: string, isMedium: boolean, isSuccess: boolean): string =>
  classNames(customClassName, {
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
  inlineTextTranslations = { enabled: "Enabled", disabled: "Disabled" },
  variant = "primary",
  notSwitchedOff = false,
  size = "sm",
  subtitle = "",
  tooltip,
  InternalIcon,
  onChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const hasDescription = Boolean(description);
  const hasDescriptionTextWeight = hasDescription ? "700" : "400";
  const isMedium = size === "md";
  const isSuccess = variant === "success";
  const hasIcon = Boolean(InternalIcon);

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
              className={labelClassNames("label is-before", notSwitchedOff, false)}
              onClick={handleToggle}
              weight={hasDescriptionTextWeight}
            >
              {tooltip && (
                <Tooltip content={tooltip} parentProps={{ "aria-label": tooltip }}>
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
            className={switchClassNames("switch", isMedium, isSuccess)}
            onClick={handleToggle}
          >
            {hasInlineText && isMedium && (
              <Text fontSize="sm" className="inline-text">
                {isChecked ? inlineTextTranslations.enabled : inlineTextTranslations.disabled}
              </Text>
            )}

            {hasIcon && <div className="internal-icon">{InternalIcon}</div>}
            <div className={switchClassNames("thumb", isMedium, isSuccess)} />
          </div>
        </div>

        {labelAfter && (
          <div className="label-description-container label-after">
            <Text
              fontSize="sm"
              className={labelClassNames("label", notSwitchedOff, required)}
              onClick={handleToggle}
              as="div"
              weight={hasDescriptionTextWeight}
            >
              {labelAfter}
              {tooltip && (
                <Tooltip content={tooltip} parentProps={{ "aria-label": tooltip }}>
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
