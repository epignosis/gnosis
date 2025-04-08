import { Column } from "./types";

export const getVisibleAccessors = (columns: Column[]): string[] => {
  return columns.filter((column) => !column.hidden).map((column) => column.accessor);
};

export const getDefaultAccessor = (columns: Column[]): string | undefined => {
  const visibleAccessors = getVisibleAccessors(columns);
  return columns.find((column) => column.isDefaultAccessor)?.accessor ?? visibleAccessors[0];
};
