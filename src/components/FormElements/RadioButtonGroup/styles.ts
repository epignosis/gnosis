import { css, Theme, SerializedStyles } from "@emotion/react";
import { InputSize } from "../Input/Input";

const height = {
  md: "2.5rem",
  lg: "3rem",
};

export const radioButton = (
  { typeScaleSizes, formElements: { radioButtonGroup } }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    height: ${height[size]};
    font-size: ${fontSizes[size]};
    padding: 0 1.4rem;
    background: ${radioButtonGroup.normalBackground};
    color: ${radioButtonGroup.normalFontColor};
    border: none;
    border-inline-start: 1px solid ${radioButtonGroup.borderColor};
    cursor: pointer;

    &:first-of-type {
      border-start-start-radius: 5px;
      border-end-start-radius: 5px;
      border-inline-start: none;
    }

    &:last-of-type {
      border-start-end-radius: 5px;
      border-end-end-radius: 5px;
    }

    &.is-selected {
      background: ${radioButtonGroup.selectedBackground};
      color: ${radioButtonGroup.selectedFontColor};
      border-inline-start-color: ${radioButtonGroup.selectedBackground};
    }
  `;
};
