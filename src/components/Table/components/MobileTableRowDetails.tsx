import React, { FC } from "react";
import classNames from "classnames";
import { CellContext, Column, Row } from "../types";
import { getColumnLabel, renderRowValue } from "../helpers";
import Cell from "./Cell";

const rowClassnames = (isSelected: boolean, callback: boolean): string =>
  classNames({
    selected: isSelected,
    link: callback,
  });

export type MobileTableRowDetailsProps = {
  row: Row;
  isSelected: boolean;
  detailsRowId: string;
  mobileColSpan: number;
  secondaryColumns: Column[];
  cellContext: CellContext;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const MobileTableRowDetails: FC<MobileTableRowDetailsProps> = ({
  row,
  isSelected,
  detailsRowId,
  mobileColSpan,
  secondaryColumns,
  cellContext,
  onMouseEnter,
  onMouseLeave,
}) => (
  <tr
    id={detailsRowId}
    className={classNames("mobile-row-expanded", rowClassnames(isSelected, false))}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Cell colSpan={mobileColSpan} className="mobile-row-cell mobile-details-cell">
      <div className="mobile-expanded-content">
        {secondaryColumns.map((column) => {
          const value = row[column.accessor];

          return (
            <section key={`${row.id}-${column.accessor}`} className="mobile-expanded-section">
              <div className="mobile-expanded-label">{getColumnLabel(column)}</div>
              <div className="mobile-expanded-value">{renderRowValue(value, row, cellContext)}</div>
            </section>
          );
        })}
      </div>
    </Cell>
  </tr>
);

export default MobileTableRowDetails;
