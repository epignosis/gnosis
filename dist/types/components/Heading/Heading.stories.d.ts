import React from "react";
import { Story } from "@storybook/react";
import { HeadingProps } from "./Heading";
declare const _default: {
    title: string;
    component: React.FC<HeadingProps>;
    argTypes: {
        size: {
            control: {
                type: string;
                options: ("sm" | "md" | "lg" | "xl" | "2xl" | "3xl")[];
            };
        };
        as: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        children: string;
    };
};
export default _default;
export declare const H1: Story<HeadingProps>;
export declare const H2: Story<HeadingProps>;
export declare const H3: Story<HeadingProps>;
export declare const H4: Story<HeadingProps>;
export declare const H5: Story<HeadingProps>;
export declare const H6: Story<HeadingProps>;
