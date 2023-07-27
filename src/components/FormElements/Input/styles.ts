import { css, Theme, SerializedStyles } from "@emotion/react";
import { inputBaseStyles, inputContainerBaseStyles } from "../styles";
import { InputSize } from "./Input";

export const inputContainer = (
  { formElements }: Theme,
  {
    size,
    hasIconAfter,
    isClearable,
    showVerticalLine,
  }: { size: InputSize; hasIconAfter: boolean; isClearable: boolean; showVerticalLine: boolean },
): SerializedStyles => {
  const calculatePaddingWithSuffixIcon = () => {
    switch (true) {
      case showVerticalLine && isClearable:
        return "4.75rem";
      case showVerticalLine && !isClearable:
        return "3.75rem";
      case !showVerticalLine && isClearable:
        return "4.5rem";
      case !showVerticalLine && !isClearable:
        return "3rem";
      default:
        return "0";
    }
  };

  const calculatePaddingWithoutSuffixIcon = () => {
    switch (true) {
      case isClearable:
        return "2rem";
      case !isClearable:
        return "0.75rem";
      default:
        return "0";
    }
  };

  const calculateCloseIconPosition = () => {
    switch (true) {
      case showVerticalLine && hasIconAfter:
        return "3.5rem";
      case showVerticalLine && !hasIconAfter:
        return "0.75rem";
      case !showVerticalLine && hasIconAfter:
        return "3rem";
      case !showVerticalLine && !hasIconAfter:
        return "0.75rem";
      default:
        return "0";
    }
  };

  return css`
    ${inputContainerBaseStyles({ block: true })};

    .vertical-line {
      position: absolute;
      border-left: 1px solid ${formElements.input.verticalLineColor};
      top: 0;
      inset-inline-end: 3rem;
      height: 100%;
    }

    .label-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.25rem;
      margin-bottom: 0.5rem;

      label {
        margin-bottom: 0;
      }

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

    &.inline {
      .label-container {
        margin-bottom: 0;
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
        padding-inline-end: ${calculatePaddingWithSuffixIcon()};
      }
    }

    .input-wrapper {
      width: 100%;
      position: relative;
      background-color: ${formElements.input.background};
      z-index: 1;
      border-radius: 5px;

      input {
        ${inputBaseStyles(formElements, { block: true, size })};
        background-color: transparent;
        padding-inline-end: ${calculatePaddingWithoutSuffixIcon()};
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
        color: ${formElements.input.iconColor};
        width: 3rem;
        display: flex;
        justify-content: center;
      }

      .close-icon {
        cursor: pointer;
        position: absolute;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        inset-inline-end: ${calculateCloseIconPosition()};
      }
    }
  `;
};
