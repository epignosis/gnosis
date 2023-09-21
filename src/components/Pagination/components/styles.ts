import { css, SerializedStyles, Theme } from "@emotion/react";

export const PaginationSelectorStyles = (
  { pagination }: Theme,
  { isOpen }: { isOpen: boolean },
): SerializedStyles => {
  return css`
    margin-right: 8px;

    .dropdown {
      position: relative;
      display: inline-block;

      .dropdown-header {
        cursor: pointer;
      }

      button {
        display: flex;
        align-items: center;
        border: 1px solid #f5f5f6;
        border-radius: 5px;
        color: ${pagination.textColor};
        padding-inline-start: 1rem;
        background-color: #f5f5f6;

        &:hover {
          background-color: #fff;
          border: 1px solid ${pagination.background};
        }

        ${isOpen &&
        `
            background-color: #fff;
            border: 1px solid ${pagination.background};
          `}

        svg {
          margin-inline-start: 1rem;
        }
      }

      .dropdown-list {
        padding: 0;
        width: 100%;
        list-style: none;
        margin: 0;
        box-sizing: border-box;
        white-space: nowrap;
        user-select: none;
        text-align: center;
        cursor: pointer;
        max-height: 21rem;
        overflow: scroll;

        .empty-state {
          cursor: default;
          color: ${pagination.emptyState};
          padding: 0.25rem 0.75rem;
        }

        ::-webkit-scrollbar {
          width: 5px;
        }

        li {
          border-radius: 5px;
          padding: 0.5rem 1rem;

          .is-selected {
            font-weight: bold;
          }

          &:hover {
            display: inline-block;
            background-color: ${pagination.hoverPaginationList};
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
  `;
};
