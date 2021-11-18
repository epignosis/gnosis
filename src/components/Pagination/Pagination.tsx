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
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

const Pagination: FC<PaginationProps> = ({
  current,
  onChange,
  totalPages,
  responsiveView = false,
  containerAttrs,
}) => {
  return (
    <div css={container} {...containerAttrs}>
      {current > 1 && (
        <>
          {!responsiveView ? (
            <Button
              className="previous-page-btn"
              data-testid="previous-page-btn"
              name="Previous page"
              onClick={(): void => onChange(current - 1)}
            >
              Previous
            </Button>
          ) : (
            <Button
              className="mobile-pagination mobile-previous-page-btn"
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
          id="page-selection"
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
              className="next-page-btn"
              data-testid="next-page-btn"
              name="Next page"
              onClick={(): void => onChange(current + 1)}
            >
              Next
            </Button>
          ) : (
            <Button
              className="mobile-pagination mobile-next-page-btn"
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
