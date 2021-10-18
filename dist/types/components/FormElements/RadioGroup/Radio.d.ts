import { FC, InputHTMLAttributes } from "react";
import { InputSize } from "../Input/Input";
import { ExtendableProps } from "types/common";
export declare type RadioOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
export declare type RadioProps = ExtendableProps<InputHTMLAttributes<HTMLInputElement>, RadioOption & {
    id: string;
    size?: InputSize;
    inline?: boolean;
}>;
declare const Radio: FC<RadioProps>;
export default Radio;
