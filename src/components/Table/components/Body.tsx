import React, { FC, useLayoutEffect, useState } from "react";
import classNames from "classnames";
import { Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import Result from "../../Result/Result";
import { ChildrenProps } from "../Table";
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

const Body: FC<ChildrenProps> = ({
  selectable,
  autohide = false,
  state,
  dispatch,
  onRowClick,
  onHoveredRowChange,
}) => {
  const { columns, selected, emptyState } = state;
  const accessors = columns.filter((column) => !column.hidden).map((column) => column.accessor);
  const selectedRows = selected.map((entry) => entry.id);
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleRowSelection = (e: React.ChangeEvent<HTMLInputElement>, row: Row): void => {
    e.preventDefault();

    if (!selectedRows.includes(row.id)) {
      dispatch({ type: Actions.selectRow, payload: row });
    }

    if (selectedRows.includes(row.id)) {
      dispatch({ type: Actions.removeRow, payload: row });
    }
  };

  const handleRowHover = (row: Row | null): void => {
    onHoveredRowChange && onHoveredRowChange(row);
  };

  return (
    <tbody>
      {state.rows.length > 0 ? (
        <>
          {state.rows.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            const rowKey = `${row.id}-${isSelected ? "selected" : "not-selected"}`;

            return (
              <tr
                key={rowKey}
                className={rowClassnames(isSelected, Boolean(onRowClick))}
                onMouseEnter={(): void => handleRowHover(row)}
                onMouseLeave={(): void => handleRowHover(null)}
              >
                {selectable && (
                  <Cell key={row.id} className={checkboxWrapperClassnames(autohide)}>
                    <Checkbox
                      id={`entry-${row.id}`}
                      name={`entry-${row.id}`}
                      value={`entry-${row.id}`}
                      onChange={(e): void => handleRowSelection(e, row)}
                      checked={isSelected}
                    />
                  </Cell>
                )}

                {accessors.map((accessor) => {
                  const rowObj = row[accessor];
                  const { maxWidth } = columns.find((column) => column.accessor === accessor) ?? {};
                  const style = { maxWidth: maxWidth ? `${maxWidth}px` : "auto" };

                  if (typeof rowObj === "function") {
                    return (
                      <Cell
                        key={`entry-${row.id}-${accessor}`}
                        onClick={onRowClick ? (): void => onRowClick(row) : undefined}
                        style={style}
                        windowSize={size}
                      >
                        {rowObj(row)}
                      </Cell>
                    );
                  }
                  return (
                    <Cell
                      key={`entry-${row.id}-${accessor}`}
                      onClick={onRowClick ? (): void => onRowClick(row) : undefined}
                      style={style}
                      windowSize={size}
                    >
                      {rowObj as string}
                    </Cell>
                  );
                })}
              </tr>
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
