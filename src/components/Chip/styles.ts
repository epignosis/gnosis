import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Chip";

const chipHeight = {
  md: "2.5rem",
  lg: "3rem",
};

export const chip = (
  { typeScaleSizes, chip }: Theme,
  { size }: { size: Size },
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
    padding: 0 0.75rem;
    border-radius: 5px;
    color: ${chip.color};
    background-color: ${chip.backgroundColor};

    &:hover {
      .close-icon {
        display: flex;
        margin-inline-end: 0.5rem;
      }
    }

    button {
      display: inline-flex;
      color: ${chip.color};
      background: transparent;
      border: none;
      padding: 0;

      .close-icon {
        display: none;
      }
    }
  `;
};
