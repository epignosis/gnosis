import { Actions } from "./constants";
import { ActionType, TableState } from "./types";

export type Dispatch = (action: ActionType) => void;

export const reducer = (state: TableState, action: ActionType): TableState => {
  switch (action.type) {
    case Actions.selectAll: {
      return { ...state, selected: [...state.rows] };
    }
    case Actions.removeAll: {
      return { ...state, selected: [] };
    }
    case Actions.selectRow: {
      return { ...state, selected: [...(state.selected ?? []), action.payload] };
    }
    case Actions.removeRow: {
      const rowToRemoveId = action.payload.id;
      const newSelectedRow = state.selected?.filter((row) => row?.id !== rowToRemoveId);

      return { ...state, selected: newSelectedRow };
    }
    case Actions.sortingChanged: {
      if (state.sorting && state?.onSortingChanged) {
        state.onSortingChanged(action.payload);
      }

      return { ...state, sorting: action.payload };
    }
    case Actions.columnsChanged: {
      return { ...state, columns: action.payload };
    }
    case Actions.rowsChanged: {
      return { ...state, rows: action.payload };
    }
    default: {
      return state;
    }
  }
};
