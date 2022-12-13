import { css, Theme, SerializedStyles } from "@emotion/react";

export const tag = ({ typeScaleSizes }: Theme): SerializedStyles => css`
  display: inline-flex;
  align-items: center;
  font-size: ${typeScaleSizes.xs};
  padding: 0.5rem 0.75rem 0.4rem;
`;
