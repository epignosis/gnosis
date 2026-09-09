import React, { FC, useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useDebounceFn } from "ahooks";
import { Row } from "../types";
import { Actions } from "../constants";
import { getVisibleColumns } from "../helpers";
import Result from "../../Result/Result";
import { ChildrenProps } from "../Table";
import TableRow from "./TableRow";

const Body: FC<ChildrenProps> = ({
  id: tableId = "table",
  selectable = false,
  autohide = false,
  state,
  dispatch,
  onRowClick,
  onRowSelect,
  onHoveredRowChange,
  renderMobileActions,
  disabled = false,
}) => {
  const { columns, selected, expandedRows, emptyState } = state;
  const selectedRowsIds = selected.map((entry) => entry.id);
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const [windowWidth, windowHeight] = size;
  const emptyStateColSpan = useMemo(
    () => getVisibleColumns(columns).length + (selectable ? 1 : 0),
    [columns, selectable],
  );

  // use debounce on window resize to reduce Cell re-renders
  const { run: debouncedUpdateSize } = useDebounceFn(() => updateSize(), { wait: 300 });
  const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener("resize", debouncedUpdateSize);

    return () => window.removeEventListener("resize", debouncedUpdateSize);
  }, []);

  const handleRowHover = useCallback(
    (row: Row | null): void => {
      if (disabled) return;
      onHoveredRowChange && onHoveredRowChange(row);
    },
    [onHoveredRowChange, disabled],
  );

  if (state.rows.length === 0) {
    return (
      <tbody className="empty-state-body">
        <tr className="empty-state-container">
          <td colSpan={emptyStateColSpan}>
            <Result {...emptyState} />
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <>
      {state.rows.map((row) => {
        const isSelected = selectedRowsIds.includes(row.id);
        const isExpanded = expandedRows.includes(row.id);
        const rowSelectId = `${tableId}-entry-${row.id}-select`;
        const rowGroupId = `${tableId}-entry-${row.id}-group`;
        const handleExpandToggle = (): void => {
          dispatch({ type: Actions.toggleRowExpanded, payload: row.id });
        };

        return (
          <tbody className="table-row-group" key={rowGroupId}>
            <TableRow
              rowId={rowSelectId}
              key={rowSelectId}
              row={row}
              columns={columns}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              isSelected={isSelected}
              isExpanded={isExpanded}
              selectable={selectable}
              autohide={autohide}
              dispatch={dispatch}
              onRowClick={onRowClick}
              onRowSelect={onRowSelect}
              onHoveredRowChange={handleRowHover}
              onExpandToggle={handleExpandToggle}
              renderMobileActions={renderMobileActions}
              disabled={disabled}
            />
          </tbody>
        );
      })}
    </>
  );
};

export default Body;
