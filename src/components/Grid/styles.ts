import { css, SerializedStyles } from "@emotion/react";
import { mq, breakpoints } from "@theme/utils/breakpoints";

const breakpointsKeys = Object.keys(breakpoints);

const getCSSProp = (prop: string, attr: string) => `${prop}: ${attr}`;

type GridProp = string | (number | null | undefined)[] | null;

const getCSSResponsiveProps = (prop: string, attrs: GridProp) => {
  if (typeof attrs === "string") return getCSSProp(prop, attrs);

  return attrs?.map((value, i) => {
    if (value) {
      return `
          ${mq[breakpointsKeys[i]]} {
            ${prop}: ${value};
          }
        `;
    }

    return "";
  });
};

const generateGridTemplates = (attrs: GridProp) => {
  const prop = "grid-template-columns";

  if (typeof attrs === "string") return `${prop}: repeat(${attrs}, 1fr)`;

  return attrs?.map((value, i) => {
    if (value) {
      return `
          ${mq[breakpointsKeys[i]]} {
            ${prop}: repeat(${value}, 1fr);
          }
        `;
    }

    return "";
  });
};

export const gridContainer = ({
  gap,
  templateColumns,
  columnGap,
  rowGap,
}: {
  gap: number;
  templateColumns: GridProp;
  columnGap: number | undefined;
  rowGap: number | undefined;
}): SerializedStyles => css`
  display: grid;
  ${gap && `grid-gap: ${gap}rem`};
  ${rowGap && `row-gap: ${rowGap}rem`};
  ${columnGap && `column-gap: ${columnGap}rem`};
  ${generateGridTemplates(templateColumns)}
`;

const generateGridSpan = (prop: string, attrs: GridProp) => {
  if (typeof attrs === "string") return `${prop}: span ${attrs}`;

  return attrs?.map((value, i) => {
    if (value) {
      return `
          ${mq[breakpointsKeys[i]]} {
            ${prop}: span ${value};
          }
        `;
    }

    return "";
  });
};

export const gridItem = ({
  colSpan,
  colStart,
  colEnd,
  rowSpan,
  rowStart,
  rowEnd,
}: {
  colSpan: GridProp;
  colStart: GridProp;
  colEnd: GridProp;
  rowSpan: GridProp;
  rowStart: GridProp;
  rowEnd: GridProp;
}): SerializedStyles => {
  return css`
    ${colSpan && generateGridSpan("grid-column", colSpan)};
    ${colStart && getCSSResponsiveProps("grid-column-start", colStart)};
    ${colEnd && getCSSResponsiveProps("grid-column-end", colEnd)};
    ${rowSpan && generateGridSpan("grid-row", rowSpan)};
    ${rowStart && getCSSResponsiveProps("grid-row-start", rowStart)};
    ${rowEnd && getCSSResponsiveProps("grid-row-end", rowEnd)};
  `;
};
