import React, { FC, HTMLAttributes, useEffect, useReducer } from "react";
import { Dispatch, reducer } from "./reducer";
import { tableContainer } from "./styles";
import Body from "./components/Body";
import Header from "./components/Header";
import { Actions } from "./constants";
import { TableProps, TableState } from "./types";
import { ExtendableProps } from "types/utils";

export type Props = ExtendableProps<HTMLAttributes<HTMLTableElement>, TableProps>;
export type ChildrenProps = Props & { state: TableState; dispatch: Dispatch };

type TableCompoundProps = {
  Header: FC<ChildrenProps>;
  Body: FC<ChildrenProps>;
};

const Table: FC<Props> & TableCompoundProps = (props) => {
  const { columns, rows, emptyState, hasSorting, onRowSelect } = props;

  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    selected: [],
  });

  const { selected } = state;

  useEffect(() => {
    dispatch({ type: Actions.columnsChanged, payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: Actions.rowsChanged, payload: rows });
  }, [rows]);

  useEffect(() => {
    onRowSelect && onRowSelect(selected);
  }, [selected]);

  return (
    <div css={tableContainer} data-testid="table">
      <table>
        <Table.Header state={state} dispatch={dispatch} {...props} />
        <Table.Body state={state} dispatch={dispatch} {...props} />
      </table>
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
