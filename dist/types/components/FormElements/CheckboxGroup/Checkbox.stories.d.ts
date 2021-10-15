import React from "react";
import { Story } from "@storybook/react";
import { CheckboxProps } from "./Checkbox";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<import("./Checkbox").CheckboxOption & {
        id: string;
        size?: import("./Checkbox").CheckboxSize | undefined;
        inline?: boolean | undefined;
        containerClassName?: string | undefined;
    } & Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, "size" | "inline" | "id" | keyof import("./Checkbox").CheckboxOption | "containerClassName"> & React.RefAttributes<HTMLDivElement>>;
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        size: string;
        inline: boolean;
        disabled: boolean;
    };
};
export default _default;
export declare const Checkbox: Story<Omit<CheckboxProps, "label" | "value" | "name" | "id">>;
