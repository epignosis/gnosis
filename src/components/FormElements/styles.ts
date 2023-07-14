import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "./Input/Input";

const inputHeight = {
  sm: "1.875rem",
  md: "2.5rem",
  lg: "3rem",
};

export const inputContainerBaseStyles = ({
  block = true,
}: {
  block: boolean;
}): SerializedStyles => css`
  ${block && "width: 100%"};
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;

  &.inline {
    flex-direction: row;
    align-items: center;
  }
`;

export const inputBaseStyles = (
  formElements: Theme["formElements"],
  { block, size }: { block?: boolean; size?: InputSize },
): SerializedStyles => css`
  ${size && `height: ${inputHeight[size]}`};
  ${block && "width: 100%"};
  display: inline-block;
  background-color: ${formElements.input.background};
  padding: 0 0.75rem;
  border: 1px solid ${formElements.input.inputBorderColor};
  border-radius: 5px;

  &:hover {
    background: ${formElements.input.hoverColor};
    border: 1px solid ${formElements.input.borderHoverColor};
  }

  &:focus {
    border: 2px solid ${formElements.input.borderHoverColor};
    background-color: ${formElements.input.backgroundFocus};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:disabled {
    &,
    &:hover {
      cursor: not-allowed;
      background-color: ${formElements.input.disabledBackground};
      border-color: ${formElements.input.disabledBorder};
      color: ${formElements.input.disabledColor};
    }

    &::placeholder {
      color: ${formElements.input.disabledColor};
    }
  }

  &::placeholder {
    font-style: italic;
    color: ${formElements.input.placeholderColor};
  }
`;
