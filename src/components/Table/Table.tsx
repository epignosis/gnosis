import React, { FC, HTMLAttributes, useEffect, useReducer } from "react";
import Body from "./Body";
import { tableContainer } from "./styles";
import Header from "./Header";
import { ExtendableProps } from "types/utils";

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

export type Action =
  | { type: "selectAll" }
  | { type: "removeAll" }
  | { type: "selectRow"; payload: Row }
  | { type: "removeRow"; payload: Row }
  | { type: "sortingChanged"; payload: Sorting }
  | { type: "columnsChanged"; payload: Column[] }
  | { type: "rowsChanged"; payload: Row[] };

export type Dispatch = (action: Action) => void;

const reducer = (state: TableState, action: Action): TableState => {
  switch (action.type) {
    case "selectAll": {
      return { ...state, selected: [...state.rows] };
    }
    case "removeAll": {
      return { ...state, selected: [] };
    }
    case "selectRow": {
      return { ...state, selected: [...state.selected, action.payload] };
    }
    case "removeRow": {
      const rowToRemoveId = action.payload.id;
      const newSelectedRow = state.selected.filter((row) => row?.id !== rowToRemoveId);

      return { ...state, selected: newSelectedRow };
    }
    case "sortingChanged": {
      if (state.sorting && state?.onSortingChanged) {
        state.onSortingChanged(action.payload);
      }

      return { ...state, sorting: action.payload };
    }
    case "columnsChanged": {
      return { ...state, columns: action.payload };
    }
    case "rowsChanged": {
      return { ...state, rows: action.payload };
    }
    default: {
      return state;
    }
  }
};

export type ChildrenProps = { state: TableState; dispatch: Dispatch };

export type Props = ExtendableProps<
  HTMLAttributes<HTMLTableElement>,
  {
    columns: Column[];
    rows: Row[];
    emptyState: EmptyState;
    selectable?: boolean;
    sortable?: boolean;
    sorting?: Sorting;
    onSortingChanged?: (sorting: Sorting) => void;
    handleRowClick?: (row: Row) => void;
  }
>;

type TableCompoundProps = {
  Header: FC<ChildrenProps>;
  Body: FC<ChildrenProps>;
};

const Table: FC<Props> & TableCompoundProps = (props) => {
  const defaultSorting: Sorting = {
    column: props.sortable ? props.columns[0].accessor : "",
    isDescending: false,
  };
  const {
    columns,
    rows,
    emptyState,
    selectable = false,
    sortable = false,
    sorting = defaultSorting,
    onSortingChanged,
    handleRowClick,
    ...rest
  } = props;
  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    selected: [],
    selectable,
    sortable,
    sorting,
    onSortingChanged,
    handleRowClick,
  });

  useEffect(() => {
    dispatch({ type: "columnsChanged", payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: "rowsChanged", payload: rows });
  }, [rows]);

  return (
    <div css={tableContainer} data-testid="table">
      <table {...rest}>
        <Table.Header state={state} dispatch={dispatch} />
        <Table.Body state={state} dispatch={dispatch} />
      </table>
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
