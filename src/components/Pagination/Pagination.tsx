import React, { FC } from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import { container } from "./styles";
import { DOTS, usePagination } from "./usePagination";

export type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

const Pagination: FC<PaginationProps> = ({ current, onChange, totalPages, containerAttrs }) => {
  const paginationRange = usePagination(current, totalPages);

  const classNamesContainer = (pageNumber: number) =>
    classNames({
      isActive: pageNumber === current,
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
              type="button"
              key={pageNumber}
              id={pageNumber.toString()}
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
