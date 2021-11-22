import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "../Input/Input";

export const selectContainer = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })}

  label {
    margin: 0 0 0.5rem 0.5rem;
  }

  &.error {
    .select-input-wrapper select {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  select {
    ${inputBaseStyles(formElements, { block: true, size })};
    background-color: transparent;
    padding-right: 2.5rem;
    appearance: none;

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

    .carret-wrapper {
      position: absolute;
      right: 0.75rem;
      height: 100%;
      display: inline-flex;
      align-items: center;
      z-index: -1;

      svg {
        color: #000;
      }
    }
  }
`;
