import { css, Theme, SerializedStyles } from "@emotion/react";
import { hexToRGBA } from "@theme/default/colors";

export const errorContainer = ({ typeScaleSizes, formElements }: Theme): SerializedStyles => css`
  font-size: ${typeScaleSizes.md};
  width: 100%;
  display: inline-block;
  background-color: ${hexToRGBA(formElements.generalError.background, 0.25)};
  border: 1px solid ${formElements.generalError.borderColor};
  border-radius: 2px;
  padding: 1.25rem 2rem 1.5rem;
`;
