import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "../Input/Input";

export const dateInputContainer = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  &.error {
    input {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  &.inline label {
    margin-bottom: 0;
  }

  label {
    &.required::after {
      display: inline-block;
      content: " *";
      margin-inline-start: 0.2rem;
      color: ${formElements.generic.required};
    }
  }

  input {
    ${inputBaseStyles(formElements, { block: true, size })};
    color: ${formElements.input.textColor};

    /* WebKit top-aligns the date text inside fields taller than the text. */
    &::-webkit-datetime-edit {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;
