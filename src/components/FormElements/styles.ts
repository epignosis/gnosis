import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "./Input/Input";

export const inputHeight = {
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

  &.inline {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
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

  &:hover ~ .vertical-line {
    border-left: 1px solid ${formElements.input.borderHoverColor};
  }

  &:focus ~ .vertical-line {
    border-left: 1px solid ${formElements.input.borderFocusColor};
  }

  &:focus {
    border: 1px solid ${formElements.input.borderFocusColor};
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
