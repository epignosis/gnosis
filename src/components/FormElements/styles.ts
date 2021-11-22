import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "./Input/Input";

const inputHeight = {
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

    label {
      margin: 0 0.75rem 0 0;
    }
  }

  label {
    margin: 0 0 0.5rem 0.5rem;
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

  &:hover,
  &:focus {
    border: 1px solid ${formElements.input.borderHoverColor};
  }

  &:focus {
    background: ${formElements.input.backgroundFocus};
  }

  &::placeholder {
    font-style: italic;
    color: ${formElements.input.placeholderColor};
  }
`;
