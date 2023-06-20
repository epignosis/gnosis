import { Theme, css } from "@emotion/react";

const getInlinePaddingStart = (level: number, isSearchable: boolean) => {
  const initialPadding = isSearchable ? 0 : 1;

  return initialPadding + level * 0.75;
};

export const DropdownContainer = (
  { dropdown }: Theme,
  { isSearchable, fullWidth }: { isSearchable: boolean; fullWidth: boolean },
) => css`
  position: relative;
  display: inline-block;

  .dropdown-wrapper {
    position: absolute;
    z-index: 100;
    border-radius: 5px;
    box-shadow: 0px 3px 6px ${dropdown.boxShadowColor};
    background-color: ${dropdown.backgroundColor};
    padding: ${isSearchable ? "0.75rem" : "0"};
    width: ${fullWidth ? "100%" : "auto"};
    max-width: ${fullWidth ? "50" : "19.5"}rem;

    &.bottom-start {
      inset-inline-start: 0;
    }

    &.bottom-end {
      inset-inline-end: 0;
    }

    &.top-start {
      bottom: 100%;
      inset-inline-start: 0;
      margin-bottom: 0.5rem;
    }

    &.top-end {
      bottom: 100%;
      inset-inline-end: 100%;
      margin-bottom: 0.5rem;
    }

    &.end-top {
      inset-inline-start: 100%;
      top: 0;
      margin: 0;
    }

    .input-wrapper {
      min-width: 18rem;
    }
  }
`;

export const DropdownList = (
  { dropdown, scrollbar }: Theme,
  { fullWidth, isSearchable }: { fullWidth: boolean; isSearchable: boolean },
) => css`
  list-style: none;
  width: max-content;
  box-sizing: border-box;
  white-space: nowrap;
  user-select: none;
  margin: ${isSearchable ? "0.5rem 0 0" : "0"};
  padding: ${isSearchable ? "0" : "0.5rem 0"};
  max-height: 21rem;
  overflow-y: auto;
  width: ${fullWidth ? "100%" : "auto"};
  min-width: 14rem;
  border-radius: 5px;

  /* Works on Firefox */
  scrollbar-width: 5px;
  scrollbar-color: ${scrollbar.color} ${scrollbar.background};

  /* Works on Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${scrollbar.background};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbar.color};
    border-radius: 10px;
  }

  .empty-state {
    color: ${dropdown.emptyStateColor};
    padding: 0rem 0.75rem;
    display: flex;
    align-items: center;
    height: 2rem;
  }
`;

export const DropdownTitle = ({
  level,
  isSearchable,
}: {
  level: number;
  isSearchable: boolean;
}) => css`
  padding-inline: ${getInlinePaddingStart(level, isSearchable)}rem 1rem;
  padding-block: 0.25rem;
`;

export const DropdownListItem = (
  { dropdown }: Theme,
  { isSearchable, level }: { isSearchable: boolean; level: number },
) => css`
  padding-inline: ${getInlinePaddingStart(level, isSearchable)}rem 1rem;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  max-height: 2rem;
  cursor: pointer;
  margin-inline-end: ${isSearchable ? "0.5rem" : "0"};

  &.separator {
    border-bottom: 1px solid ${dropdown.borderBottomColor};
  }

  span {
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  svg {
    width: 32px;
    margin-inline-end: 0.5rem;
  }

  &:hover {
    background-color: ${dropdown.hoverBackgroundColor};
    border-radius: ${isSearchable ? "5px" : "0"};
  }
`;
