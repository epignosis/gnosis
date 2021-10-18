import React from "react";
import { Story } from "@storybook/react";
import { RadioGroupProps } from "./RadioGroup";
declare const _default: {
    title: string;
    component: React.FC<RadioGroupProps>;
    args: {
        size: string;
        inline: boolean;
        initialValue: string;
        groupname: string;
        id: string;
        className: string;
        options: ({
            label: string;
            value: string;
            disabled?: undefined;
        } | {
            label: string;
            value: string;
            disabled: boolean;
        })[];
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        initialValue: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const RadioGroup: Story<RadioGroupProps>;
