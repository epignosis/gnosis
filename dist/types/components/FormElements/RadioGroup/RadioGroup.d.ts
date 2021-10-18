import { FC } from "react";
import { InputSize } from "../Input/Input";
import { RadioOption } from "./Radio";
export declare type RadioGroupProps = {
    id: string;
    groupname: string;
    options: RadioOption[];
    onChange?: (selectedValue: string) => void;
    initialValue?: string;
    inline?: boolean;
    size?: InputSize;
    className?: string;
};
declare const RadioGroup: FC<RadioGroupProps>;
export default RadioGroup;
