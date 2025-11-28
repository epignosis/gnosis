import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Button from "../Button/Button";
import {
  ChevronArrowLeftSVG,
  ChevronArrowRightSVG,
  ChevronArrowLineLeftSVG,
  ChevronArrowLineRightSVG,
} from "../../icons/";
import { container } from "./styles";
import PaginationSelector from "./components/PaginationSelector";
import { PaginationProps } from "./types";

const Pagination: FC<PaginationProps> = ({
  pageSize,
  page,
  totalPages,
  totalResults,
  translations,
  a11yTranslations,
  rowsPerPageOptions,
  dir = "ltr",
  onPageChange,
  onPageSizeChange,
  listPlacement = "top",
  disabled = false,
  ...rest
}) => {
  const isRtl = dir === "rtl";

  const isPrevBtnDisabled = page === (isRtl ? totalPages : 1);
  const isNextBtnDisabled = page === (isRtl ? 1 : totalPages) || totalPages === 0;

  const handlePageSize = (item: number): void => {
    onPageSizeChange(item);
  };

  const handlePageChange = (item: number): void => {
    onPageChange(item);
  };

  const options = rowsPerPageOptions.slice().reverse();

  const optionItems = Array(totalPages)
    .fill(0)
    .map((_, i) => ({ value: i + 1, label: `${i + 1}` }));

  const rtlClass = classNames({ isRtl });

  const paginationDirectionFactor = isRtl ? -1 : 1;

  const pageDirection = {
    firstPage: isRtl ? totalPages : 1,
    lastPage: isRtl ? 1 : totalPages,
    nextPage: page + paginationDirectionFactor,
    previousPage: page - paginationDirectionFactor,
  };

  return (
    <div css={(theme): SerializedStyles => container(theme)} {...rest} className={rtlClass}>
      <div className="pagination-selector-wrapper" data-testid="pagination-per-page-btn">
        <PaginationSelector
          items={options}
          selected={pageSize}
          listPlacement={listPlacement}
          ariaLabel={a11yTranslations.perPage}
          totalResults={totalResults}
          translationOfPage={translations.ofPages}
          onClickItemHandler={handlePageSize}
          disabled={disabled}
        />
        <span>{translations.perPage}</span>
      </div>
      <div className="pagination">
        <Button
          className="pagination-btn"
          data-testid="first-page-btn"
          title={translations.firstPage}
          onClick={(): void => onPageChange(pageDirection.firstPage)}
          variant="ghost"
          noGutters
          disabled={isPrevBtnDisabled || disabled}
          aria-label={a11yTranslations.firstPage}
        >
          <ChevronArrowLineLeftSVG />
        </Button>

        <Button
          className="pagination-btn"
          data-testid="previous-page-btn"
          name="Previous page"
          title={translations.previousPage}
          onClick={(): void => onPageChange(pageDirection.previousPage)}
          variant="ghost"
          noGutters
          disabled={isPrevBtnDisabled || disabled}
          aria-label={a11yTranslations.previousPage}
        >
          <ChevronArrowLeftSVG />
        </Button>

        <div className="pagination-selector-wrapper" data-testid="pagination-page-selector-btn">
          <PaginationSelector
            items={optionItems}
            selected={page}
            listPlacement={listPlacement}
            ariaLabel={a11yTranslations.ofPages}
            onClickItemHandler={handlePageChange}
            disabled={disabled}
          />
          {totalPages > 1 && (
            <span>
              {translations.ofPages} {totalPages}
            </span>
          )}
        </div>

        <Button
          className="pagination-btn"
          data-testid="next-page-btn"
          name="Next page"
          title={translations.nextPage}
          onClick={(): void => onPageChange(pageDirection.nextPage)}
          variant="ghost"
          noGutters
          disabled={isNextBtnDisabled || disabled}
          aria-label={a11yTranslations.nextPage}
        >
          <ChevronArrowRightSVG />
        </Button>

        <Button
          className="pagination-btn"
          data-testid="last-page-btn"
          name="Last page"
          title={translations.lastPage}
          onClick={(): void => onPageChange(pageDirection.lastPage)}
          variant="ghost"
          noGutters
          disabled={isNextBtnDisabled || disabled}
          aria-label={a11yTranslations.lastPage}
        >
          <ChevronArrowLineRightSVG />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
