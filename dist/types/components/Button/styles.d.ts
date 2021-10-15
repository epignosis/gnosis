import { Theme, SerializedStyles } from "@emotion/react";
import { Color, Size } from "./Button";
declare type ButtonAttrs = {
    color: Color;
    block: boolean;
    size: Size;
    noGutters: boolean;
};
export declare const btnContainer: ({ typeScaleSizes, button }: Theme, { color, size, ...attrs }: ButtonAttrs) => SerializedStyles;
export {};
