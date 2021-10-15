import React from "react";
import { ExtendableProps } from "types/common";
export declare type SelectProps = ExtendableProps<React.SelectHTMLAttributes<HTMLSelectElement>, {
    status?: "valid" | "error";
    size?: "md" | "lg";
    label?: string;
    inline?: boolean;
    onChange?: (selectedValue: string) => void;
}>;
declare const _default: React.ForwardRefExoticComponent<{
    status?: "valid" | "error" | undefined;
    size?: "md" | "lg" | undefined;
    label?: string | undefined;
    inline?: boolean | undefined;
    onChange?: ((selectedValue: string) => void) | undefined;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "label" | "size" | "inline" | "onChange" | "status"> & React.RefAttributes<HTMLSelectElement>>;
export default _default;
