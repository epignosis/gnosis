import { css, Theme, SerializedStyles } from "@emotion/react";

export const inputError = ({ formElements }: Theme): SerializedStyles => css`
  color: ${formElements.errors.errorBorderColor};
  margin-left: 0.25rem;
`;
