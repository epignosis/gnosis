import React, { FC, memo } from "react";
import { Column, Row } from "../types";
import Cell from "./Cell";

export type DataCellsProps = {
  windowWidth: number;
  windowHeight: number;
  accessors: string[];
  columns: Column[];
  row: Row;
  handleRowClick: () => void;
};

const DataCells: FC<DataCellsProps> = ({
  accessors,
  row,
  columns,
  windowWidth,
  windowHeight,
  handleRowClick,
}) => {
  return (
    <>
      {accessors.map((accessor) => {
        const rowObj = row[accessor];
        const { maxWidth } = columns.find((column) => column.accessor === accessor) ?? {};

        return (
          <Cell
            key={`entry-${row.id}-${accessor}`}
            maxWidth={maxWidth}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            onClick={handleRowClick}
          >
            {typeof rowObj === "function" ? rowObj(row) : rowObj}
          </Cell>
        );
      })}
      ;
    </>
  );
};

export default memo(DataCells);
