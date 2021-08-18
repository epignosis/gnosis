import React, { FC } from "react";
import { useResponsive } from "@umijs/hooks";
import { container } from "./styles";
import { Button, Select } from "@components";
import { ArrowLeftSVG, ArrowRightSVG } from "@icons/core";

export type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ current, onChange, totalPages }) => {
  const { sm } = useResponsive();
  const createOptions = (): JSX.Element[] => {
    return [...Array(totalPages)]
      .map((_, i) => i + 1)
      .map((page: number, key) => (
        <option key={key} value={page}>
          {page}
        </option>
      ));
  };

  return (
    <div css={container}>
      {current > 1 && (
        <>
          {sm ? (
            <Button
              data-testid="previous-page-btn"
              className="previous-page-btn"
              name="Previous page"
              onClick={(): void => onChange(current - 1)}
            >
              Previous
            </Button>
          ) : (
            <Button
              id="mobile-pagination"
              noGutters
              name="Previous page"
              onClick={(): void => onChange(current - 1)}
            >
              <ArrowLeftSVG height={24} />
            </Button>
          )}
        </>
      )}
      <div>Page</div>
      <div className="current-page">
        <Select
          id="pagination-page"
          value={current}
          onChange={(value): void => onChange(parseInt(value))}
        >
          {createOptions()}
        </Select>
      </div>
      <div className="total-pages">of {totalPages}</div>
      {current < totalPages && (
        <>
          {sm ? (
            <Button
              data-testid="next-page-btn"
              name="Next page"
              onClick={(): void => onChange(current + 1)}
            >
              Next
            </Button>
          ) : (
            <Button
              id="mobile-pagination"
              noGutters
              name="Next page"
              onClick={(): void => onChange(current + 1)}
            >
              <ArrowRightSVG height={24} />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
