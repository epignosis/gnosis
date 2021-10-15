import React from "react";
import { Story } from "@storybook/react";
import { SelectProps } from "./Select";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        status?: "valid" | "error" | undefined;
        size?: "md" | "lg" | undefined;
        label?: string | undefined;
        inline?: boolean | undefined;
        onChange?: ((selectedValue: string) => void) | undefined;
    } & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "label" | "size" | "inline" | "onChange" | "status"> & React.RefAttributes<HTMLSelectElement>>;
    args: {
        size: string;
        label: string;
        inline: boolean;
        id: string;
        className: string;
        status: string;
    };
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        status: {
            control: {
                type: string;
                options: string[];
            };
        };
        onChange: {
            action: string;
        };
    };
    decorators: ((Story: Story<import("@storybook/react").Args>) => JSX.Element)[];
};
export default _default;
export declare const Select: Story<SelectProps>;
