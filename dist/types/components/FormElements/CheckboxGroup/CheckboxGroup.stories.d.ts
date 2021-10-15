import React from "react";
import { Story } from "@storybook/react";
import { CheckboxGroupProps } from "./CheckboxGroup";
declare const _default: {
    title: string;
    component: React.FC<CheckboxGroupProps>;
    args: {
        size: string;
        inline: boolean;
        initialValues: never[];
        groupname: string;
        options: {
            label: string;
            value: string;
            name: string;
        }[];
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        initialValues: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Group: Story<CheckboxGroupProps>;
