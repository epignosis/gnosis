import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Chip";

const chipHeight = {
  md: "2.5rem",
  lg: "3rem",
};

export const chip = (
  { typeScaleSizes, chip }: Theme,
  { size, bgColor }: { size: Size; bgColor: string },
): SerializedStyles => {
  const fontSizes = {
    md: typeScaleSizes.sm,
    lg: typeScaleSizes.lg,
  };

  return css`
    display: inline-flex;
    align-items: center;
    font-size: ${fontSizes[size]};
    ${size && `height: ${chipHeight[size]}`};
    background-color: ${chip.background[bgColor]};
    color: ${chip.color[bgColor]};
    padding: 0 0.75rem;
    border-radius: 5px;

    button {
      margin-right: 0.5rem;
      display: inline-flex;
      color: white;
      background: transparent;
      border: none;
      padding: 0;
    }
  `;
};
