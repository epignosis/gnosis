import React, { FC, memo, MouseEvent, ReactNode, useMemo } from "react";
import { Column, Row } from "../types";
import { getDefaultAccessor, getVisibleColumns } from "../helpers";
import MobileTableRowDetails from "./MobileTableRowDetails";
import MobileTablePrimaryRow from "./MobileTablePrimaryRow";

export type MobileTableRowProps = {
  rowId: string;
  row: Row;
  columns: Column[];
  isSelected: boolean;
  isExpanded: boolean;
  selectable: boolean;
  disabled?: boolean;
  onRowSelection: () => void;
  onExpandToggle: () => void;
  onHoveredRowChange: (row: Row | null) => void;
  renderMobileRightActions?: (row: Row) => ReactNode;
};

const MobileTableRow: FC<MobileTableRowProps> = ({
  rowId,
  row,
  columns,
  isSelected,
  isExpanded,
  selectable,
  disabled = false,
  onRowSelection,
  onExpandToggle,
  onHoveredRowChange,
  renderMobileRightActions,
}) => {
  const visibleColumns = getVisibleColumns(columns);
  const defaultAccessor = getDefaultAccessor(columns);

  const primaryCellId = `entry-${row.id}-${defaultAccessor}`;
  const detailsRowId = `entry-${row.id}-details`;
  const mobileColSpan = visibleColumns.length + (selectable ? 1 : 0);

  const secondaryColumns = useMemo(
    () => visibleColumns.filter((column) => column.accessor !== defaultAccessor),
    [defaultAccessor, visibleColumns],
  );
  const hasSecondaryColumns = secondaryColumns.length > 0;

  const primaryValue = defaultAccessor ? row[defaultAccessor] : null;
  const isRowClickable = hasSecondaryColumns && !disabled;

  const handleMobileRowClick = (): void => {
    if (!isRowClickable) return;
    onExpandToggle();
  };

  const handleExpandToggle = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (!isRowClickable) return;
    onExpandToggle();
  };

  const handleControlClick = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  const handleMouseEnter = (): void => {
    if (!disabled) onHoveredRowChange(row);
  };

  const handleMouseLeave = (): void => {
    if (!disabled) onHoveredRowChange(null);
  };

  return (
    <>
      <MobileTablePrimaryRow
        rowId={rowId}
        row={row}
        isSelected={isSelected}
        isExpanded={isExpanded}
        selectable={selectable}
        disabled={disabled}
        mobileColSpan={mobileColSpan}
        isRowClickable={isRowClickable}
        primaryCellId={primaryCellId}
        detailsRowId={detailsRowId}
        hasSecondaryColumns={hasSecondaryColumns}
        primaryValue={primaryValue}
        onRowSelection={onRowSelection}
        onRowClick={handleMobileRowClick}
        onExpandToggle={handleExpandToggle}
        onControlClick={handleControlClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        renderMobileRightActions={renderMobileRightActions}
      />
      {isExpanded && hasSecondaryColumns && (
        <MobileTableRowDetails
          row={row}
          isSelected={isSelected}
          detailsRowId={detailsRowId}
          mobileColSpan={mobileColSpan}
          secondaryColumns={secondaryColumns}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
};

export default memo(MobileTableRow);
