import React, { FC, memo, useCallback } from "react";
import classNames from "classnames";
import { Column, Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import Cell from "./Cell";

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
  row: Row;
  columns: Column[];
  windowWidth: number;
  windowHeight: number;
  isSelected: boolean;
  selectable: boolean;
  autohide?: boolean;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange: (row: Row | null) => void;
  handleRowSelection: (e: React.ChangeEvent<HTMLInputElement>, row: Row) => void;
};

const TableRow: FC<TableRowProps> = ({
  row,
  columns,
  windowWidth,
  windowHeight,
  isSelected,
  selectable,
  autohide,
  onRowClick,
  onHoveredRowChange,
  handleRowSelection,
}) => {
  const accessors = columns.filter((column) => !column.hidden).map((column) => column.accessor);

  const handleCellClick = useCallback((): void => {
    onRowClick && onRowClick(row);
  }, [row]);

  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    handleRowSelection(e, row);

  return (
    <tr
      key={`entry-${row.id}-select`}
      className={rowClassnames(isSelected, Boolean(onRowClick))}
      onMouseEnter={() => onHoveredRowChange(row)}
      onMouseLeave={() => onHoveredRowChange(null)}
    >
      {selectable && (
        <Cell
          key={`${row.id}-${isSelected ? "selected" : "not-selected"}`}
          className={checkboxWrapperClassnames(Boolean(autohide))}
        >
          <Checkbox
            id={`entry-${row.id}`}
            name={`entry-${row.id}`}
            value={`entry-${row.id}`}
            checked={isSelected}
            onChange={handleRowChange}
          />
        </Cell>
      )}

      {accessors.map((accessor) => {
        const rowObj = row[accessor];
        const { maxWidth } = columns.find((column) => column.accessor === accessor) ?? {};

        return (
          <Cell
            key={`entry-${row.id}-${accessor}`}
            maxWidth={maxWidth}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            onClick={handleCellClick}
          >
            {typeof rowObj === "function" ? rowObj(row) : rowObj}
          </Cell>
        );
      })}
    </tr>
  );
};

export default memo(TableRow);
