import { css, Theme, SerializedStyles } from "@emotion/react";
import { TypographyLevels } from "@theme/utils/typography";

export const headingContainer = (
  { typeScaleSizes }: Theme,
  { size }: { size: TypographyLevels },
): SerializedStyles => css`
  font-size: ${typeScaleSizes[size]};
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  // Help prevent overflow of long words/names/URLs
  word-break: break-word;

  // Optional, not supported for all languages
  hyphens: auto;
`;
