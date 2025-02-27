import React, { FC, MouseEvent, KeyboardEvent } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Tooltip from "../../Tooltip/Tooltip";
import Text from "../../Text/Text";
import { DropdownItem } from "../types";
import { DropdownListItemStyles } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

const dropdownItemClasses = (item: DropdownItem): string =>
  classNames({
    "dropdown-list-item": true,
    [`${item.value}`]: true,
    [`${item.className}`]: Boolean(item.className),
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
  const { isDisabled = false } = item;

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
      {item?.icon}
      <Text fontSize={textSize} title={typeof item.label === "string" ? item.label : ""}>
        {item.label}
      </Text>
    </>
  );

  const tooltipElement = (
    <Tooltip
      key={`${index}-${item.value}`}
      disabled={!item.tooltipContent}
      content={item.tooltipContent}
      parentProps={{ className: "tooltip-content-wrapper" }}
    >
      {content}
    </Tooltip>
  );

  return (
    <li
      className={dropdownItemClasses(item)}
      tabIndex={0}
      data-testid={item.id}
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
