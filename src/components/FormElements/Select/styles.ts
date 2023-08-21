import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "../Input/Input";

export const selectContainer = (
  { formElements }: Theme,
  { size, dir }: { size: InputSize; dir: string },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })}

  &.error {
    .select-input-wrapper select {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  .react-select__control {
    ${inputBaseStyles(formElements, { block: true, size })};
    background-color: transparent;
    padding-inline-end: 2.5rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    &,
    &:hover,
    &:focus {
      background-position: ${dir === "rtl" ? "left" : "right"} 1rem center;
      background-repeat: no-repeat;
      background-size: 14px;
      background-image: url("https://talentlms-prod-frontend-static.s3.amazonaws.com/images/chevron-down-solid.svg");
    }

    &:hover,
    &:focus {
      border: 1px solid ${formElements.input.borderHoverColor};
    }
  }

  .select-input-wrapper {
    position: relative;
    width: 100%;
    background-color: ${formElements.input.background};
    border-radius: 5px;
    z-index: 1;
  }
`;
