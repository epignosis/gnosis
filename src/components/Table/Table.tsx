import React, { FC, HTMLAttributes, useEffect, useReducer, useState } from "react";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import Result from "../Result/Result";
import { IconChevronDownSVG, IconChevronUpSVG } from "../../icons/index";
import { tableContainer } from "./styles";
import { ExtendableProps } from "types/utils";

export type CellProps = HTMLAttributes<HTMLTableCellElement> & {
  as?: "td" | "th";
  onClick?: () => void;
};

const Cell: FC<CellProps> = ({ children, as = "td", onClick, ...rest }) => {
  const Component = as;

  return (
    <Component onClick={onClick} {...rest}>
      {children}
    </Component>
  );
};

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

export type Column = {
  accessor: string;
  cell: string | ((arg?: unknown) => JSX.Element | null);
  hidden?: boolean;
  classNames?: string[];
  sortableHeader?: boolean;
};

export type Row = {
  id: string | number;
  [key: string]: unknown | ((arg?: unknown) => JSX.Element | string | null);
};

export type EmptyState = {
  title: string;
  info: string;
};

export type Sorting = {
  column: string;
  isDescending: boolean;
};

export type TableState = {
  columns: Column[];
  rows: Row[];
  emptyState: EmptyState;
  selected: Row[];
  selectable: boolean;
  sortable?: boolean;
  sorting?: Sorting;
  onSortingChanged?: (sorting: Sorting) => void;
  handleRowClick?: (row: Row) => void;
};

export type Action =
  | { type: "selectAll" }
  | { type: "removeAll" }
  | { type: "selectRow"; payload: Row }
  | { type: "removeRow"; payload: Row }
  | { type: "sortingChanged"; payload: Sorting }
  | { type: "columnsChanged"; payload: Column[] }
  | { type: "rowsChanged"; payload: Row[] };

export type Dispatch = (action: Action) => void;

const reducer = (state: TableState, action: Action): TableState => {
  switch (action.type) {
    case "selectAll": {
      return { ...state, selected: [...state.rows] };
    }
    case "removeAll": {
      return { ...state, selected: [] };
    }
    case "selectRow": {
      return { ...state, selected: [...state.selected, action.payload] };
    }
    case "removeRow": {
      const rowToRemoveId = action.payload.id;
      const newSelectedRow = state.selected.filter((row) => row?.id !== rowToRemoveId);

      return { ...state, selected: newSelectedRow };
    }
    case "sortingChanged": {
      if (state.sorting && state?.onSortingChanged) {
        state.onSortingChanged(action.payload);
      }

      return { ...state, sorting: action.payload };
    }
    case "columnsChanged": {
      return { ...state, columns: action.payload };
    }
    case "rowsChanged": {
      return { ...state, rows: action.payload };
    }
    default: {
      return state;
    }
  }
};

export type ChildrenProps = { state: TableState; dispatch: Dispatch };

export type TableProps = ExtendableProps<
  HTMLAttributes<HTMLTableElement>,
  {
    columns: Column[];
    rows: Row[];
    emptyState: EmptyState;
    selectable?: boolean;
    sortable?: boolean;
    sorting?: Sorting;
    onSortingChanged?: (sorting: Sorting) => void;
    handleRowClick?: (row: Row) => void;
  }
>;

type TableCompoundProps = {
  Header: FC<ChildrenProps>;
  Body: FC<ChildrenProps>;
};

const Table: FC<TableProps> & TableCompoundProps = (props) => {
  const defaultSorting: Sorting = {
    column: props.sortable ? props.columns[0].accessor : "",
    isDescending: false,
  };
  const {
    columns,
    rows,
    emptyState,
    selectable = false,
    sortable = false,
    sorting = defaultSorting,
    onSortingChanged,
    handleRowClick,
    ...rest
  } = props;
  const [state, dispatch] = useReducer(reducer, {
    columns,
    rows,
    emptyState,
    selected: [],
    selectable,
    sortable,
    sorting,
    onSortingChanged,
    handleRowClick,
  });

  useEffect(() => {
    dispatch({ type: "columnsChanged", payload: columns });
  }, [columns]);

  useEffect(() => {
    dispatch({ type: "rowsChanged", payload: rows });
  }, [rows]);

  return (
    <div css={tableContainer} data-testid="table">
      <table {...rest}>
        <Table.Header state={state} dispatch={dispatch} />
        <Table.Body state={state} dispatch={dispatch} />
      </table>
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
