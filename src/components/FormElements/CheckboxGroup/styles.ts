import { css, SerializedStyles, Theme } from "@emotion/react";
import { CheckboxSize } from "./Checkbox";

export const checkboxGroupContainer = (inline: boolean): SerializedStyles => css`
  display: flex;
  flex-direction: ${inline ? "row" : "column"};
  padding: 0;
  border: 0;
  margin: 0;

  legend {
    position: relative;

    .dash {
      position: absolute;
      inset-inline-start: 7px;
      width: 8px;
      height: 2px;
      background-color: white;
      z-index: 3;
      top: 50%;
      transform: translateY(-50%);
    }

    .checkbox-container {
      padding-bottom: 0.5rem;
    }
  }

  ul {
    padding-inline-start: 2rem;
    margin: 0;
    list-style: none;

    .checkbox-container {
      padding: 0.5rem 0 0.5rem;
    }
  }
`;

export const checkboxContainer = (
  { typeScaleSizes, formElements }: Theme,
  { size, inline }: { size: CheckboxSize; inline: boolean },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    display: ${inline ? "inline-flex" : "flex"};
    padding-inline: 0 ${inline ? "1.5rem" : "0"};
    padding-block: 0.75rem;
    position: relative;
    align-items: center;

    .dash {
      position: absolute;
      inset-inline-start: 7px;
      width: 8px;
      height: 2px;
      background-color: white;
      z-index: 3;
      top: 50%;
      transform: translateY(-50%);
    }

    input[type="checkbox"] {
      opacity: 0;

      &:focus,
      &:hover {
        + label > .shadow-element {
          box-shadow: 0px 0px 0px 9px ${formElements.checkbox.input.shadowColor};
        }
      }

      &:checked {
        + label::after {
          opacity: 1;
          top: 50%;
          transform: scale(1) translateY(-50%);
        }
      }

      &:disabled {
        + label {
          cursor: not-allowed;

          &::before {
            border: 1px solid ${formElements.checkbox.disabled.borderColor};
          }

          .shadow-element {
            box-shadow: none;
          }

          &::after {
            background-color: ${formElements.checkbox.disabled.borderColor};
          }
        }
      }

      + label {
        font-size: ${fontSizes[size]};
        position: relative;
        display: inline-block;
        padding-inline-start: 1.5rem;
        cursor: pointer;

        &::before {
          content: "";
          background-color: white;
          border: 1px solid ${formElements.checkbox.input.borderColor};
          border-radius: 3px;
          margin-inline-end: 1rem;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
        }

        &::after {
          content: "";
          position: absolute;
          display: inline-block;
          inset-inline-start: -9px;
          top: 3px;
          width: 14px;
          height: 14px;
          background-color: ${formElements.checkbox.input.background};
          border-radius: 3px;
          opacity: 0;
          z-index: 2;
          transform: scale(0.5);
          transition: transform 50ms ease, opacity 100ms ease;
        }

        &::before,
        .shadow-element {
          position: absolute;
          inset-inline-start: -12px;
          display: inline-block;
          width: 20px;
          height: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .shadow-element {
          border-radius: 50%;
          transition: box-shadow 0.1s ease-out;
        }
      }
    }
  `;
};
