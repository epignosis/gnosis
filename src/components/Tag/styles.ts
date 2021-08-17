import { css, Theme, SerializedStyles } from "@emotion/react";

export const tag = (
  { typeScaleSizes, tag }: Theme,
  { bgColor }: { bgColor: string },
): SerializedStyles => {
  return css`
    display: inline-flex;
    align-items: center;
    font-size: ${typeScaleSizes.xs};
    background-color: ${tag.background[bgColor]};
    color: ${tag.color[bgColor]};
    padding: 0.4rem 0.75rem;
  `;
};
