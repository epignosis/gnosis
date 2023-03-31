import React, { FC, HTMLAttributes, useEffect, useReducer } from "react";
import { Dispatch, reducer } from "../../types/reducer";
import { tableContainer } from "./styles";
import Body from "./Body";
import Header from "./Header";
import { ExtendableProps } from "types/utils";
import { Column, EmptyState, Row, Sorting, TableState } from "types/types";

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
    dispatch({ type: "COLUMNS_CHANGED", payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: "ROWS_CHANGED", payload: rows });
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
