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
    md: isMedium,
    success: isSuccess,
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
    <div className="switch-wrapper">
      <div
        data-testid="switch"
        data-checked={isChecked}
        className={switchClassNames("switch", isMedium, isSuccess)}
        onClick={onClick}
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
  );
};

export default ToggleSwitchCore;
