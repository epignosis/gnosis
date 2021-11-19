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
      <Button
        className="previous-page-btn"
        data-testid="previous-page-btn"
        name="Previous page"
        onClick={(): void => onChange(current - 1)}
        color="secondary"
        noGutters
        disabled={current === 1}
      >
        <ArrowLeftSVG height={22} data-testid="arrow-left" />
      </Button>

      <div className="pagination-options">
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index + 1}
            id="page-selection"
            data-testid="pagination-page"
            onClick={(): void => onChange(index + 1)}
            variant="ghost"
            noGutters
            className={current === index + 1 ? "active" : ""}
          >
            {index + 1}
          </Button>
        ))}
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
        <ArrowRightSVG height={22} data-testid="arrow-right" />
      </Button>
    </div>
  );
};

export default Pagination;
