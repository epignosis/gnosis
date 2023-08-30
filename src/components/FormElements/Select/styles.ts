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
  {
    size,
    inline,
    isInlineFlex,
    minWidth,
    maxWidth,
  }: {
    size: InputSize;
    inline: boolean;
    isInlineFlex: boolean;
    minWidth: string;
    maxWidth: string;
  },
): SerializedStyles => css`
  display: ${isInlineFlex ? "inline-flex" : "flex"};
  flex-direction: ${inline ? "row" : "column"};
  gap: ${inline ? "1rem" : "0.5rem"};
  align-items: ${inline ? "center" : "normal"};

  label {
    margin: 0;
    margin-inline-start: ${inline ? "0" : "0.5rem"};
  }

  .select-input-wrapper {
    min-width: ${minWidth};
    max-width: ${maxWidth};
    flex-grow: 1;
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
