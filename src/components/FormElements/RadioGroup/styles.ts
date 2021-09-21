import { css, SerializedStyles, Theme } from "@emotion/react";
import { InputSize } from "../Input/Input";

export const container = (inline: boolean): SerializedStyles => css`
  display: flex;
  flex-direction: ${inline ? "row" : "column"};
  padding: 0;
  border: 0;
  margin: 0;
`;

export const radioButtonContainer = (
  { typeScaleSizes, formElements: { checkbox } }: Theme,
  { size, inline }: { size: InputSize; inline: boolean },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    padding: 0.75rem ${inline ? "1.5rem" : "0"} 0.75rem 0;

    input[type="radio"] {
      opacity: 0;

      &:focus,
      &:hover {
        + label::before {
          box-shadow: 0px 0px 0px 9px ${checkbox.input.shadowColor};
        }
      }

      &:checked {
        + label::after {
          background-color: ${checkbox.input.background};
        }
      }

      &:disabled {
        + label {
          cursor: not-allowed;

          &::before {
            box-shadow: none;
          }

          &::after {
            background-color: ${checkbox.input.borderColor};
          }
        }
      }

      + label {
        font-size: ${fontSizes[size]};
        position: relative;
        display: inline-block;
        padding-left: 1.5rem;
        cursor: pointer;

        &::before {
          content: "";
          position: absolute;
          left: -12px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: 1px solid ${checkbox.input.borderColor};
          border-radius: 50%;
          margin-right: 1rem;
          transition: box-shadow 0.1s ease-out;
        }

        &::after {
          content: "";
          position: absolute;
          display: inline-block;
          left: -9px;
          top: 3px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transition: background-color 0.1s ease-out;
        }
      }
    }
  `;
};
