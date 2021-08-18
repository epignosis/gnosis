import { css, Theme, SerializedStyles } from "@emotion/react";
import { LabelSize } from "./Label";

export const label = (
  { typeScaleSizes }: Theme,
  { size }: { size: LabelSize },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    font-size: ${fontSizes[size]};
    font-weight: 700;
    display: block;
    margin: 0 0 0.5rem;
    white-space: nowrap;
  `;
};
