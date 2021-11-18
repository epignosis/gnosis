import React, { FC } from "react";
import { gridContainer, gridItem } from "./styles";

type NumberOrNull = number | null;
type HTMLWrapperElement = "div" | "article" | "section";

export type ResponsiveValues =
  | [NumberOrNull, NumberOrNull, NumberOrNull?, NumberOrNull?, NumberOrNull?, NumberOrNull?]
  | number;

export type GridProps = React.HTMLAttributes<HTMLElement> & {
  templateColumns: ResponsiveValues;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  as?: HTMLWrapperElement;
};

type GridCompoundProps = {
  Item: FC<GridItemProps>;
};

const generateGridValues = (
  values: ResponsiveValues | "auto" | undefined,
): (number | null | undefined)[] | string | null => {
  switch (typeof values) {
    case "undefined":
      return null;
    case "string":
      return values;
    case "number":
      return values.toString();
    default:
      return values.map((value) => value);
  }
};

const Grid: FC<GridProps> & GridCompoundProps = (props) => {
  const { gap = 2, columnGap, rowGap, templateColumns, as = "div", children, ...rest } = props;
  const templateColumnAttrs = generateGridValues(templateColumns);
  const Component = as;

  return (
    <Component
      css={gridContainer({ templateColumns: templateColumnAttrs, gap, columnGap, rowGap })}
      {...rest}
    >
      {children}
    </Component>
  );
};

type GridItemProps = React.HTMLAttributes<HTMLElement> & {
  colSpan?: ResponsiveValues | "auto";
  colStart?: ResponsiveValues | "auto";
  colEnd?: ResponsiveValues | "auto";
  rowSpan?: ResponsiveValues | "auto";
  rowStart?: ResponsiveValues | "auto";
  rowEnd?: ResponsiveValues | "auto";
  as?: HTMLWrapperElement;
};

const Item: FC<GridItemProps> = (props) => {
  const {
    colSpan,
    colStart,
    colEnd,
    rowSpan,
    rowStart,
    rowEnd,
    as = "div",
    children,
    ...rest
  } = props;
  const colSpanAttrs = generateGridValues(colSpan);
  const colStartAttrs = generateGridValues(colStart);
  const colEndAttrs = generateGridValues(colEnd);
  const rowSpanAttrs = generateGridValues(rowSpan);
  const rowStartAttrs = generateGridValues(rowStart);
  const rowEndAttrs = generateGridValues(rowEnd);
  const Component = as;

  return (
    <Component
      css={gridItem({
        colSpan: colSpanAttrs,
        colStart: colStartAttrs,
        colEnd: colEndAttrs,
        rowSpan: rowSpanAttrs,
        rowStart: rowStartAttrs,
        rowEnd: rowEndAttrs,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
};

Grid.Item = Item;

export default Grid;
