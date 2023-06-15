import React, { FC, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import Button from "../Button/Button";
import { ArrowLeftSVG, ArrowRightSVG, RightArrowSVG } from "../../icons/";
import Text from "../Text/Text";
import { container } from "./styles";
import { PaginationProps, RowItem } from "./types";
import { usePagination } from "./usePagination";

const SelectedOptionClasses = (isSelected: boolean): string =>
  classNames({
    "is-selected": isSelected,
  });

const Pagination: FC<PaginationProps> = ({
  current,
  list,
  totalPages,
  size,
  selectionText,
  handlePaginationSizeChanged,
  handlePaginationNumberChanged,
  dir = "ltr",
  ...rest
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [listItemSelected, handleListItemSelected] = useState<number>(size);
  const paginationRange = usePagination(current, totalPages);
  const hasItems = paginationRange.length > 0;

  const toggleList = (): void => {
    // We want to reset the dropdown list every time it opens
    setIsListOpen((prevState) => !prevState);
  };

  const handleListItemSelect = (item: number): void => {
    if (isListOpen) {
      handlePaginationSizeChanged(item);
      handleListItemSelected(item);
      setIsListOpen(false);
    }
  };

  const mapOptions = (items: RowItem[]): JSX.Element[] => {
    return items
      .slice()
      .reverse()
      .map((item) => {
        const isSelected = item.id === listItemSelected;

        return (
          <li
            data-testid="pagination-page"
            key={"item" + item}
            onClick={(): void => handleListItemSelect(item.id)}
          >
            <Text fontSize={"md"} className={SelectedOptionClasses(isSelected)}>
              {item.value}
            </Text>
          </li>
        );
      });
  };

  return (
    <>
      {hasItems && (
        <div css={(theme): SerializedStyles => container(theme, { isOpen: isListOpen })} {...rest}>
          <Button
            className="previous-page-btn"
            data-testid="previous-page-btn"
            name="Previous page"
            onClick={(): void => handlePaginationNumberChanged(current - 1)}
            variant="ghost"
            noGutters
            disabled={current === 1}
          >
            {dir === "rtl" ? <ArrowRightSVG height={22} /> : <ArrowLeftSVG height={22} />}
          </Button>

          <div className="pagination-options">
            <div className="dropdown" ref={wrapperRef}>
              <div className="dropdown-button" onClick={toggleList}>
                <Button iconAfter={RightArrowSVG} variant="outline">
                  <Text fontSize="md">{selectionText}</Text>
                </Button>
              </div>

              {isListOpen && list.length > 0 && (
                <div className="open-list-container">
                  <div className="dropdown-wrapper">
                    <ul role="list" className="dropdown-list">
                      {mapOptions(list)}
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
            onClick={(): void => handlePaginationNumberChanged(current + 1)}
            variant="ghost"
            noGutters
            disabled={current === paginationRange.length}
          >
            {dir === "rtl" ? <ArrowLeftSVG height={22} /> : <ArrowRightSVG height={22} />}
          </Button>
        </div>
      )}
    </>
  );
};

export default Pagination;
