import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
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
  perPageText,
  totalPages,
  rowsPerPageOptions,
  dir = "ltr",
  onPageChange,
  onPageSizeChange,
  ...rest
}) => {
  const isRtl = dir === "rtl";
  const isPrevBtnDisabled = page === 1;
  const isNextBtnDisabled = page === totalPages || totalPages === 0;

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

  return (
    <div css={(theme): SerializedStyles => container(theme)} {...rest}>
      <div className="results-per-page">
        <PaginationSelector
          items={options}
          selected={pageSize}
          onClickItemHandler={handlePageSize}
        />
        <span>{perPageText}</span>
      </div>

      <Button
        className="first-page-btn"
        data-testid="first-page-btn"
        name="First page"
        onClick={(): void => onPageChange(1)}
        variant="ghost"
        noGutters
        disabled={isPrevBtnDisabled}
      >
        <ChevronArrowLineLeftSVG className={isRtl ? "rotate-left" : "rotate-right"} height={32} />
      </Button>

      <Button
        className="previous-page-btn"
        data-testid="previous-page-btn"
        name="Previous page"
        onClick={(): void => onPageChange(page - 1)}
        variant="ghost"
        noGutters
        disabled={isPrevBtnDisabled}
      >
        <ChevronArrowLeftSVG height={32} />
      </Button>

      <div className="total-pages">
        <PaginationSelector
          items={optionItems}
          selected={page}
          onClickItemHandler={handlePageChange}
        />
        <span>of {totalPages}</span>
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
        <ChevronArrowRightSVG height={32} />
      </Button>

      <Button
        className="last-page-btn"
        data-testid="last-page-btn"
        name="Last page"
        onClick={(): void => onPageChange(totalPages)}
        variant="ghost"
        noGutters
        disabled={isNextBtnDisabled}
      >
        <ChevronArrowLineRightSVG className={isRtl ? "rotate-right" : "rotate-left"} height={32} />
      </Button>
    </div>
  );
};

export default Pagination;
