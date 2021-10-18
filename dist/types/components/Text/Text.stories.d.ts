import React from "react";
import { Story } from "@storybook/react";
import { TextProps } from "./Text";
declare const _default: {
    component: React.FC<TextProps>;
    title: string;
    argTypes: {
        weight: {
            control: {
                type: string;
                options: string[];
            };
        };
        fontSize: {
            control: {
                type: string;
                options: string[];
            };
        };
        as: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Default: Story<TextProps>;
