import React, { FC, useEffect, useState } from "react";
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
  disabled = false,
  id,
  onRowSelect,
}) => {
  const { rows, columns, selected, sorting } = state;
  const [columnsSorting, setColumnsSorting] = useState<
    Record<string, { column: string; isDescending: boolean }>
  >({});
  const selectedIds = selected.map((entry) => entry.id);
  const rowIds = rows.map((row) => row.id);
  const isSelectAllChecked = selected.length > 0;
  const allRowsSelected = rowIds.every((rowId) => selectedIds.includes(rowId));
  const hasSorting = Object.keys(sorting || {}).length > 0;

  useEffect(() => {
    const sortingPerColumn = columns.reduce<
      Record<string, { column: string; isDescending: boolean }>
    >((acc, column) => {
      const isDefault = sorting?.column === column.accessor;
      acc[column.accessor] = {
        column: column.accessor,
        isDescending: isDefault ? sorting?.isDescending ?? false : column.sortOrder === "desc",
      };

      return acc;
    }, {});

    setColumnsSorting(sortingPerColumn);
  }, [sorting]);

  const handleToggleSelectAll = (): void => {
    if (disabled) return;
    dispatch({ type: Actions.toggleAll, payload: null });

    const hasSelected = state.selected.length > 0;
    const selectedRowsFromCurrentPage = state.selected.filter((row) => rowIds.includes(row.id));
    const allRowsFromCurrentPage = [...state.rows];
    const newSelected = hasSelected ? selectedRowsFromCurrentPage : allRowsFromCurrentPage;

    const uniqueRowIds = [...new Set(newSelected.map((row) => row.id))];

    uniqueRowIds.forEach((id) => onRowSelect?.(Number(id)));
  };

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
          <Cell as="td" className="selectable-cell">
            <Checkbox
              id={`select-all-${isSelectAllChecked} - ${allRowsSelected} - ${id}`}
              name="select-all"
              aria-label="Select all rows"
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
                as={cell ? "th" : "td"}
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
