import React, { FC, useCallback, useLayoutEffect, useState } from "react";
import { useDebounceFn } from "ahooks";
import { Row } from "../types";
import { Actions } from "../constants";
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
  renderMobileRightActions,
  disabled = false,
}) => {
  const { columns, selected, expandedRows, emptyState } = state;
  const selectedRowsIds = selected.map((entry) => entry.id);
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const [windowWidth, windowHeight] = size;

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
          <td>
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
        const handleExpandToggle = (): void => {
          dispatch({ type: Actions.toggleRowExpanded, payload: row.id });
        };

        return (
          <tbody className="table-row-group" key={`${tableId}-entry-${row.id}-group`}>
            <TableRow
              rowId={`${tableId}-entry-${row.id}-select`}
              key={`${tableId}-entry-${row.id}-select`}
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
              renderMobileRightActions={renderMobileRightActions}
              disabled={disabled}
            />
          </tbody>
        );
      })}
    </>
  );
};

export default Body;
