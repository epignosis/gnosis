import React from "react";
import { Story } from "@storybook/react";
import { RadioGroupProps } from "./RadioButtonGroup";
declare const _default: {
    title: string;
    component: React.FC<RadioGroupProps>;
    args: {
        id: string;
        size: string;
        className: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const RadioButtonGroup: Story<RadioGroupProps>;
