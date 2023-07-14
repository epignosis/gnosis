import { css, Theme, SerializedStyles } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "./Input";

export const inputContainer = (
  { formElements }: Theme,
  { size }: { size: InputSize },
): SerializedStyles => css`
  ${inputContainerBaseStyles({ block: true })};

  .label-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      color: ${formElements.input.infoTooltipColor};
      &:hover {
        cursor: help;
      }
    }
  }

  &.disabled {
    .input-wrapper {
      .prefix-icon,
      .suffix-icon {
        z-index: 1;
        color: ${formElements.input.disabledIcon};
        cursor: not-allowed;
      }
    }
  }

  &.error {
    .input-wrapper input {
      border-color: ${formElements.errors.errorBorderColor};
    }
  }

  &.with-prefix-icon {
    .input-wrapper input {
      padding-inline-start: 3.2rem;
    }
  }

  &.with-suffix-icon {
    .input-wrapper input {
      padding-inline-end: 3.2rem;
    }
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    background-color: ${formElements.input.background};
    z-index: 1;
    border-radius: 5px;

    &:focus-within,
    &:hover {
      .prefix-icon,
      .suffix-icon {
        z-index: 1;
      }
    }

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
    }

    .prefix-icon {
      margin: 0 0.75rem;
      color: ${formElements.input.iconColor};
    }

    .suffix-icon {
      inset-inline-end: 0;
      padding-inline-end: 0.5rem;
      color: ${formElements.input.iconColor};
    }
  }
`;
