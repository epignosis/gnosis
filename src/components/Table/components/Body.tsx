import React, { FC, useCallback, useLayoutEffect, useState } from "react";
import { useDebounceFn } from "ahooks";
import { Row } from "../types";
import Result from "../../Result/Result";
import { ChildrenProps } from "../Table";
import TableRow from "./TableRow";

const Body: FC<ChildrenProps> = ({
  selectable,
  autohide = false,
  state,
  dispatch,
  onRowClick,
  onHoveredRowChange,
  disabled = false,
}) => {
  const { columns, selected, emptyState } = state;
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

  return (
    <tbody>
      {state.rows.length > 0 ? (
        <>
          {state.rows.map((row) => {
            const isSelected = selectedRowsIds.includes(row.id);

            return (
              <TableRow
                key={`entry-${row.id}-select`}
                row={row}
                columns={columns}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                isSelected={isSelected}
                selectable={Boolean(selectable)}
                autohide={autohide}
                dispatch={dispatch}
                onRowClick={onRowClick}
                onHoveredRowChange={handleRowHover}
                disabled={disabled}
              />
            );
          })}
        </>
      ) : (
        <tr className="empty-state-container">
          <td>
            <Result {...emptyState} />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Body;
