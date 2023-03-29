import React, { FC } from "react";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import { IconChevronDownSVG, IconChevronUpSVG } from "../../icons/index";
import { ChildrenProps, Sorting } from "./Table";
import Cell from "./Cell";

const Header: FC<ChildrenProps> = ({ state, dispatch }) => {
  const { rows, selectable, columns, selected, sortable, sorting } = state;
  const selectedIds = selected.map((entry) => entry.id);
  const rowIds = rows.map((row) => row.id);
  const isSelectAllChecked = selected.length > 0;
  const allRowsSelected = rowIds.every((rowId) => selectedIds.includes(rowId));

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    selected.length === 0 ? dispatch({ type: "selectAll" }) : dispatch({ type: "removeAll" });
  };

  const handleHeaderClick = (accesor: string): void => {
    if (sortable) {
      // new sorting object
      const newSorting: Sorting = {
        column: accesor,
        isDescending: false,
      };

      // sorting the same column
      if (sorting?.column === accesor) {
        !sorting.isDescending ? (newSorting.isDescending = true) : (newSorting.column = "");
      }

      dispatch({ type: "sortingChanged", payload: newSorting });
    }
  };

  return (
    <thead>
      <tr>
        {selectable && (
          <Cell as="th" key={`select-all-${isSelectAllChecked}`} className="selectable-cell">
            <Checkbox
              id="select-all"
              name="select-all"
              value="all"
              onChange={handleCheckbox}
              checked={isSelectAllChecked}
              isPartiallySelected={!allRowsSelected}
            />
          </Cell>
        )}
        {columns.map(
          ({ accessor, cell, hidden, sortableHeader = true, classNames = [] }) =>
            !hidden && (
              <Cell
                as="th"
                key={accessor}
                className={`header-cell ${classNames.length > 0 && classNames.join(" ")}`}
                onClick={(): void => {
                  if (sortableHeader) {
                    handleHeaderClick(accessor);
                  }
                }}
              >
                <span>{typeof cell === "string" ? cell : cell({ accessor, cell })}</span>
                {sortable && sorting?.column === accessor && (
                  <span className="sorting-icon">
                    {!sorting?.isDescending ? (
                      <IconChevronUpSVG height={20} />
                    ) : (
                      <IconChevronDownSVG height={20} />
                    )}
                  </span>
                )}
              </Cell>
            ),
        )}
      </tr>
    </thead>
  );
};

export default Header;
