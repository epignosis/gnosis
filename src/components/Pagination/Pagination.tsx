import React, { FC } from "react";
import Button from "../Button/Button";
import Select from "../FormElements/Select/Select";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import { container } from "./styles";

export type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
  responsiveView?: boolean;
};

const Pagination: FC<PaginationProps> = ({
  current,
  onChange,
  totalPages,
  responsiveView = false,
}) => {
  return (
    <div css={container}>
      {current > 1 && (
        <>
          {!responsiveView ? (
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
              <ArrowLeftSVG height={24} data-testid="arrow-left" />
            </Button>
          )}
        </>
      )}
      <div>Page</div>
      <div className="current-page">
        <Select
          id="pagination-page"
          data-testid="pagination-page"
          value={current}
          onChange={(value): void => onChange(parseInt(value))}
        >
          {[...Array(totalPages)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </Select>
      </div>
      <div className="total-pages">of {totalPages}</div>
      {current < totalPages && (
        <>
          {!responsiveView ? (
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
              <ArrowRightSVG height={24} data-testid="arrow-right" />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
