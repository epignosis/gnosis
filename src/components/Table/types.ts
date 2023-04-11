import { Actions } from "./constants";

export type Column = {
  accessor: string;
  cell: string | ((arg?: unknown) => JSX.Element | null);
  hidden?: boolean;
  classNames?: string[];
  sortableHeader?: boolean;
};

export type Row = {
  id: string | number;
  [key: string]: unknown | ((arg?: unknown) => JSX.Element | string | null);
};

export type EmptyState = {
  title: string;
  info: string;
};

export type Sorting = {
  column: string;
  isDescending: boolean;
};

export type TableState = {
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  selected: Row[];
  selectable: boolean;
  sortable?: boolean;
  sorting?: Sorting;
  onSortingChanged?: (sorting: Sorting) => void;
  handleRowClick?: (row: Row) => void;
};

export type ActionType =
  | { type: Actions.selectAll; payload: null }
  | { type: Actions.removeAll; payload: null }
  | { type: Actions.selectRow; payload: Row }
  | { type: Actions.removeRow; payload: Row }
  | { type: Actions.sortingChanged; payload: Sorting }
  | { type: Actions.columnsChanged; payload: Column[] }
  | { type: Actions.rowsChanged; payload: Row[] };