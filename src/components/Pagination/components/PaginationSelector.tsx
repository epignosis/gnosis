import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { ChevronArrowDownSVG } from "../../../icons/";
import Text from "../../Text/Text";
import useClickOutside from "../hooks";
import { PaginationDropDownOptions } from "../types";
import { PaginationSelectorStyles } from "./styles";

const SelectedOptionClasses = (isSelected: boolean): string =>
  classNames({
    "is-selected": isSelected,
  });

type PaginationSelectorProps = {
  items: PaginationDropDownOptions[];
  selected: number;
  onClickItemHandler: (item: number) => void;
};

const PaginationSelector: FC<PaginationSelectorProps> = ({
  items,
  selected,
  onClickItemHandler,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState<number>(selected);
  useClickOutside(wrapperRef, () => setIsListOpen(false));

  const toggleList = (): void => {
    // We want to reset the dropdown list every time it opens
    setIsListOpen((prevState) => !prevState);
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

  return (
    <div css={(theme): SerializedStyles => PaginationSelectorStyles(theme, { isOpen: isListOpen })}>
      <div className="dropdown" ref={wrapperRef}>
        <div className="dropdown-button" onClick={toggleList}>
          <button>
            <Text fontSize="sm">{selectedListItem}</Text>
            <ChevronArrowDownSVG />
          </button>
        </div>

        {isListOpen && items.length > 0 && (
          <div className="open-list-container">
            <div className="dropdown-wrapper">
              <ul role="list" className="dropdown-list">
                {items.map(({ value, label }) => {
                  const isSelected = value === selectedListItem;

                  return (
                    <li
                      data-testid="pagination-page"
                      key={`item-${value}`}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginationSelector;
