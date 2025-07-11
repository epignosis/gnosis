import React, { FC, memo, useCallback } from "react";
import classNames from "classnames";
import { Column, Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { Dispatch } from "../reducer";
import { Actions } from "../constants";
import { getDefaultAccessor, getVisibleAccessors } from "../helpers";
import Cell from "./Cell";
import DataCells from "./DataCells";

const rowClassnames = (isSelected: boolean, callback: boolean): string =>
  classNames({
    selected: isSelected,
    link: callback,
  });

const checkboxWrapperClassnames = (autohide: boolean): string =>
  classNames("selectable-cell", {
    "autohide-cell": autohide,
  });

export type TableRowProps = {
  rowId: string;
  row: Row;
  columns: Column[];
  windowWidth: number;
  windowHeight: number;
  isSelected: boolean;
  selectable: boolean;
  autohide?: boolean;
  disabled?: boolean;
  dispatch: Dispatch;
  onRowSelect?: (row: number) => void;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange: (row: Row | null) => void;
};

const TableRow: FC<TableRowProps> = ({
  rowId,
  row,
  columns,
  windowWidth,
  windowHeight,
  isSelected,
  selectable,
  autohide,
  disabled = false,
  dispatch,
  onRowSelect,
  onRowClick,
  onHoveredRowChange,
}) => {
  const accessors = getVisibleAccessors(columns);
  const defaultAccessor = getDefaultAccessor(columns);

  const handleRowClick = useCallback((): void => {
    if (disabled) return;
    onRowClick?.(row);
  }, [row.id, disabled]);

  const handleRowSelection = (): void => {
    if (disabled) return;

    dispatch({ type: Actions.toggle, payload: row });

    onRowSelect?.(Number(row.id));
  };

  return (
    <tr
      key={`entry-${row.id}-select`}
      className={rowClassnames(isSelected, Boolean(onRowClick))}
      onMouseEnter={(): void => {
        !disabled && onHoveredRowChange(row);
      }}
      onMouseLeave={(): void => {
        !disabled && onHoveredRowChange(null);
      }}
    >
      {selectable && (
        <Cell key={rowId} className={checkboxWrapperClassnames(Boolean(autohide))}>
          <Checkbox
            id={rowId}
            key={rowId}
            name={rowId}
            value={rowId}
            checked={isSelected}
            onChange={handleRowSelection}
            disabled={disabled}
            aria-labelledby={`entry-${row.id}-${defaultAccessor}`}
          />
        </Cell>
      )}

      <DataCells
        row={row}
        columns={columns}
        accessors={accessors}
        windowHeight={windowHeight}
        windowWidth={windowWidth}
        handleRowClick={handleRowClick}
      />
    </tr>
  );
};

export default memo(TableRow);
