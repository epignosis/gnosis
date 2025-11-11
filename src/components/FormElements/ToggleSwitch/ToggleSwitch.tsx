import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { SerializedStyles } from "@emotion/utils";
import { Text } from "../../../";
import ToggleLabel from "./ToggleLabel";
import ToggleSwitchCore from "./ToggleSwitchCore";
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
  showOutlineBorder?: boolean;
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
    showOutlineBorder = false,
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

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    e.stopPropagation();

    if (isDisabled) return;

    if (!preventToggle) {
      setIsChecked((prev) => {
        const newValue = !prev;
        onChange?.(newValue);
        return newValue;
      });
    } else {
      onChange?.(isChecked);
    }
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
          showOutlineBorder,
          variant,
          size,
        })
      }
      data-testid={id}
      data-checked={isChecked}
      aria-label={tooltip}
      {...rest}
    >
      <div className="toggle-switch__container">
        {labelBefore && (
          <ToggleLabel
            label={labelBefore}
            position="before"
            description={description}
            tooltip={tooltip}
            notSwitchedOff={notSwitchedOff}
            hasDescription={hasDescription}
            onClick={handleToggle}
          />
        )}

        <ToggleSwitchCore
          isChecked={isChecked}
          variant={variant}
          size={size}
          hasInlineText={hasInlineText}
          inlineTextTranslations={inlineTextTranslations}
          InternalIcon={InternalIcon}
          labelledById={labelledById}
          onClick={handleToggle}
        />

        {labelAfter && (
          <ToggleLabel
            label={labelAfter}
            position="after"
            description={description}
            tooltip={tooltip}
            required={required}
            notSwitchedOff={notSwitchedOff}
            hasDescription={hasDescription}
            onClick={handleToggle}
          />
        )}
      </div>

      {subtitle && (
        <div className="toggle-switch__subtitle">
          <Text fontSize="sm">{subtitle}</Text>
        </div>
      )}
    </div>
  );
};

export default forwardRef(ToggleSwitch);
