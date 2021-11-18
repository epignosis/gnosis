import React, { FC } from "react";
import Button from "../Button/Button";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import { container } from "./styles";

export type PaginationProps = {
  current: number;
  totalPages: number;
  onChange: (page: number) => void;
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

const Pagination: FC<PaginationProps> = ({ current, onChange, totalPages, containerAttrs }) => {
  return (
    <div css={container} {...containerAttrs}>
      {current > 1 && (
        <Button
          className="previous-page-btn"
          data-testid="previous-page-btn"
          name="Previous page"
          onClick={(): void => onChange(current - 1)}
          color="secondary"
          noGutters
        >
          <ArrowLeftSVG height={22} />
        </Button>
      )}

      <div className="current-page">
        {[...Array(totalPages)].map((_, index) => (
          <Button
            id="page-selection"
            data-testid="pagination-page"
            onClick={(): void => onChange(index + 1)}
            key={index + 1}
            variant="ghost"
            noGutters
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {current < totalPages && (
        <Button
          className="next-page-btn"
          data-testid="next-page-btn"
          name="Next page"
          onClick={(): void => onChange(current + 1)}
          color="secondary"
          noGutters
        >
          <ArrowRightSVG height={22} />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
