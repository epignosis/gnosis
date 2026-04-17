import { ReactNode } from "react";
import { Column, Row } from "./types";

export const getVisibleAccessors = (columns: Column[]): string[] => {
  return columns.filter((column) => !column.hidden).map((column) => column.accessor);
};

export const getVisibleColumns = (columns: Column[]): Column[] => {
  return columns.filter((column) => !column.hidden);
};

export const getDefaultAccessor = (columns: Column[]): string | undefined => {
  const visibleAccessors = getVisibleAccessors(columns);
  return visibleAccessors[0];
};

export const getColumnLabel = (column: Column): string => {
  return typeof column.cell === "string" ? column.cell : column.accessor;
};

export const renderRowValue = (value: Row[string], row: Row): ReactNode => {
  return typeof value === "function" ? value(row) : (value as ReactNode);
};
