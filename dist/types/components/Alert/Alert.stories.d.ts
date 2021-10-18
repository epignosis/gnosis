import React from "react";
import { Story } from "@storybook/react";
import { AlertProps } from "./Alert";
declare const _default: {
    component: React.FC<AlertProps>;
    title: string;
    argTypes: {
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
        icon: {
            control: boolean;
        };
    };
    args: {
        type: string;
        children: string;
    };
};
export default _default;
export declare const Default: Story<AlertProps>;
export declare const WithCloseBtn: Story<AlertProps>;
