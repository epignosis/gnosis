import { css, Theme, SerializedStyles } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const container = (
  { breadcrumb, typeScaleSizes }: Theme,
  { separator }: { separator: string },
): SerializedStyles => {
  return css`
    background: ${breadcrumb.background};
    color: ${breadcrumb.color};
    padding: 0.875rem 1rem;

    ${mq["lg"]} {
      padding: 1rem 2rem;
    }

    ol,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ol {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin-left: 0.375rem;

      &:first-of-type {
        margin: 0;
      }

      &:after {
        content: " ${separator}";
      }

      &:last-of-type {
        &:after {
          content: "";
        }
      }
    }

    a {
      font-size: ${typeScaleSizes.xs};
    }

    .current {
      font-weight: 700;
      color: ${breadcrumb.color};
      cursor: default;

      &:hover {
        color: ${breadcrumb.color};
        text-decoration: none;
      }
    }
  `;
};
