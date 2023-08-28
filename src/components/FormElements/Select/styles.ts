import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { inputHeight } from "../styles";

const optionPadding = {
  sm: "0.25rem 0.75rem",
  md: "0.375rem 0.75rem",
  lg: "0.5rem 0.75rem",
};

export const selectContainer = (
  { formElements }: Theme,
  { size, inline }: { size: InputSize; inline: boolean },
): SerializedStyles => css`
  display: flex;
  flex-direction: ${inline ? "row" : "column"};
  gap: ${inline ? "1rem" : "0.5rem"};
  align-items: ${inline ? "center" : "normal"};

  label {
    margin: 0;
  }

  .select-input-wrapper {
    flex-grow: 1;
    max-width: 25rem;
    background-color: ${formElements.input.background};
    border-radius: 0.3125rem;
    .error {
      border-color: ${formElements.errors.errorBorderColor};
    }

    .control-${size} {
      min-height: ${inputHeight[size]};
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
