import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { ChevronArrowDownSVG } from "../../../icons/";
import Text from "../../Text/Text";
import useClickOutside from "../hooks";
import { ListPlacement, PaginationDropDownOptions } from "../types";
import { PaginationSelectorStyles } from "./styles";

const dropdownWrapperClasses = (placement: ListPlacement): string =>
  classNames({
    "dropdown-wrapper": true,
    bottom: placement === "bottom",
    top: placement === "top",
  });

const SelectedOptionClasses = (isSelected: boolean): string =>
  classNames({
    "is-selected": isSelected,
  });

type PaginationSelectorProps = {
  items: PaginationDropDownOptions[];
  selected: number;
  listPlacement?: ListPlacement;
  disabled?: boolean;
  onClickItemHandler: (item: number) => void;
};

const PaginationSelector: FC<PaginationSelectorProps> = ({
  items,
  selected,
  listPlacement = "top",
  disabled = false,
  onClickItemHandler,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState<number>(selected);
  useClickOutside(wrapperRef, () => setIsListOpen(false));

  const toggleList = (): void => {
    if (!disabled) {
      // We want to reset the dropdown list every time it opens
      setIsListOpen((prevState) => !prevState);
    }
  };

  const handleListItemSelect = (item: number): void => {
    if (isListOpen) {
      onClickItemHandler(item);
      setSelectedListItem(item);
      setIsListOpen(false);
    }
  };

  useEffect(() => {
    setSelectedListItem(selected);
  }, [selected]);

  useEffect(() => {
    if (disabled) {
      setIsListOpen(false);
    }
  }, [disabled]);

  const hasItems = items.length > 1;

  return (
    <div
      css={(theme): SerializedStyles => PaginationSelectorStyles(theme, { isOpen: isListOpen })}
      ref={wrapperRef}
    >
      <button
        className={`dropdown-button ${!hasItems ? "disabled" : ""}`}
        disabled={!hasItems || disabled}
        onClick={toggleList}
        title={`${selectedListItem}`}
      >
        <Text fontSize="sm" weight="700">
          {selectedListItem}
        </Text>
        {hasItems && <ChevronArrowDownSVG />}
      </button>

      {isListOpen && hasItems && (
        <div className={dropdownWrapperClasses(listPlacement)}>
          <ul role="list" className="dropdown-list">
            {items.map(({ value, label }) => {
              const isSelected = value === selectedListItem;

              return (
                <li
                  className="dropdown-list-item"
                  data-testid="pagination-page"
                  key={`item-${value}`}
                  title={`${value}`}
                  onClick={(): void => handleListItemSelect(value)}
                >
                  <Text fontSize="sm" className={SelectedOptionClasses(isSelected)}>
                    {label}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PaginationSelector;
