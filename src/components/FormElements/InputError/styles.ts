import { css, Theme, SerializedStyles } from "@emotion/react";

export const inputError = ({ formElements }: Theme): SerializedStyles => css`
  color: ${formElements.errors.errorBorderColor};
  margin-inline-start: 0.25rem;
`;
