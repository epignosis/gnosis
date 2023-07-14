import { css, Theme, SerializedStyles } from "@emotion/react";
import { LabelSize } from "./Label";

export const label = (
  { typeScaleSizes }: Theme,
  { size, margin }: { size: LabelSize; margin?: boolean },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.md,
  };

  return css`
    font-size: ${fontSizes[size]};
    font-weight: 700;
    display: block;
    margin: ${margin ? "0 0 0.5rem" : 0};
    white-space: nowrap;
  `;
};
