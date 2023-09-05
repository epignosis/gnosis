import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { inputHeight } from "../styles";

export const selectContainer = (
  { formElements }: Theme,
  {
    size,
    inline,
    isInlineFlex,
    minWidth,
    maxWidth,
    hasInnerSearch,
  }: {
    size: InputSize;
    inline: boolean;
    isInlineFlex: boolean;
    minWidth: string;
    maxWidth: string;
    hasInnerSearch: boolean;
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
      /* minus border */
      min-height: calc(${inputHeight[size]} - 2px);
    }

    .option-${size} {
      padding: 0.3125rem 1rem;
      cursor: pointer;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-inline-end: ${hasInnerSearch ? "1rem" : "0"};
      padding-inline-end: ${hasInnerSearch ? "0" : "1rem"};
      width: auto;
    }
  }
`;

export const customMenuList = ({
  hasInnerSearch,
}: {
  hasInnerSearch: boolean;
}): SerializedStyles => css`
  padding: ${hasInnerSearch ? "0.75rem" : "0.5rem 0"};
`;
