import React, { FC, memo, useCallback } from "react";
import classNames from "classnames";
import { Column, Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { Dispatch } from "../reducer";
import { Actions } from "../constants";
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
  dispatch: Dispatch;
  onRowClick?: (row: Row) => void;
  onHoveredRowChange: (row: Row | null) => void;
};

const TableRow: FC<TableRowProps> = ({
  row,
  columns,
  windowWidth,
  windowHeight,
  isSelected,
  selectable,
  autohide,
  dispatch,
  onRowClick,
  onHoveredRowChange,
}) => {
  const accessors = columns.filter((column) => !column.hidden).map((column) => column.accessor);

  const handleRowClick = useCallback((): void => {
    onRowClick && onRowClick(row);
  }, [row.id]);

  const handleRowSelection = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, row: Row): void => {
      e.preventDefault();
      dispatch({ type: Actions.toggle, payload: row });
    },
    [dispatch],
  );

  return (
    <tr
      key={`entry-${row.id}-select`}
      className={rowClassnames(isSelected, Boolean(onRowClick))}
      onMouseEnter={() => onHoveredRowChange(row)}
      onMouseLeave={() => onHoveredRowChange(null)}
      onClick={handleRowClick}
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
            onChange={(e) => handleRowSelection(e, row)}
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
          >
            {typeof rowObj === "function" ? rowObj(row) : rowObj}
          </Cell>
        );
      })}
    </tr>
  );
};

export default memo(TableRow);
