import { css, SerializedStyles, Theme } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { TextareaResize } from "./Textarea";

export const textareaContainer = (
  { formElements }: Theme,
  { resize }: { resize: TextareaResize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  &.alt-label {
    align-items: baseline;
  }

  textarea {
    ${inputBaseStyles(formElements, { block: true })};
    min-height: 10rem;
    padding: 0.75rem;
    resize: ${resize};
  }
`;
