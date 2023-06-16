import { css, SerializedStyles, Theme } from "@emotion/react";

export const container = (
  { pagination }: Theme,
  { isOpen }: { isOpen: boolean },
): SerializedStyles => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    .previous-page-btn,
    .next-page-btn {
      &:hover,
      &:active,
      &:link,
      &:focus {
        svg {
          fill: ${pagination.color};
        }
        background-color: ${pagination.hoverBackground}!important;
      }

      .left {
        height: 24px;
        transform: rotateZ(-90deg);
      }

      .right {
        height: 24px;
        transform: rotateZ(90deg);
      }

      &.disabled {
        background-color: transparent;
        svg {
          fill: currentColor;
        }
      }

      &:hover {
        &.disabled {
          background-color: transparent !important;
          svg {
            fill: currentColor;
          }
        }
      }
    }

    .pagination-options {
      .dropdown {
        position: relative;
        display: inline-block;

        .dropdown-header {
          cursor: pointer;
        }

        button {
          color: ${pagination.textColor};
          padding-inline-start: 1rem;
          font-style: ${isOpen ? "italic" : "normal"};

          &:hover {
            background-color: ${pagination.hoverBackground};
            border: 1px solid ${pagination.color};
          }

          &:focus {
            border: 1px solid ${pagination.color};
          }

          svg {
            margin-left: 1rem;
            height: 12px;

            transform: ${isOpen ? "rotateZ(90deg)" : "rotateZ(-90deg)"};
          }
        }

        .dropdown-list {
          list-style: none;
          margin: 0;
          min-width: 14rem;
          box-sizing: border-box;
          white-space: nowrap;
          user-select: none;
          cursor: pointer;
          max-height: 21rem;
          overflow-y: auto;
          width: 100%;
          padding: 0;

          .empty-state {
            cursor: default;
            color: ${pagination.emptyState};
            padding: 0.25rem 0.75rem;
          }

          ::-webkit-scrollbar {
            width: 5px;
          }

          li {
            padding: 0.5rem 1rem;

            .is-selected {
              font-weight: bold;
            }
          }
        }

        .open-list-container {
          position: absolute;
          padding: 0;
          z-index: 100;
          border-radius: 5px;
          box-shadow: 0px -2px 6px ${pagination.boxShadowColor};
          background-color: ${pagination.emptyState};
          max-width: 50rem;
          width: 100%;
          bottom: 100%;
          inset-inline-start: 0;
          margin-bottom: 0.3rem;
        }
      }
    }
  `;
};
