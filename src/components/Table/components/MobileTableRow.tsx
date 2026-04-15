import React, { FC, memo, MouseEvent, ReactNode, useMemo } from "react";
import classNames from "classnames";
import { ChevronArrowRightSVG } from "../../../icons";
import { Column, Row } from "../types";
import Checkbox from "../../FormElements/CheckboxGroup/Checkbox";
import { getColumnLabel, getDefaultAccessor, getVisibleColumns, renderRowValue } from "../helpers";
import Cell from "./Cell";

const rowClassnames = (isSelected: boolean, callback: boolean): string =>
  classNames({
    selected: isSelected,
    link: callback,
  });

const checkboxWrapperClassnames = (): string => classNames("selectable-cell");

export type MobileTableRowProps = {
  rowId: string;
  row: Row;
  columns: Column[];
  isSelected: boolean;
  isExpanded: boolean;
  selectable: boolean;
  disabled?: boolean;
  onRowSelection: () => void;
  onExpandToggle: () => void;
  onHoveredRowChange: (row: Row | null) => void;
  renderMobileRightActions?: (row: Row) => ReactNode;
};

const MobileTableRow: FC<MobileTableRowProps> = ({
  rowId,
  row,
  columns,
  isSelected,
  isExpanded,
  selectable,
  disabled = false,
  onRowSelection,
  onExpandToggle,
  onHoveredRowChange,
  renderMobileRightActions,
}) => {
  const visibleColumns = getVisibleColumns(columns);
  const defaultAccessor = getDefaultAccessor(columns);

  const primaryCellId = `entry-${row.id}-${defaultAccessor}`;
  const detailsRowId = `entry-${row.id}-details`;
  const mobileColSpan = visibleColumns.length + (selectable ? 1 : 0);
  const cellContext = { isExpanded };

  const secondaryColumns = useMemo(
    () => visibleColumns.filter((column) => column.accessor !== defaultAccessor),
    [defaultAccessor, visibleColumns],
  );
  const hasSecondaryColumns = secondaryColumns.length > 0;

  const primaryValue = defaultAccessor ? row[defaultAccessor] : null;
  const isRowClickable = hasSecondaryColumns && !disabled;

  const handleMobileRowClick = (): void => {
    if (!isRowClickable) return;
    onExpandToggle();
  };

  const handleExpandToggle = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (!isRowClickable) return;
    onExpandToggle();
  };

  const handleControlClick = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <>
      <tr
        key={`entry-${row.id}-summary`}
        className={classNames("mobile-row", rowClassnames(isSelected, isRowClickable), {
          expanded: isExpanded,
        })}
        onClick={handleMobileRowClick}
        onMouseEnter={(): void => {
          !disabled && onHoveredRowChange(row);
        }}
        onMouseLeave={(): void => {
          !disabled && onHoveredRowChange(null);
        }}
      >
        <Cell colSpan={mobileColSpan} className="mobile-row-cell">
          <div
            className={classNames("mobile-row-content", { "has-padding": !hasSecondaryColumns })}
          >
            <div className="mobile-row-main">
              {selectable && (
                <div className={checkboxWrapperClassnames()} onClick={handleControlClick}>
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
                  className={"mobile-expand-toggle"}
                  onClick={handleExpandToggle}
                  aria-expanded={isExpanded}
                  aria-controls={detailsRowId}
                  aria-label={isExpanded ? "Collapse row details" : "Expand row details"}
                  disabled={disabled}
                >
                  <ChevronArrowRightSVG width={32} className="mobile-expand-icon" />
                </button>
              )}
              <div id={primaryCellId} className="mobile-primary">
                <div className={classNames("mobile-primary-value", { expanded: isExpanded })}>
                  {renderRowValue(primaryValue, row, cellContext)}
                </div>
              </div>

              {renderMobileRightActions && (
                <div className="mobile-actions">{renderMobileRightActions(row)}</div>
              )}
            </div>
          </div>
        </Cell>
      </tr>
      {isExpanded && hasSecondaryColumns && (
        <tr
          id={detailsRowId}
          className={classNames("mobile-row-expanded", rowClassnames(isSelected, false))}
          onMouseEnter={(): void => {
            !disabled && onHoveredRowChange(row);
          }}
          onMouseLeave={(): void => {
            !disabled && onHoveredRowChange(null);
          }}
        >
          <Cell colSpan={mobileColSpan} className="mobile-row-cell mobile-details-cell">
            <div className="mobile-expanded-content">
              {secondaryColumns.map((column) => {
                const value = row[column.accessor];

                return (
                  <section key={`${row.id}-${column.accessor}`} className="mobile-expanded-section">
                    <div className="mobile-expanded-label">{getColumnLabel(column)}</div>
                    <div className="mobile-expanded-value">
                      {renderRowValue(value, row, cellContext)}
                    </div>
                  </section>
                );
              })}
            </div>
          </Cell>
        </tr>
      )}
    </>
  );
};

export default memo(MobileTableRow);
