import React, { FC, useEffect } from "react";
import classNames from "classnames";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { IconChevronDownSVG, IconChevronUpSVG } from "../../../icons/index";
import { Column, Sorting } from "../types";
import { ChildrenProps } from "../Table";
import { Actions } from "../constants";
import Cell from "./Cell";

const rowClassnames = (
  isSelectAllChecked: boolean,
  allRowsSelected: boolean,
  autohide: boolean,
): string =>
  classNames({
    selected: isSelectAllChecked || allRowsSelected,
    "autohide-cell": autohide,
  });

const sortingIconClassNames = (isDefaultSort: boolean): string =>
  classNames("sorting-icon", {
    "is-default-sort": isDefaultSort,
  });

const Header: FC<ChildrenProps> = ({
  selectable = false,
  autohide = false,
  hasSorting = false,
  state,
  dispatch,
  onSortingChanged,
}) => {
  const { rows, columns, selected, sorting } = state;

  const selectedIds = selected.map((entry) => entry.id);
  const rowIds = rows.map((row) => row.id);
  const isSelectAllChecked = selected.length > 0;
  const allRowsSelected = rowIds.every((rowId) => selectedIds.includes(rowId));

  const sortingPerColumn = columns.reduce((acc, column) => {
    acc[column.accessor] = {
      isDescending: column.sortOrder === "desc",
      isDefaultSort: column.isDefaultSort,
    };

    return acc;
  }, {});

  useEffect(() => {
    dispatch({ type: Actions.sortingChanged, payload: sortingPerColumn });
  }, []);

  const handleToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    selected.length === 0
      ? dispatch({ type: Actions.selectAll, payload: null })
      : dispatch({ type: Actions.removeAll, payload: null });
  };

  const handleSortingChange = (accessor: string, sortOrder: Column["sortOrder"]): void => {
    if (hasSorting && sorting) {
      const newSorting = { ...sorting };
      const isDefaultSort = newSorting[accessor].isDefaultSort;

      const newSortingOrder = Object.entries(newSorting).reduce((acc, [key]) => {
        const { isDescending } = newSorting[key];
        acc[key] = {
          isDescending,
          isDefaultSort: false,
        };

        return acc;
      }, {});

      const isDescendingOrder = sortOrder === "desc";
      // When a new column is clicked to sort, apply the default sortOrder in the columns array.
      // When we select the same column (the default sort column) change it's current order to the opposite.
      newSortingOrder[accessor] = {
        column: accessor,
        isDescending: isDefaultSort ? !newSortingOrder[accessor].isDescending : isDescendingOrder,
        isDefaultSort: true,
      };

      dispatch({ type: Actions.sortingChanged, payload: { ...newSortingOrder } });

      onSortingChanged &&
        onSortingChanged({
          ...newSortingOrder[accessor],
        });
    }
  };

  return (
    <thead>
      <tr className={rowClassnames(isSelectAllChecked, allRowsSelected, autohide)}>
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
                  !sortableHeader ? "hidden" : ""
                }`}
                onClick={(): void => {
                  if (sortableHeader) {
                    handleSortingChange(accessor, sortOrder);
                  }
                }}
              >
                <span>{typeof cell === "string" ? cell : cell({ accessor, cell })}</span>
                {hasSorting && sortableHeader && (
                  <span className={sortingIconClassNames(sorting?.[accessor]?.isDefaultSort)}>
                    {sorting && !sorting[accessor]?.isDescending ? (
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
