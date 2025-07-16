import { ReactNode } from "react";
import { Actions } from "./constants";
import { IconType } from "types/common";

export type Column = {
  accessor: string;
  isDefaultSort?: boolean;
  isDefaultAccessor?: boolean;
  cell: string | ((arg?: unknown) => JSX.Element | null);
  hidden?: boolean;
  classNames?: string[];
  sortableHeader?: boolean;
  maxWidth?: number;
  headerWidth?: number;
  sortOrder?: "asc" | "desc";
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
  column?: string;
  isDescending?: boolean;
};

export type TableProps = {
  selectable?: boolean;
  autohide?: boolean;
  disabled?: boolean;
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  sorting?: Sorting;
  selectedRows?: Row[];
  onSortingChanged?: (sorting: Sorting) => void;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange?: (hoveredRow: Row | null) => void;
  onRowSelect?: (ids: number[]) => void;
};

export type TableState = {
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  selected: Row[];
  sorting?: Sorting;
  disabled?: boolean;
};

export type ActionType =
  | { type: Actions.toggleAll; payload: null }
  | { type: Actions.toggle; payload: Row }
  | { type: Actions.selectMany; payload: number[] }
  | { type: Actions.sortingChanged; payload: Sorting }
  | { type: Actions.columnsChanged; payload: Column[] }
  | { type: Actions.rowsChanged; payload: Row[] }
  | { type: Actions.resetSelectedRows; payload: null }
  | { type: Actions.setDisabled; payload: boolean };

export type TableHandlers = {
  selectRowsById: (rowIds: number[]) => void;
  resetSelected: () => void;
};
