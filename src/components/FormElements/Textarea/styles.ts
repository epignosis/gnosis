import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { TextareaResize } from "./Textarea";

export const textareaContainer = (
  { formElements }: Theme,
  { resize, hasRows }: { resize: TextareaResize; hasRows: boolean },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  &.inline {
    align-items: baseline;
  }

  &.error {
    textarea {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  label {
    &.required::after {
      display: inline-block;
      content: " *";
      margin-left: 0.2rem;
      color: ${formElements.generic.required};
    }
  }

  textarea {
    ${inputBaseStyles(formElements, { block: true })};
    min-height: ${hasRows ? "0" : "10rem"};
    padding: 0.75rem;
    resize: ${resize};
  }
`;
