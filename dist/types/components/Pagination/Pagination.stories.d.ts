import React from "react";
import { Story } from "@storybook/react";
import { PaginationProps } from "./Pagination";
declare const _default: {
    component: React.FC<PaginationProps>;
    title: string;
    argTypes: {
        onChange: {
            action: string;
        };
    };
    args: {
        current: number;
        totalPages: number;
    };
};
export default _default;
export declare const WithNextBtn: Story<PaginationProps>;
export declare const WithBothBtns: Story<PaginationProps>;
export declare const WithPreviousBtn: Story<PaginationProps>;
