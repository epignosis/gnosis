import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "@components/FormElements/Input/Input";

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
