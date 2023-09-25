import { css, Theme, SerializedStyles } from "@emotion/react";

export const tag = ({ typeScaleSizes, tag }: Theme): SerializedStyles => css`
  display: inline-flex;
  align-items: center;
  font-size: ${typeScaleSizes.sm};
  line-height: normal;
  padding: 0.5rem;
  background-color: ${tag.backgroundColor};
  color: ${tag.color};
  border-radius: 5px;
  white-space: nowrap;
`;
