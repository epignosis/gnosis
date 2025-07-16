import { Actions } from "./constants";
import { ActionType, TableState } from "./types";

export type Dispatch = (action: ActionType) => void;

export const reducer = (state: TableState, action: ActionType): TableState => {
  switch (action.type) {
    case Actions.toggleAll: {
      const hasSelected = state.selected.length > 0;
      const newSelected = hasSelected ? [] : [...state.rows];

      return { ...state, selected: newSelected };
    }
    case Actions.toggle: {
      const selectedRowId = action.payload.id;
      const selectedRowsIds = state.selected.map((entry) => entry.id);
      const isRowSelected = selectedRowsIds.includes(selectedRowId);

      if (isRowSelected) {
        // remove row from selected
        const newSelectedRows = state.selected.filter((row) => row?.id !== selectedRowId);
        return { ...state, selected: newSelectedRows };
      } else {
        // add row to selected
        return { ...state, selected: [...state.selected, action.payload] };
      }
    }
    case Actions.selectMany: {
      const uniqueSelected = [...new Set(action.payload)];

      const selectedRows = state.rows.filter((row) => uniqueSelected.includes(Number(row.id)));

      return { ...state, selected: [...state.selected, ...selectedRows] };
    }
    case Actions.sortingChanged: {
      return { ...state, sorting: action.payload };
    }
    case Actions.columnsChanged: {
      return { ...state, columns: action.payload };
    }
    case Actions.rowsChanged: {
      return { ...state, rows: action.payload, selected: [] };
    }
    case Actions.resetSelectedRows: {
      return { ...state, selected: [] };
    }
    case Actions.setDisabled: {
      return { ...state, disabled: action.payload };
    }
    default: {
      return state;
    }
  }
};
