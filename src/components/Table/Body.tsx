import React, { FC, useState } from "react";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import Result from "../Result/Result";
import Cell from "./Cell";
import { ChildrenProps } from "./Table";
import { Row } from "types/types";

const Body: FC<ChildrenProps> = ({ state, dispatch }) => {
  const [hoveredRow, setHoveredRow] = useState("");
  const { selectable, columns, selected, handleRowClick } = state;
  const accessors = columns
    .filter((column) => !column.hidden)
    .map((column) => column.accessor)
    .filter((column) => column !== "actions");
  const selectedRows = selected.map((entry) => entry.id);

  const handleRowSelection = (e: React.ChangeEvent<HTMLInputElement>, row: Row): void => {
    e.preventDefault();

    if (!selectedRows.includes(row.id)) {
      dispatch({ type: "SELECT_ROW", payload: row });
    }

    if (selectedRows.includes(row.id)) {
      dispatch({ type: "REMOVE_ROW", payload: row });
    }
  };

  return (
    <tbody>
      {state.rows.length > 0 ? (
        <>
          {state.rows.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            const hasClickHandler = handleRowClick ? "link" : "";
            const isSelectedClassname = isSelected ? "selected" : "";
            const isHoveredRow = row.actions && hoveredRow === `${row.id}`;

            return (
              <tr
                key={row.id}
                className={`${isSelectedClassname} ${hasClickHandler}`}
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
                  const hasClickHandler = handleRowClick
                    ? (): void => handleRowClick(row)
                    : undefined;

                  if (typeof rowObj === "function") {
                    return (
                      <Cell key={`entry-${row.id}-${accessor}`} onClick={hasClickHandler}>
                        {rowObj(row)}
                      </Cell>
                    );
                  }
                  return (
                    <Cell key={`entry-${row.id}-${accessor}`} onClick={hasClickHandler}>
                      {rowObj as string}
                    </Cell>
                  );
                })}

                {isHoveredRow && (
                  <td className="actions-container">
                    {typeof row?.actions === "function" && row?.actions(row)}
                  </td>
                )}
              </tr>
            );
          })}
        </>
      ) : (
        <tr className="empty-state-container">
          <td>
            <Result title={state.emptyState.title} info={state.emptyState.info} />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Body;
