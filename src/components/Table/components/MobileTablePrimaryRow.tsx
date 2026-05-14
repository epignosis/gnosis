import React, { FC, MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import { ChevronArrowRightSVG } from "../../../icons";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { Row } from "../types";
import { renderRowValue } from "../helpers";
import Cell from "./Cell";

const rowClassnames = (isSelected: boolean, callback: boolean): string =>
  classNames({
    selected: isSelected,
    link: callback,
  });

const checkboxWrapperClassnames = (): string => classNames("selectable-cell");

export type MobileTablePrimaryRowProps = {
  rowId: string;
  row: Row;
  isSelected: boolean;
  isExpanded: boolean;
  selectable: boolean;
  disabled?: boolean;
  mobileColSpan: number;
  isRowClickable: boolean;
  primaryCellId: string;
  detailsRowId: string;
  hasSecondaryColumns: boolean;
  primaryValue: unknown;
  onRowSelection: () => void;
  onRowClick: () => void;
  onExpandToggle: (e: MouseEvent<HTMLButtonElement>) => void;
  onControlClick: (e: MouseEvent<HTMLElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  renderMobileRightActions?: (row: Row) => ReactNode;
};

const MobileTablePrimaryRow: FC<MobileTablePrimaryRowProps> = ({
  rowId,
  row,
  isSelected,
  isExpanded,
  selectable,
  disabled,
  mobileColSpan,
  isRowClickable,
  primaryCellId,
  detailsRowId,
  hasSecondaryColumns,
  primaryValue,
  onRowSelection,
  onRowClick,
  onExpandToggle,
  onControlClick,
  onMouseEnter,
  onMouseLeave,
  renderMobileRightActions,
}) => (
  <tr
    key={`entry-${row.id}-summary`}
    className={classNames("table-mobile-row", rowClassnames(isSelected, isRowClickable), {
      "table-mobile-row--expanded": isExpanded,
    })}
    onClick={onRowClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Cell colSpan={mobileColSpan} className="table-mobile-row__cell">
      <div
        className={classNames("table-mobile-row__content", {
          "table-mobile-row__content--padded": !hasSecondaryColumns,
        })}
      >
        <div className="table-mobile-row__main">
          {selectable && (
            <div className={checkboxWrapperClassnames()} onClick={onControlClick}>
              <Checkbox
                id={rowId}
                key={rowId}
                name={rowId}
                value={rowId}
                checked={isSelected}
                onChange={onRowSelection}
                disabled={disabled}
                aria-labelledby={primaryCellId}
              />
            </div>
          )}
          {hasSecondaryColumns && (
            <button
              type="button"
              className="table-mobile-row__toggle"
              onClick={onExpandToggle}
              aria-expanded={isExpanded}
              aria-controls={detailsRowId}
              aria-label={isExpanded ? "Collapse row details" : "Expand row details"}
              disabled={disabled}
            >
              <ChevronArrowRightSVG width={32} className="table-mobile-row__toggle-icon" />
            </button>
          )}
          <div id={primaryCellId} className="table-mobile-row__primary">
            <div
              className={classNames("table-mobile-row__primary-value", {
                "table-mobile-row__primary-value--expanded": isExpanded,
              })}
            >
              {renderRowValue(primaryValue, row)}
            </div>
          </div>

          {renderMobileRightActions && (
            <div className="table-mobile-row__actions">{renderMobileRightActions(row)}</div>
          )}
        </div>
      </div>
    </Cell>
  </tr>
);

export default MobileTablePrimaryRow;
