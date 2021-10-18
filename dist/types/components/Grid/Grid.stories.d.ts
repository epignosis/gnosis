import { Story } from "@storybook/react";
import React from "react";
import { GridProps } from "./Grid";
declare const _default: {
    component: React.FC<GridProps> & {
        Item: React.FC<{
            colSpan?: "auto" | import("./Grid").ResponsiveValues | undefined;
            colStart?: "auto" | import("./Grid").ResponsiveValues | undefined;
            colEnd?: "auto" | import("./Grid").ResponsiveValues | undefined;
            rowSpan?: "auto" | import("./Grid").ResponsiveValues | undefined;
            rowStart?: "auto" | import("./Grid").ResponsiveValues | undefined;
            rowEnd?: "auto" | import("./Grid").ResponsiveValues | undefined;
            as?: import("../../types/common").HTMLWrapperElement | undefined;
            className?: string | undefined;
        }>;
    };
    title: string;
    argTypes: {
        as: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        templateColumns: number[];
        gap: number;
        as: string;
        rowGap: number;
        columnGap: number;
        className: string;
    };
};
export default _default;
export declare const Simple: Story<GridProps>;
export declare const WithCustomGridItems: Story<GridProps>;
