import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { SerializedStyles } from "@emotion/utils";
import classNames from "classnames";
import { Text, Tooltip } from "../../../";
import { InfoIconSVG } from "../../../icons";
import { ToggleContainer } from "./styles";

type ToggleSpecificProps = {
  id: string;
  labelBefore?: string;
  labelAfter?: string;
  defaultChecked?: boolean;
  description?: string;
  labelledById?: string;
  isDisabled?: boolean;
  required?: boolean;
  tooltip?: string;
  variant?: "primary" | "success";
  shouldOutline?: boolean;
  size?: "sm" | "md";
  notSwitchedOff?: boolean;
  preventToggle?: boolean;
  subtitle?: string;
  hasInlineText?: boolean;
  inlineTextTranslations?: {
    enabled: string;
    disabled: string;
  };
  InternalIcon?: JSX.Element;
  onChange?: (isChecked: boolean) => void;
};

type InputHTMLProps = Omit<React.ComponentPropsWithoutRef<"input">, keyof ToggleSpecificProps>;

export type ToggleProps = ToggleSpecificProps & InputHTMLProps;

export type ToggleSwitchHandlers = {
  toggle: () => void;
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

const ToggleSwitch: React.ForwardRefRenderFunction<ToggleSwitchHandlers, ToggleProps> = (
  {
    id,
    labelBefore,
    labelAfter,
    description,
    labelledById,
    defaultChecked = false,
    preventToggle = false,
    isDisabled = false,
    required = false,
    hasInlineText = false,
    inlineTextTranslations = { enabled: "Enabled", disabled: "Disabled" },
    variant = "primary",
    shouldOutline = false,
    notSwitchedOff = false,
    size = "sm",
    subtitle = "",
    tooltip,
    InternalIcon,
    onChange,
    ...rest
  },
  ref,
) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const hasDescription = Boolean(description);
  const hasDescriptionTextWeight = hasDescription ? "700" : "400";
  const isMedium = size === "md";
  const isSuccess = variant === "success";
  const hasIcon = Boolean(InternalIcon);

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    e.stopPropagation();

    if (isDisabled) return;

    if (!preventToggle) setIsChecked((prev) => !prev);

    onChange?.(isChecked);
  };

  useImperativeHandle(ref, () => ({
    toggle: () => setIsChecked((prev) => !prev),
  }));

  return (
    <div
      id={id}
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && handleToggle(e)}
      css={(theme): SerializedStyles =>
        ToggleContainer(theme, {
          isChecked,
          isDisabled,
          hasDescription,
          notSwitchedOff,
          shouldOutline
        })
      }
      data-testid={id}
      data-checked={isChecked}
      aria-label={tooltip}
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
            role="switch"
            aria-checked={isChecked}
            aria-labelledby={labelledById}
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

export default forwardRef(ToggleSwitch);
