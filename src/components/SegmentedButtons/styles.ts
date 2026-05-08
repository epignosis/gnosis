import { css, Theme, SerializedStyles } from "@emotion/react";

type SegmentedButtonAttrs = {
  isSelected: boolean;
  isFirst: boolean;
  isLast: boolean;
  hasLabel: boolean;
  hasIcon: boolean;
};

export const container = css`
  display: inline-flex;
  align-items: center;
`;

export const segmentedButton = (
  { typeScaleSizes, segmentedButtons }: Theme,
  { isSelected, isFirst, isLast, hasLabel, hasIcon }: SegmentedButtonAttrs,
): SerializedStyles => {
  const state = isSelected ? segmentedButtons.active : segmentedButtons.default;
  const iconOnly = hasIcon && !hasLabel;

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    padding: 0 ${iconOnly ? "0.5rem" : "1.5rem"};
    background: ${state.background};
    border: 1px solid ${state.borderColor};
    border-inline-start-width: ${isFirst ? "1px" : "0"};
    border-start-start-radius: ${isFirst ? "5px" : "0"};
    border-end-start-radius: ${isFirst ? "5px" : "0"};
    border-start-end-radius: ${isLast ? "5px" : "0"};
    border-end-end-radius: ${isLast ? "5px" : "0"};
    color: ${state.color};
    font-family: inherit;
    font-size: ${typeScaleSizes.sm};
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in;

    .segmented-buttons__icon {
      color: currentColor;
      flex-shrink: 0;
    }

    &:hover:not(:disabled):not(.segmented-buttons__button--selected) {
      background: ${segmentedButtons.hover.background};
      border-color: ${segmentedButtons.hover.borderColor};
      color: ${segmentedButtons.hover.color};
    }

    &:focus-visible {
      outline: 2px solid ${segmentedButtons.hover.borderColor};
      outline-offset: 2px;
    }

    &:disabled {
      background: ${segmentedButtons.disabled.background};
      border-color: ${segmentedButtons.disabled.borderColor};
      color: ${segmentedButtons.disabled.color};
      cursor: not-allowed;
    }
  `;
};
