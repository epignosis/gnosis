import { ReactNode } from "react";
import { Actions } from "./constants";
import { IconType } from "types/common";

export type Column = {
  accessor: string;
  cell: string | ((arg?: unknown) => JSX.Element | null);
  hidden?: boolean;
  classNames?: string[];
  sortableHeader?: boolean;
  maxWidth?: number;
  reversedSorting?: true;
};

export type Row = {
  id: string | number;
  [key: string]: unknown | ((arg?: unknown) => JSX.Element | string | null);
};

export type EmptyState = {
  title: string;
  info: string;
  icon?: IconType;
  footer?: ReactNode;
  hideInfo?: boolean;
};

export type Sorting = {
  column: string;
  isDescending: boolean;
};

export type TableProps = {
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  selectable?: boolean;
  sorting?: Sorting;
  onSortingChanged?: (sorting: Sorting) => void;
  onRowSelect?: (selectedRows: Row[]) => void;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange?: (hoveredRow: Row | null) => void;
};

export type TableState = {
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  selected: Row[];
  sorting?: Sorting;
};

export type ActionType =
  | { type: Actions.selectAll; payload: null }
  | { type: Actions.removeAll; payload: null }
  | { type: Actions.selectRow; payload: Row }
  | { type: Actions.removeRow; payload: Row }
  | { type: Actions.sortingChanged; payload: Sorting }
  | { type: Actions.columnsChanged; payload: Column[] }
  | { type: Actions.rowsChanged; payload: Row[] };
