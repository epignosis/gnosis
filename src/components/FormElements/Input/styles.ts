import { css, Theme, SerializedStyles } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "./Input";

export const inputContainer = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  &.error {
    .input-wrapper input {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  &.with-prefix-icon {
    .input-wrapper input {
      padding-left: 3.2rem;
    }
  }

  &.with-suffix-icon {
    .input-wrapper input {
      padding-right: 3.2rem;
    }
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    background-color: ${formElements.input.background};
    z-index: 1;

    input {
      ${inputBaseStyles(formElements, { block: true, size })};
      background-color: transparent;
    }

    .prefix-icon,
    .suffix-icon {
      height: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      z-index: -1;
    }

    .prefix-icon {
      margin: 0 0.75rem;
      color: ${formElements.input.iconColor};
    }

    .suffix-icon {
      right: 0;
      padding-right: 0.5rem;
      color: ${formElements.input.iconColor};
    }
  }
`;

export const fileInputContainer = ({ formElements }: Theme): SerializedStyles => css`
  .drop-area {
    position: relative;
    min-height: 5rem;
    border: 2px dashed ${formElements.input.inputBorderColor};
    border-radius: 5px;

    input {
      display: none;
    }
  }
`;
