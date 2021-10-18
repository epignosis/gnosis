import React from "react";
import { ExtendableProps } from "types/common";
export declare type CheckboxOption = {
    value: string;
    label: string;
    name: string;
    disabled?: boolean;
};
export declare type CheckboxSize = "md" | "lg";
export declare type CheckboxProps = ExtendableProps<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, CheckboxOption & {
    id: string;
    size?: CheckboxSize;
    inline?: boolean;
    containerClassName?: string;
}>;
declare const _default: React.ForwardRefExoticComponent<CheckboxOption & {
    id: string;
    size?: CheckboxSize | undefined;
    inline?: boolean | undefined;
    containerClassName?: string | undefined;
} & Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">, "size" | "inline" | "id" | keyof CheckboxOption | "containerClassName"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
