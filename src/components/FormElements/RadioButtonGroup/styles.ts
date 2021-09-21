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
    border-left: 1px solid ${radioButtonGroup.borderColor};
    cursor: pointer;

    &:first-of-type {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-left: none;
    }

    &:last-of-type {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &.is-selected {
      background: ${radioButtonGroup.selectedBackground};
      color: ${radioButtonGroup.selectedFontColor};
      border-left-color: ${radioButtonGroup.selectedBackground};
    }
  `;
};
