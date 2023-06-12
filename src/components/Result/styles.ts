import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Result";
import { mq } from "@theme/utils/breakpoints";

export const container = (
  { typeScaleSizes, result }: Theme,
  { size }: { size: Size },
): SerializedStyles => {
  return css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    .body {
      text-align: center;
      margin-top: 2rem;

      h3 {
        line-height: 1;
        color: ${result.titleColor};
        margin-bottom: 1rem;

        ${mq["sm"]} {
          font-size: ${size === "lg" ? typeScaleSizes.xl : typeScaleSizes.md};
        }
      }

      p {
        color: ${result.infoColor};
      }

      .link-text {
        padding: 0;
        text-decoration: underline;
        margin-inline-start: 0.5rem;
      }
    }

    footer {
      margin-top: 1rem;
    }
  `;
};
