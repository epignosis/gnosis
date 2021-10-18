import { FC } from "react";
import { HTMLWrapperElement } from "types/common";
declare type NumberOrNull = number | null;
export declare type ResponsiveValues = [NumberOrNull, NumberOrNull, NumberOrNull?, NumberOrNull?, NumberOrNull?, NumberOrNull?] | number;
export declare type GridProps = {
    templateColumns: ResponsiveValues;
    gap?: number;
    columnGap?: number;
    rowGap?: number;
    as?: HTMLWrapperElement;
    className?: string;
};
declare type GridCompoundProps = {
    Item: FC<GridItemProps>;
};
declare const Grid: FC<GridProps> & GridCompoundProps;
declare type GridItemProps = {
    colSpan?: ResponsiveValues | "auto";
    colStart?: ResponsiveValues | "auto";
    colEnd?: ResponsiveValues | "auto";
    rowSpan?: ResponsiveValues | "auto";
    rowStart?: ResponsiveValues | "auto";
    rowEnd?: ResponsiveValues | "auto";
    as?: HTMLWrapperElement;
    className?: string;
};
export default Grid;
