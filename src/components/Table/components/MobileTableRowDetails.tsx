import React, { FC } from "react";
import classNames from "classnames";
import { Column, Row } from "../types";
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const MobileTableRowDetails: FC<MobileTableRowDetailsProps> = ({
  row,
  isSelected,
  detailsRowId,
  mobileColSpan,
  secondaryColumns,
  onMouseEnter,
  onMouseLeave,
}) => (
  <tr
    id={detailsRowId}
    className={classNames("table-mobile-row-details", rowClassnames(isSelected, false))}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Cell colSpan={mobileColSpan} className="table-mobile-row__cell table-mobile-row-details__cell">
      <div className="table-mobile-row-details__content">
        {secondaryColumns.map((column) => {
          const value = row[column.accessor];

          return (
            <section
              key={`${row.id}-${column.accessor}`}
              className="table-mobile-row-details__section"
            >
              <div className="table-mobile-row-details__label">{getColumnLabel(column)}</div>
              <div className="table-mobile-row-details__value">{renderRowValue(value, row)}</div>
            </section>
          );
        })}
      </div>
    </Cell>
  </tr>
);

export default MobileTableRowDetails;
