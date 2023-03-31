import { TableState } from "./types";
import { Action } from "src/constants/Actions";

export type Dispatch = (action: Action) => void;

export const reducer = (state: TableState, action: Action): TableState => {
  switch (action.type) {
    case "SELECT_ALL": {
      return { ...state, selected: [...state.rows] };
    }
    case "REMOVE_ALL": {
      return { ...state, selected: [] };
    }
    case "SELECT_ROW": {
      return { ...state, selected: [...state.selected, action.payload] };
    }
    case "REMOVE_ROW": {
      const rowToRemoveId = action.payload.id;
      const newSelectedRow = state.selected.filter((row) => row?.id !== rowToRemoveId);

      return { ...state, selected: newSelectedRow };
    }
    case "SORTING_CHANGED": {
      if (state.sorting && state?.onSortingChanged) {
        state.onSortingChanged(action.payload);
      }

      return { ...state, sorting: action.payload };
    }
    case "COLUMNS_CHANGED": {
      return { ...state, columns: action.payload };
    }
    case "ROWS_CHANGED": {
      return { ...state, rows: action.payload };
    }
    default: {
      return state;
    }
  }
};
