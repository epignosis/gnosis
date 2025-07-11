import React, {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";
import classNames from "classnames";
import { Dispatch, reducer } from "./reducer";
import { tableContainer } from "./styles";
import Body from "./components/Body";
import Header from "./components/Header";
import { Actions } from "./constants";
import { TableHandlers, TableProps, TableState } from "./types";
import { ExtendableProps } from "types/utils";

export type Props = ExtendableProps<HTMLAttributes<HTMLTableElement>, TableProps>;
export type ChildrenProps = Props & { state: TableState; dispatch: Dispatch };

const Table: ForwardRefRenderFunction<TableHandlers, Props> = (props, ref) => {
  const {
    columns,
    rows,
    emptyState,
    sorting,
    id = "table",
    disabled = false,
    className = "",
  } = props;

  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    sorting,
    selected: [],
  });

  useEffect(() => {
    dispatch({ type: Actions.columnsChanged, payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: Actions.rowsChanged, payload: rows });
  }, [rows]);

  useEffect(() => {
    if (!sorting) return;

    dispatch({
      type: Actions.sortingChanged,
      payload: sorting,
    });
  }, [sorting]);

  useImperativeHandle(ref, () => ({
    selectRowsById: (rowIds: number[]) => dispatch({ type: Actions.selectMany, payload: rowIds }),
    resetSelected: () => dispatch({ type: Actions.resetSelectedRows, payload: null }),
  }));

  const containerClassNames = classNames({
    [className]: Boolean(className),
    disabled,
  });

  return (
    <div css={tableContainer} data-testid={id}>
      <table className={containerClassNames}>
        <Header state={state} dispatch={dispatch} {...props} />
        <Body state={state} dispatch={dispatch} {...props} />
      </table>
    </div>
  );
};

export default forwardRef(Table);
