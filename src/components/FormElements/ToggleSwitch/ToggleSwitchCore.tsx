import React from "react";
import classNames from "classnames";
import { Text } from "../../../";

export type ToggleSwitchVariant = "primary" | "success";
export type ToggleSwitchSize = "sm" | "md";

type ToggleSwitchCoreProps = {
  isChecked: boolean;
  variant: ToggleSwitchVariant;
  size: ToggleSwitchSize;
  hasInlineText?: boolean;
  inlineTextTranslations?: {
    enabled: string;
    disabled: string;
  };
  InternalIcon?: JSX.Element;
  labelledById?: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const switchClassNames = (customClassName: string, isMedium: boolean, isSuccess: boolean): string =>
  classNames(customClassName, {
    "toggle-switch__switch--md": isMedium,
    "toggle-switch__switch--success": isSuccess,
  });

const ToggleSwitchCore: React.FC<ToggleSwitchCoreProps> = ({
  isChecked,
  variant,
  size,
  hasInlineText = false,
  inlineTextTranslations = { enabled: "Enabled", disabled: "Disabled" },
  InternalIcon,
  labelledById,
  onClick,
}) => {
  const isMedium = size === "md";
  const isSuccess = variant === "success";
  const hasIcon = Boolean(InternalIcon);

  return (
    <div className="toggle-switch__wrapper">
      <div
        data-testid="switch"
        data-checked={isChecked}
        className={switchClassNames("toggle-switch__switch", isMedium, isSuccess)}
        onClick={onClick}
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={labelledById}
      >
        {hasInlineText && isMedium && (
          <Text fontSize="sm" className="toggle-switch__inline-text">
            {isChecked ? inlineTextTranslations.enabled : inlineTextTranslations.disabled}
          </Text>
        )}

        {hasIcon && <div className="toggle-switch__icon">{InternalIcon}</div>}
        <div className={switchClassNames("toggle-switch__thumb", isMedium, isSuccess)} />
      </div>
    </div>
  );
};

export default ToggleSwitchCore;
