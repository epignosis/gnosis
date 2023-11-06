import { css, SerializedStyles, Theme } from "@emotion/react";

export const PaginationSelectorStyles = (
  { pagination }: Theme,
  { isOpen }: { isOpen: boolean },
): SerializedStyles => {
  return css`
    position: relative;
    display: inline-block;

    .dropdown-button {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 2.5rem;
      background-color: ${pagination.dropdownBackground};
      border: 1px solid ${pagination.dropdownBackground};
      border-radius: 5px;
      padding-inline: 1rem;
      color: ${pagination.textColor};

      &:hover {
        background-color: ${pagination.white};
        border: 1px solid ${pagination.background};
      }

      ${isOpen &&
      `
        background-color: ${pagination.white};
        border: 1px solid ${pagination.background};
          svg {
            transform: rotate(180deg);
          }
      `}

      &.disabled:hover {
        background-color: ${pagination.dropdownBackground};
        border: 1px solid ${pagination.dropdownBackground};
        cursor: default;
      }
    }

    .dropdown-list {
      margin: 0;
      padding: 0.5rem;
      width: 100%;
      max-height: 21rem;
      overflow-y: auto;
      box-sizing: border-box;
      white-space: nowrap;
      text-align: center;
      list-style: none;
      cursor: pointer;
      user-select: none;
      scrollbar-gutter: stable both-edges;

      ::-webkit-scrollbar {
        width: 0.313rem;
      }

      ::-webkit-scrollbar-track {
        margin-bottom: 0.625rem;
        margin-top: 0.625rem;
        background: ${pagination.white};
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${pagination.scrollBar};
        border-radius: 10px;
      }

      .empty-state {
        padding: 0.25rem 0.75rem;
        color: ${pagination.emptyState};
        cursor: default;
      }

      .dropdown-list-item {
        padding: 0.5rem;
        width: 100%;
        border-radius: 5px;

        &:hover {
          display: inline-block;
          background-color: ${pagination.dropdownBackground};
        }

        .is-selected {
          font-weight: bold;
        }
      }
    }

    .dropdown-wrapper {
      position: absolute;
      padding: 0;
      max-width: 50rem;
      width: 100%;
      inset-inline-start: 0;
      background-color: ${pagination.emptyState};
      border-radius: 5px;
      box-shadow: 0 3px 6px 0 ${pagination.boxShadowColor};
      z-index: 100;

      &.top {
        bottom: 100%;
        margin-bottom: 0.3rem;
      }

      &.bottom {
        top: 100%;
        margin-top: 0.3rem;
      }
    }
  `;
};
