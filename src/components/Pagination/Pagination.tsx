import React, { FC, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Button from "../Button/Button";
import { IconChevronDownSVG, RightArrowSVG } from "../../icons/";
import Text from "../Text/Text";
import { container } from "./styles";
import { PaginationProps } from "./types";
import useClickOutside from "./hooks";

const SelectedOptionClasses = (isSelected: boolean): string =>
  classNames({
    "is-selected": isSelected,
  });

const Pagination: FC<PaginationProps> = ({
  page,
  pageSize,
  totalPages,
  rowsPerPageOptions,
  selectionText,
  dir = "ltr",
  onPageChange,
  onPageSizeChange,
  ...rest
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState<number>(pageSize);
  const isRtl = dir === "rtl";
  const isPrevBtnDisabled = page === 1;
  const isNextBtnDisabled = page === totalPages;

  useClickOutside(wrapperRef, () => setIsListOpen(false));

  const toggleList = (): void => {
    // We want to reset the dropdown list every time it opens
    setIsListOpen((prevState) => !prevState);
  };

  const handleListItemSelect = (item: number): void => {
    if (isListOpen) {
      onPageSizeChange(item);
      setSelectedListItem(item);
      setIsListOpen(false);
    }
  };

  const options = rowsPerPageOptions.slice().reverse();

  return (
    <div css={(theme): SerializedStyles => container(theme, { isOpen: isListOpen })} {...rest}>
      <Button
        className="previous-page-btn"
        data-testid="previous-page-btn"
        name="Previous page"
        onClick={(): void => onPageChange(page - 1)}
        variant="ghost"
        noGutters
        disabled={isPrevBtnDisabled}
      >
        <IconChevronDownSVG className={isRtl ? "rotate-left" : "rotate-right"} height={32} />
      </Button>

      <div className="pagination-options">
        <div className="dropdown" ref={wrapperRef}>
          <div className="dropdown-button" onClick={toggleList}>
            <Button iconAfter={RightArrowSVG} variant="ghost">
              <Text fontSize="sm">{selectionText}</Text>
            </Button>
          </div>

          {isListOpen && rowsPerPageOptions.length > 0 && (
            <div className="open-list-container">
              <div className="dropdown-wrapper">
                <ul role="list" className="dropdown-list">
                  {options.map(({ value, label }) => {
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

      <Button
        className="next-page-btn"
        data-testid="next-page-btn"
        name="Next page"
        onClick={(): void => onPageChange(page + 1)}
        variant="ghost"
        noGutters
        disabled={isNextBtnDisabled}
      >
        <IconChevronDownSVG className={isRtl ? "rotate-right" : "rotate-left"} height={32} />
      </Button>
    </div>
  );
};

export default Pagination;
