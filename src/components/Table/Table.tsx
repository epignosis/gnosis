import React, {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";
import { Dispatch, reducer } from "./reducer";
import { tableContainer } from "./styles";
import Body from "./components/Body";
import Header from "./components/Header";
import { Actions } from "./constants";
import { TableProps, TableState } from "./types";
import { ExtendableProps } from "types/utils";

export type Props = ExtendableProps<HTMLAttributes<HTMLTableElement>, TableProps>;
export type ChildrenProps = Props & { state: TableState; dispatch: Dispatch };

export type ImperativeHandlers = {
  toggleSelected: () => void;
};

const Table: ForwardRefRenderFunction<ImperativeHandlers, Props> = (props, ref) => {
  const { columns, rows, emptyState, onRowSelect, sorting } = props;

  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    sorting,
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

  useImperativeHandle(ref, () => ({
    toggleSelected: () => dispatch({ type: Actions.toggleAll, payload: null }),
  }));

  return (
    <div css={tableContainer} data-testid="table">
      <table>
        <Header state={state} dispatch={dispatch} {...props} />
        <Body state={state} dispatch={dispatch} {...props} />
      </table>
    </div>
  );
};

export default forwardRef(Table);
