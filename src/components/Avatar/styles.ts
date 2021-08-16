import { css, Theme, SerializedStyles } from "@emotion/react";
import { Size } from "./Avatar";

const sizes = {
  xs: "1.875rem",
  sm: "2.5rem",
  md: "3.75rem",
  lg: "5rem",
  xl: "7.5rem",
};

const svgSizes = {
  xs: "1rem",
  sm: "1.25rem",
  md: "1.625rem",
  lg: "2rem",
  xl: "3rem",
};

export const avatar = (
  { typeScaleSizes }: Theme,
  { size, bgColor }: { size: Size; bgColor: string },
): SerializedStyles => {
  const fontSizes = {
    xs: typeScaleSizes.xs,
    sm: typeScaleSizes.sm,
    md: typeScaleSizes.lg,
    lg: typeScaleSizes["3xl"],
    xl: typeScaleSizes["4xl"],
  };

  return css`
    display: block;
    margin: 0;

    img {
      display: block;
      border-radius: 50%;
      height: ${sizes[size]};
      width: ${sizes[size]};
    }

    span {
      height: ${sizes[size]};
      width: ${sizes[size]};
      font-size: ${fontSizes[size]};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: ${bgColor};
      color: white;
      border-radius: 50%;

      svg {
        height: ${svgSizes[size]};
      }
    }
  `;
};
