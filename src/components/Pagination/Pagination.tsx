import React, { FC } from "react";
import Button from "../Button/Button";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import { container } from "./styles";
import { DOTS, usePagination } from "./usePagination";
import classNames from "classnames";

export type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
  page_size: number;
  total_results: number;
};

const Pagination: FC<PaginationProps> = ({
  current,
  onChange,
  totalPages,
  containerAttrs,
  total_results,
  page_size,
}) => {
  const paginationRange = usePagination(current, total_results, page_size);

  const classNamesContainer = (pageNumber: number) =>
    classNames({
      active: current === pageNumber,
    });

  return (
    <div css={container} {...containerAttrs}>
      <Button
        className="previous-page-btn"
        data-testid="previous-page-btn"
        name="Previous page"
        onClick={(): void => onChange(current - 1)}
        color="secondary"
        noGutters
        disabled={current === 1}
      >
        <ArrowLeftSVG height={22} />
      </Button>

      <div className="pagination-options">
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return DOTS;
          }

          return (
            <Button
              key={pageNumber}
              id="page-selection"
              data-testid="pagination-page"
              onClick={(): void => onChange(pageNumber as number)}
              variant="ghost"
              noGutters
              className={classNamesContainer(pageNumber as number)}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>

      <Button
        className="next-page-btn"
        data-testid="next-page-btn"
        name="Next page"
        onClick={(): void => onChange(current + 1)}
        color="secondary"
        noGutters
        disabled={current === totalPages}
      >
        <ArrowRightSVG height={22} />
      </Button>
    </div>
  );
};

export default Pagination;
