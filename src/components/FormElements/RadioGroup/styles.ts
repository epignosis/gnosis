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
  { size, inline, readOnly }: { size: InputSize; inline: boolean; readOnly: boolean },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    padding-inline: 0 ${inline ? "1.5rem" : "0"};
    padding-block: 0.75rem;

    input[type="radio"] {
      opacity: 0;

      &:focus,
      &:hover {
        + label::before {
          box-shadow: ${readOnly ? 0 : `0px 0px 0px 9px ${checkbox.input.shadowColor}`};
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
            border: 1px solid ${checkbox.disabled.borderColor};
            box-shadow: none;
          }

          &::after {
            background-color: ${checkbox.disabled.borderColor};
          }
        }
      }

      + label {
        font-size: ${fontSizes[size]};
        position: relative;
        display: inline-block;
        padding-inline-start: 1.5rem;
        cursor: ${readOnly ? "normal" : "pointer"};

        &::before {
          content: "";
          position: absolute;
          inset-inline-start: -12px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: 1px solid ${checkbox.input.borderColor};
          border-radius: 50%;
          margin-inline-end: 1rem;
          transition: box-shadow 0.1s ease-out;
          top: 50%;
          transform: translateY(-50%);
        }

        &::after {
          content: "";
          position: absolute;
          display: inline-block;
          inset-inline-start: -9px;
          top: 50%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transition: background-color 0.1s ease-out;
          transform: translateY(-50%);
        }
      }
    }
  `;
};
