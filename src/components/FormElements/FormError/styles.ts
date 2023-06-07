import { css, Theme, SerializedStyles } from "@emotion/react";

export const errorContainer = ({ typeScaleSizes, formElements }: Theme): SerializedStyles => css`
  font-size: ${typeScaleSizes.md};
  width: 100%;
  display: inline-block;
  background-color: ${formElements.generalError.background};
  border: 1px solid ${formElements.generalError.borderColor};
  border-radius: 2px;
  padding: 1.5rem 2rem;
`;
