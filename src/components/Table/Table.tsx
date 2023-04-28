import React, { FC, HTMLAttributes, useEffect, useReducer } from "react";
import { Dispatch, reducer } from "./reducer";
import { tableContainer } from "./styles";
import Body from "./components/Body";
import Header from "./components/Header";
import { Actions } from "./constants";
import { Column, EmptyState, Row, Sorting, TableState } from "./types";
import { ExtendableProps } from "types/utils";

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
    handleHoveredRowChange?: (hoveredRow: Row | null) => void;
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
    handleHoveredRowChange,
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
    handleHoveredRowChange,
  });

  useEffect(() => {
    dispatch({ type: Actions.columnsChanged, payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: Actions.rowsChanged, payload: rows });
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
