import React, { FC, memo, ReactNode, useCallback } from "react";
import classNames from "classnames";
import { Column, Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { Dispatch } from "../reducer";
import { Actions } from "../constants";
import { getDefaultAccessor, getVisibleAccessors } from "../helpers";
import Cell from "./Cell";
import DataCells from "./DataCells";
import MobileTableRow from "./MobileTableRow";
import { breakpoints } from "@theme/utils/breakpoints";

const rowClassnames = (isSelected: boolean, callback: boolean, rowDisabled: boolean): string =>
  classNames({
    selected: isSelected,
    link: callback,
    "disabled-row": rowDisabled,
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
  isExpanded: boolean;
  selectable: boolean;
  autohide?: boolean;
  disabled?: boolean;
  /** Only this row is disabled (unlike `disabled`, which is table-wide). */
  rowDisabled?: boolean;
  dispatch: Dispatch;
  onRowSelect?: (rowIds: number[]) => void;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange: (row: Row | null) => void;
  onExpandToggle: () => void;
  renderMobileActions?: (row: Row) => ReactNode;
};

const TableRow: FC<TableRowProps> = ({
  rowId,
  row,
  columns,
  windowWidth,
  windowHeight,
  isSelected,
  isExpanded,
  selectable,
  autohide,
  disabled: tableDisabled = false,
  rowDisabled = false,
  dispatch,
  onRowSelect,
  onRowClick,
  onHoveredRowChange,
  onExpandToggle,
  renderMobileActions,
}) => {
  const accessors = getVisibleAccessors(columns);
  const defaultAccessor = getDefaultAccessor(columns);
  const isMobile = windowWidth < breakpoints.md;
  const disabled = tableDisabled || rowDisabled;

  const handleRowClick = useCallback((): void => {
    if (disabled) return;
    onRowClick?.(row);
  }, [disabled, onRowClick, row]);

  const handleRowSelection = (): void => {
    if (disabled) return;
    dispatch({ type: Actions.toggle, payload: row });
    onRowSelect?.([Number(row.id)]);
  };

  if (isMobile) {
    return (
      <MobileTableRow
        rowId={rowId}
        row={row}
        columns={columns}
        isSelected={isSelected}
        isExpanded={isExpanded}
        selectable={selectable}
        disabled={tableDisabled}
        rowDisabled={rowDisabled}
        renderMobileActions={renderMobileActions}
        onRowSelection={handleRowSelection}
        onExpandToggle={onExpandToggle}
        onHoveredRowChange={onHoveredRowChange}
      />
    );
  }

  return (
    <tr
      key={`entry-${row.id}-select`}
      className={rowClassnames(isSelected, Boolean(onRowClick), rowDisabled)}
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
