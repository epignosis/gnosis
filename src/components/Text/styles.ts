import { css, Theme, SerializedStyles } from "@emotion/react";
import { TextWeight } from "./Text";
import { TypographyLevels } from "@theme/utils/typography";

export const textContainer = (
  { typeScaleSizes }: Theme,
  weight: TextWeight,
  size: TypographyLevels,
): SerializedStyles => css`
  font-size: ${typeScaleSizes[size]};
  font-weight: ${weight};
`;
