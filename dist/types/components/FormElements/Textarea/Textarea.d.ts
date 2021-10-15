import React, { InputHTMLAttributes } from "react";
import { ExtendableProps } from "types/common";
export declare type TextareaResize = "none" | "horizontal" | "vertical" | "both";
export declare type TextareaProps = ExtendableProps<InputHTMLAttributes<HTMLTextAreaElement>, {
    id: string;
    label?: string;
    inline?: boolean;
    resize?: TextareaResize;
    status?: "valid" | "error";
}>;
declare const _default: React.ForwardRefExoticComponent<{
    id: string;
    label?: string | undefined;
    inline?: boolean | undefined;
    resize?: TextareaResize | undefined;
    status?: "valid" | "error" | undefined;
} & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "label" | "resize" | "inline" | "id" | "status"> & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
