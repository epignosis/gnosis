import React, { FC, MouseEvent, KeyboardEvent } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Tooltip from "../../Tooltip/Tooltip";
import Text from "../../Text/Text";
import { DropdownItem } from "../types";
import { DropdownListItemStyles } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

const dropdownItemClasses = (
  value: DropdownItem["value"],
  className: DropdownItem["className"],
): string =>
  classNames({
    "dropdown-list-item": true,
    [`${value}`]: true,
    [`${className}`]: Boolean(className),
  });

type DropdownListItemProps = {
  index: number;
  item: DropdownItem;
  isSearchable: boolean;
  level: number;
  textSize: TypographyLevels;
  onClick: (item: DropdownItem) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLLIElement>, item: DropdownItem) => void;
};

const DropdownListItem: FC<DropdownListItemProps> = ({
  index,
  item,
  isSearchable,
  level,
  textSize,
  onClick,
  onKeyDown,
}) => {
  const { id, isDisabled = false, label, icon, value, tooltipContent, className } = item;

  const handleOnClickListItem = (e: MouseEvent<HTMLLIElement>): void => {
    e.stopPropagation();
    onClick(item);
  };

  const handleOnKeyDownListItem = (e: KeyboardEvent<HTMLLIElement>): void => {
    e.stopPropagation();
    onKeyDown(e, item);
  };

  const content = (
    <>
      {icon}
      <Text fontSize={textSize} title={typeof label === "string" ? label : ""}>
        {label}
      </Text>
    </>
  );

  const tooltipElement = (
    <Tooltip
      key={`${index}-${value}`}
      disabled={!tooltipContent}
      content={tooltipContent}
      parentProps={{ className: "tooltip-content-wrapper" }}
    >
      {content}
    </Tooltip>
  );

  return (
    <li
      className={dropdownItemClasses(value, className)}
      tabIndex={0}
      data-testid={id}
      css={(theme): SerializedStyles =>
        DropdownListItemStyles(theme, { isSearchable, level, isDisabled })
      }
      onClick={handleOnClickListItem}
      onKeyDown={handleOnKeyDownListItem}
    >
      {tooltipElement}
    </li>
  );
};

export default DropdownListItem;
