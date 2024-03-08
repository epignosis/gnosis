import React, { FC, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { IconChevronDownSVG, IconChevronUpSVG } from "../../../icons/index";
import { Column } from "../types";
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
  state,
  dispatch,
  onSortingChanged,
  disabled,
}) => {
  const { rows, columns, selected, sorting } = state;
  const [columnsSorting, setColumnsSorting] = useState({});
  const selectedIds = selected.map((entry) => entry.id);
  const rowIds = rows.map((row) => row.id);
  const isSelectAllChecked = selected.length > 0;
  const allRowsSelected = rowIds.every((rowId) => selectedIds.includes(rowId));
  const hasSorting = Object.keys(sorting || {}).length > 0;

  useEffect(() => {
    const sortingPerColumn = columns.reduce((acc, column) => {
      const isDefault = sorting?.column === column.accessor;
      acc[column.accessor] = {
        column: column.accessor,
        isDescending: isDefault ? sorting.isDescending : column.sortOrder === "desc",
      };

      return acc;
    }, {});

    setColumnsSorting(sortingPerColumn);
  }, [sorting]);

  const handleToggleSelectAll = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (disabled) return;
      e.preventDefault();
      dispatch({ type: Actions.toggleAll, payload: null });
    },
    [dispatch, disabled],
  );

  const handleSortingChange = (accessor: string, sortOrder: Column["sortOrder"]): void => {
    if (disabled) return;
    if (hasSorting) {
      const isDefaultSort = sorting?.column === accessor;
      const isDescendingOrder = sortOrder === "desc";

      setColumnsSorting({
        ...columnsSorting,
        [accessor]: {
          column: accessor,
          isDescending: isDefaultSort ? !sorting.isDescending : isDescendingOrder,
        },
      });

      // When a new column is clicked to sort, apply the default sortOrder in the columns array.
      // When we select the same column (the default sort column) change it's current order to the opposite.
      const newSorting = {
        column: accessor,
        isDescending: isDefaultSort ? !sorting.isDescending : isDescendingOrder,
      };

      dispatch({ type: Actions.sortingChanged, payload: newSorting });
      onSortingChanged && onSortingChanged(newSorting);
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
              onChange={handleToggleSelectAll}
              checked={isSelectAllChecked}
              isPartiallySelected={!allRowsSelected}
              disabled={disabled}
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
                data-testid={`${accessor}-column`}
                maxWidth={headerWidth}
                className={`header-cell ${classNames.length > 0 && classNames.join(" ")} ${
                  !sortableHeader ? "hidden" : ""
                }`}
                onClick={(): void => {
                  if (!disabled && sortableHeader) {
                    handleSortingChange(accessor, sortOrder);
                  }
                }}
              >
                <span>{typeof cell === "string" ? cell : cell({ accessor, cell })}</span>
                {hasSorting && sortableHeader && (
                  <span
                    className={sortingIconClassNames(accessor === sorting?.column)}
                    data-testid={`${accessor}-sorting`}
                  >
                    {columnsSorting[accessor]?.isDescending ? (
                      <IconChevronDownSVG height={20} />
                    ) : (
                      <IconChevronUpSVG height={20} />
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
