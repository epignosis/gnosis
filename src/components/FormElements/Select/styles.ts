import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";

const inputHeight = {
  sm: "1.875rem",
  md: "2.5rem",
  lg: "3rem",
};

const optionPadding = {
  sm: "4px 12px",
  md: "6px 12px",
  lg: "8px 12px",
};

export const selectContainer = (
  { formElements }: Theme,
  { size, inline }: { size: InputSize; inline: boolean },
): SerializedStyles => css`
  display: flex;
  flex-direction: ${inline ? "row" : "column"};
  gap: ${inline ? "1rem" : "0"};

  .select-input-wrapper {
    flex-grow: 1;
    max-width: 25rem;
    background-color: ${formElements.input.background};

    .error {
      border-color: ${formElements.errors.errorBorderColor};
    }

    .control-${size} {
      height: ${inputHeight[size]};
    }

    .option-${size} {
      padding: ${optionPadding[size]};
      cursor: pointer;
    }
  }
`;

export const customMenuList = (): SerializedStyles => css`
  padding: 0.75rem;
`;
