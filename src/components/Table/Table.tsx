/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode, useMemo } from "react";
import { useTable, useSortBy, Column } from "react-table";
import { tableContainer } from "./styles";

export type TableProps = {
  columns: (Column & { disableSortBy?: boolean })[];
  data: unknown[];
  footer?: ReactNode;
};

const Table: FC<TableProps> = ({ columns, data, footer }) => {
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedData = useMemo(() => data, [data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns: memoizedColumns,
      data: memoizedData as any,
    },
    useSortBy,
  );

  return (
    <div css={tableContainer}>
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()} data-testid="body-row">
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Table;
