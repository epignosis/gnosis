import { css, Theme, SerializedStyles } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";

export const errorContainer = ({ typeScaleSizes, formElements }: Theme): SerializedStyles => css`
  font-size: ${typeScaleSizes.md};
  width: 100%;
  display: inline-block;
  background-color: ${hexToRGBA(formElements.error.background, 0.25)};
  border: 1px solid ${formElements.error.borderColor};
  border-radius: 2px;
  padding: 1.25rem 2rem 1.5rem;
`;

export const inputError = ({ formElements }: Theme): SerializedStyles => css`
  color: ${formElements.input.errorColor};
  margin-left: 0.25rem;
`;
