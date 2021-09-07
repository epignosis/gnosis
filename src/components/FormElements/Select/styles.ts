import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "@components/FormElements/Input/Input";

export const selectContainer = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })}

  label {
    margin: 0 0 0.5rem 0.5rem;
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
