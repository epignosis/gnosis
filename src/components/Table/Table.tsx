import React, { FC, HTMLAttributes, useEffect, useReducer } from "react";
import { Dispatch, reducer } from "./reducer";
import { tableContainer } from "./styles";
import Body from "./components/Body";
import Header from "./components/Header";
import { Actions } from "./constants";
import { Sorting, TableProps, TableState } from "./types";
import { ExtendableProps } from "types/utils";

export type Props = ExtendableProps<HTMLAttributes<HTMLTableElement>, TableProps>;
export type ChildrenProps = Props & { state: TableState; dispatch: Dispatch };

type TableCompoundProps = {
  Header: FC<ChildrenProps>;
  Body: FC<ChildrenProps>;
};

const Table: FC<Props> & TableCompoundProps = (props) => {
  const { columns, rows, emptyState, sortable = false, sorting, ...rest } = props;

  const defaultSorting: Sorting = sorting ?? {
    column: sortable ? columns[0].accessor : "",
    isDescending: false,
  };

  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    selected: [],
    sorting: defaultSorting,
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
        <Table.Header state={state} dispatch={dispatch} {...props} />
        <Table.Body state={state} dispatch={dispatch} {...props} />
      </table>
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
