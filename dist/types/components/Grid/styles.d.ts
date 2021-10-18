import { SerializedStyles } from "@emotion/react";
declare type GridProp = string | (number | null | undefined)[] | null;
export declare const gridContainer: ({ gap, templateColumns, columnGap, rowGap, }: {
    gap: number;
    templateColumns: GridProp;
    columnGap: number | undefined;
    rowGap: number | undefined;
}) => SerializedStyles;
export declare const gridItem: ({ colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd, }: {
    colSpan: GridProp;
    colStart: GridProp;
    colEnd: GridProp;
    rowSpan: GridProp;
    rowStart: GridProp;
    rowEnd: GridProp;
}) => SerializedStyles;
export {};
