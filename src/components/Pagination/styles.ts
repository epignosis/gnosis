import { css } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: inline-block;
  }

  .mobile-pagination {
    margin: 0 1rem;
  }

  .current-page {
    margin: 0 1rem;
  }

  .total-pages {
    ${mq["md"]} {
      margin-right: 2rem;
    }
  }
`;
