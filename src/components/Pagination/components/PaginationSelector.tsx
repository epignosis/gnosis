import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { ChevronArrowDownSVG } from "../../../icons/";
import Text from "../../Text/Text";
import useClickOutside from "../hooks";
import { ListPlacement, PaginationDropDownOptions, PaginationTranslations } from "../types";
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
  ariaLabel: string;
  listPlacement?: ListPlacement;
  totalResults?: number;
  translationOfPage?: PaginationTranslations["ofPages"];
  disabled?: boolean;
  onClickItemHandler: (item: number) => void;
};

const PaginationSelector: FC<PaginationSelectorProps> = ({
  items,
  selected,
  ariaLabel,
  totalResults,
  translationOfPage,
  listPlacement = "top",
  disabled = false,
  onClickItemHandler,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState<number>(selected);
  useClickOutside(wrapperRef, () => setIsListOpen(false));

  const hasItems = items.length > 1;
  const hasTotalResults = !!totalResults;
  const isBtnDisabled = !hasItems || disabled;
  const btnClassName = classNames({
    "dropdown-button": true,
    disabled: isBtnDisabled,
  });

  const selectedPageSizeText = totalResults
    ? `${
        selectedPageSize > totalResults ? totalResults : selectedPageSize
      } ${translationOfPage} ${totalResults}`
    : selectedPageSize.toString();

  const toggleList = (): void => {
    if (!disabled) {
      // We want to reset the dropdown list every time it opens
      setIsListOpen((prevState) => !prevState);
    }
  };

  const handleListItemSelect = (item: number): void => {
    if (isListOpen) {
      onClickItemHandler(item);
      setSelectedPageSize(item);
      setIsListOpen(false);
    }
  };

  useEffect(() => {
    setSelectedPageSize(selected);
  }, [selected]);

  useEffect(() => {
    if (disabled) {
      setIsListOpen(false);
    }
  }, [disabled]);

  return (
    <div
      css={(theme): SerializedStyles =>
        PaginationSelectorStyles(theme, { isOpen: isListOpen, hasTotalResults })
      }
      ref={wrapperRef}
    >
      <button
        className={btnClassName}
        disabled={isBtnDisabled}
        title={`${selectedPageSize}`}
        aria-label={ariaLabel}
        onClick={toggleList}
      >
        <Text fontSize="sm" weight="700">
          {selectedPageSizeText}
        </Text>
        {hasItems && <ChevronArrowDownSVG />}
      </button>

      {isListOpen && hasItems && (
        <div className={dropdownWrapperClasses(listPlacement)}>
          <ul role="list" className="dropdown-list">
            {items.map(({ value, label }) => {
              const isSelected = value === selectedPageSize;

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
