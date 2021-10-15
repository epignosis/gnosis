import { FC } from "react";
import { RadioButtonProps } from "./RadioButton";
export declare type RadioGroupOption = Pick<RadioButtonProps, "label" | "value">;
export declare type RadioGroupProps = {
    id: string;
    options: RadioGroupOption[];
    value: string;
    size?: "md" | "lg";
    className?: string;
    onChange: (selectedValue: string) => void;
};
declare const RadioButtonGroup: FC<RadioGroupProps>;
export default RadioButtonGroup;
