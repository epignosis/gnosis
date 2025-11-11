import React from "react";
import classNames from "classnames";
import { Text, Tooltip } from "../../../";
import { InfoIconSVG } from "../../../icons";

type ToggleLabelProps = {
  label: string;
  position: "before" | "after";
  description?: string;
  tooltip?: string;
  required?: boolean;
  notSwitchedOff?: boolean;
  hasDescription?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const labelClassNames = (
  customClassName: string,
  notSwitchedOff: boolean,
  isRequired: boolean,
): string =>
  classNames(customClassName, {
    "toggle-switch__label--binary-bold": notSwitchedOff,
    "toggle-switch__label--required": isRequired,
  });

const ToggleLabel: React.FC<ToggleLabelProps> = ({
  label,
  position,
  description,
  tooltip,
  required = false,
  notSwitchedOff = false,
  hasDescription = false,
  onClick,
}) => {
  const hasDescriptionTextWeight = hasDescription ? "700" : "400";
  const isBeforeLabel = position === "before";

  return (
    <div className={`toggle-switch__label-container toggle-switch__label-container--${position}`}>
      <Text
        fontSize="sm"
        className={labelClassNames(
          `toggle-switch__label ${isBeforeLabel ? "toggle-switch__label--before" : ""}`,
          notSwitchedOff,
          required,
        )}
        onClick={onClick}
        as="div"
        weight={hasDescriptionTextWeight}
      >
        {tooltip && isBeforeLabel && (
          <Tooltip content={tooltip} parentProps={{ "aria-label": tooltip }}>
            <InfoIconSVG height={16} />
          </Tooltip>
        )}
        {label}
        {tooltip && !isBeforeLabel && (
          <Tooltip content={tooltip} parentProps={{ "aria-label": tooltip }}>
            <InfoIconSVG height={16} />
          </Tooltip>
        )}
      </Text>
      {description && (
        <Text fontSize="sm" as="div" className="toggle-switch__description">
          {description}
        </Text>
      )}
    </div>
  );
};

export default ToggleLabel;
