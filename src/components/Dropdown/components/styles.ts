import { Theme, css } from "@emotion/react";
import { getInlinePaddingStart } from "../helpers";

export const DropdownListItemStyles = (
  { dropdown }: Theme,
  {
    isSearchable,
    level,
    isDisabled,
  }: { isSearchable: boolean; level: number; isDisabled: boolean },
) => css`
  padding-inline: ${getInlinePaddingStart(level, isSearchable)}rem 1rem;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  max-height: 2rem;

  .tooltip-content-wrapper {
    display: flex;
    align-items: center;
  }

  margin-inline-end: ${isSearchable ? "0.5rem" : "0"};
  cursor: ${isDisabled ? "default" : "pointer"};
  color: ${isDisabled ? dropdown.disabledColor : dropdown.textColor};

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
    background-color: ${isDisabled ? "inherit" : dropdown.hoverBackgroundColor};
    border-radius: ${isSearchable ? "5px" : "0"};
  }
`;

export const DropdownListItemTitleStyles = ({
  level,
  isSearchable,
}: {
  level: number;
  isSearchable: boolean;
}) => css`
  padding-inline: ${getInlinePaddingStart(level, isSearchable)}rem 1rem;
  padding-block: 0.25rem;
`;
