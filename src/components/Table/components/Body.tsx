import React, { FC } from "react";
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

const Body: FC<ChildrenProps> = ({
  selectable,
  state,
  dispatch,
  handleRowClick,
  onHoveredRowChange,
}) => {
  const { columns, selected } = state;
  const accessors = columns.filter((column) => !column.hidden).map((column) => column.accessor);
  const selectedRows = selected.map((entry) => entry.id);

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
                className={rowClassnames(isSelected, Boolean(handleRowClick))}
                onMouseEnter={(): void => handleRowHover(row)}
                onMouseLeave={(): void => handleRowHover(null)}
              >
                {selectable && (
                  <Cell key={row.id} className="selectable-cell">
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

                  if (typeof rowObj === "function") {
                    return (
                      <Cell
                        key={`entry-${row.id}-${accessor}`}
                        onClick={handleRowClick ? (): void => handleRowClick(row) : undefined}
                      >
                        {rowObj(row)}
                      </Cell>
                    );
                  }
                  return (
                    <Cell
                      key={`entry-${row.id}-${accessor}`}
                      onClick={handleRowClick ? (): void => handleRowClick(row) : undefined}
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
            <Result
              title={state.emptyState.title}
              info={state.emptyState.info}
              icon={state.emptyState.icon}
              callbackInfo={state.emptyState.callbackInfo}
              isTable={true}
              callbackFn={state.emptyState.callbackFn}
            />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Body;
