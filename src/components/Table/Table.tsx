import React, {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
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
    isRowDisabled,
    onRowSelect,
  } = props;

  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    sorting,
    selected: [],
    expandedRows: [],
  });

  useEffect(() => {
    const currentColumnIds = new Set(state.columns.map((column) => column.accessor));
    const newColumnIds = new Set(columns.map((column) => column.accessor));

    if (
      currentColumnIds.size === newColumnIds.size &&
      [...currentColumnIds].every((id) => newColumnIds.has(id))
    ) {
      return;
    }
    dispatch({ type: Actions.columnsChanged, payload: columns });
  }, [columns, state.columns]);

  useEffect(() => {
    dispatch({ type: Actions.rowsChanged, payload: rows });

    if (state.rows[0]?.paginationNumber !== rows[0]?.paginationNumber) {
      dispatch({ type: Actions.resetSelectedRows, payload: null });
    }
  }, [rows, state.rows]);

  // A selected row that becomes disabled is unselected, and reported to the parent as toggled.
  // Layout effect, so the row never paints as checked and disabled.
  useLayoutEffect(() => {
    if (!isRowDisabled) return;

    const disabledIds = new Set(
      state.rows.filter((row) => isRowDisabled(row)).map((row) => row.id),
    );
    const droppedIds = state.selected.filter((row) => disabledIds.has(row.id)).map((row) => row.id);

    if (droppedIds.length === 0) return;

    dispatch({
      type: Actions.setSelected,
      payload: state.selected.filter((row) => !disabledIds.has(row.id)),
    });
    onRowSelect?.(droppedIds.map(Number));
  }, [state.rows, state.selected, isRowDisabled, onRowSelect]);

  useEffect(() => {
    if (!sorting) return;

    dispatch({
      type: Actions.sortingChanged,
      payload: sorting,
    });
  }, [sorting]);

  useImperativeHandle(ref, () => ({
    selectRowsById: (rowIds: number[]): void => {
      const disabledIds = new Set(
        rows.filter((row) => isRowDisabled?.(row)).map((row) => Number(row.id)),
      );
      dispatch({ type: Actions.selectMany, payload: rowIds.filter((id) => !disabledIds.has(id)) });
    },
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
