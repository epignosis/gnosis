import React from "react";
import { Story } from "@storybook/react";
import { TextareaProps } from "./Textarea";
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        id: string;
        label?: string | undefined;
        inline?: boolean | undefined;
        resize?: import("./Textarea").TextareaResize | undefined;
        status?: "valid" | "error" | undefined;
    } & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "label" | "resize" | "inline" | "id" | "status"> & React.RefAttributes<HTMLTextAreaElement>>;
    args: {
        label: string;
        id: string;
        inline: boolean;
        placeholder: string;
        resize: string;
        status: string;
    };
    argTypes: {
        resize: {
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
    };
    decorators: ((Story: Story<import("@storybook/react").Args>) => JSX.Element)[];
};
export default _default;
export declare const Textarea: Story<TextareaProps>;
