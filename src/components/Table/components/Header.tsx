import React, { FC } from "react";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { IconChevronDownSVG, IconChevronUpSVG } from "../../../icons/index";
import { Column, Sorting } from "../types";
import { ChildrenProps } from "../Table";
import { Actions } from "../constants";
import Cell from "./Cell";

const Header: FC<ChildrenProps> = ({ selectable = false, state, dispatch, onSortingChanged }) => {
  const { rows, columns, selected, sorting } = state;
  const selectedIds = selected.map((entry) => entry.id);
  const rowIds = rows.map((row) => row.id);
  const isSelectAllChecked = selected.length > 0;
  const allRowsSelected = rowIds.every((rowId) => selectedIds.includes(rowId));

  const handleToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    selected.length === 0
      ? dispatch({ type: Actions.selectAll, payload: null })
      : dispatch({ type: Actions.removeAll, payload: null });
  };

  const handleSortingChange = (accesor: string, sortOrder: Column["sortOrder"]): void => {
    if (sorting) {
      const isDescendingOrder = sortOrder === "desc";
      // new sorting object
      const newSorting: Sorting = {
        column: accesor,
        // when select new column to sort apply default sortOrder
        // when select the same column change the current order
        isDescending: sorting.column !== accesor ? isDescendingOrder : !sorting.isDescending,
      };

      dispatch({ type: Actions.sortingChanged, payload: newSorting });
      onSortingChanged && onSortingChanged(newSorting);
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
              onChange={(e) => handleToggleSelectAll(e)}
              checked={isSelectAllChecked}
              isPartiallySelected={!allRowsSelected}
            />
          </Cell>
        )}
        {columns.map(
          ({
            accessor,
            cell,
            hidden,
            sortableHeader = true,
            classNames = [],
            sortOrder,
            headerWidth,
          }) =>
            !hidden && (
              <Cell
                as="th"
                key={accessor}
                style={{ width: headerWidth ? `${headerWidth}px` : "auto" }}
                className={`header-cell ${classNames.length > 0 && classNames.join(" ")} ${
                  !sortableHeader && "hidden"
                }`}
                onClick={(): void => {
                  if (sortableHeader) {
                    handleSortingChange(accessor, sortOrder);
                  }
                }}
              >
                <span>{typeof cell === "string" ? cell : cell({ accessor, cell })}</span>
                {sorting?.column === accessor && (
                  <span className="sorting-icon">
                    {!sorting.isDescending ? (
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
