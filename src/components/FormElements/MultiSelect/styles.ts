import { css, Theme, SerializedStyles } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "@components/FormElements/Input/Input";

const heightDimensions = {
  md: "2.5rem",
  lg: "3rem",
};

export const multiSelectContainer = (
  { formElements }: Theme,
  { isOpen, size, inline }: { isOpen: boolean; size: InputSize; inline: boolean },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })}
  position: relative;

  ul {
    position: absolute;
    top: ${inline ? "0" : "1.75rem"};
    left: 0;
    width: 100%;
    list-style: none;
    display: ${isOpen ? "flex" : "none"};
    flex-direction: column;
    background-color: ${formElements.input.background};
    padding: 0.875rem 0;
    border: 1px solid ${formElements.input.inputBorderColor};
    border-radius: 5px;
    margin: 0;
    z-index: 1;

    .checkbox {
      padding: 0 0 0 ${inline ? "1rem" : "0.5rem"};
    }
  }

  .select-btn {
    ${inputBaseStyles(formElements, { block: true })};
    height: ${heightDimensions[size]};
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    &:hover,
    &:focus {
      border: 1px solid ${formElements.input.borderHoverColor};
    }

    svg {
      margin-left: 2.5rem;
    }
  }

  .content {
    display: inline-flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0 1rem;

    span {
      color: ${formElements.input.placeholderColor};
      font-style: italic;
    }

    .close-btn {
      padding: 0;
      border: 0;
      background: transparent;
    }
  }
`;
