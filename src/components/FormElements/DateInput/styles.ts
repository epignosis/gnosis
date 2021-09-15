import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";

export const dateInput = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  &.inline {
    width: auto;
  }

  input {
    ${inputBaseStyles(formElements, { block: true, size })};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`;
