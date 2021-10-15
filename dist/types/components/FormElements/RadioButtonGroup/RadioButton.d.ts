import { FC, ReactNode } from "react";
import { InputSize } from "../Input/Input";
export declare type RadioButtonProps = {
    index: number;
    label: ReactNode;
    value: string;
};
export declare type UiRadioButtonProps = RadioButtonProps & {
    selectedValue: string;
    onClick: (value: string) => void;
    size: InputSize;
};
declare const RadioButton: FC<UiRadioButtonProps>;
export default RadioButton;
