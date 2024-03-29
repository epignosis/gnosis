import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Chip";

const chipHeight = {
  md: "2.5rem",
  lg: "3rem",
};

export const chip = (
  { typeScaleSizes, chip }: Theme,
  { size, isFilterOn, maxWidth }: { size: Size; isFilterOn: boolean; maxWidth: string },
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
        ${isFilterOn && "display: flex"};
      }

      .icon {
        ${isFilterOn && "display: none"};
      }
    }

    button {
      display: inline-flex;
      color: ${chip.color};
      background: transparent;
      border: none;
      padding: 0;
      margin-inline-end: 0.5rem;
      ${isFilterOn && "min-width:1rem"};

      .icon {
        display: ${isFilterOn ? "flex" : "none"};
        fill: currentColor;
      }

      .close-icon {
        display: ${isFilterOn ? "none" : "flex"};
      }
    }

    .has-overflow {
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: ${maxWidth};
    }
  `;
};
