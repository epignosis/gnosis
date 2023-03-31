import { Column, Row, Sorting } from "types/types";

export type Action =
  | { type: "SELECT_ALL" }
  | { type: "REMOVE_ALL" }
  | { type: "SELECT_ROW"; payload: Row }
  | { type: "REMOVE_ROW"; payload: Row }
  | { type: "SORTING_CHANGED"; payload: Sorting }
  | { type: "COLUMNS_CHANGED"; payload: Column[] }
  | { type: "ROWS_CHANGED"; payload: Row[] };
