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
    "binary-bold": notSwitchedOff,
    required: isRequired,
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
    <div className={`label-description-container label-${position}`}>
      <Text
        fontSize="sm"
        className={labelClassNames(
          `label ${isBeforeLabel ? "is-before" : ""}`,
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
        <Text fontSize="sm" as="div" className="description-text">
          {description}
        </Text>
      )}
    </div>
  );
};

export default ToggleLabel;
