import React, { FC, useState } from "react";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import Result from "../Result/Result";
import Cell from "./Cell";
import { ChildrenProps, Row } from "./Table";

const Body: FC<ChildrenProps> = ({ state, dispatch }) => {
  const { selectable, columns, selected, handleRowClick } = state;
  const accessors = columns
    .filter((column) => !column.hidden)
    .map((column) => column.accessor)
    .filter((column) => column !== "actions");
  const selectedArr = selected.map((entry) => entry.id);
  const [hoveredRow, setHoveredRow] = useState("");

  const handleRowSelection = (e: React.ChangeEvent<HTMLInputElement>, row: Row): void => {
    e.preventDefault();

    if (!selectedArr.includes(row.id)) {
      dispatch({ type: "selectRow", payload: row });
    }

    if (selectedArr.includes(row.id)) {
      dispatch({ type: "removeRow", payload: row });
    }
  };

  return (
    <>
      {state.rows.length > 0 ? (
        <tbody>
          {state.rows.map((row) => {
            const isSelected = selectedArr.includes(row.id);
            return (
              <tr
                key={`${row.id}-${isSelected ? "selected" : "not-selected"}`}
                className={`${isSelected ? "selected" : ""} ${handleRowClick ? "link" : ""}`}
                onMouseEnter={(): void => setHoveredRow(row.id.toString())}
                onMouseLeave={(): void => setHoveredRow("")}
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

                {row.actions && hoveredRow === `${row.id}` && (
                  <td className="actions-container">
                    {typeof row?.actions === "function" && row?.actions(row)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <tr className="empty-state-container">
            <td>
              <Result title={state.emptyState.title} info={state.emptyState.info} />
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default Body;
