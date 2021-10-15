import { FC } from "react";
import { InputSize } from "../Input/Input";
import { CheckboxOption } from "./Checkbox";
export declare type CheckboxGroupProps = {
    groupname: string;
    options: CheckboxOption[];
    onChange?: (selectedValues: string[]) => void;
    initialValues?: string[];
    inline?: boolean;
    size?: InputSize;
    id: string;
    className?: string;
};
declare const CheckboxGroup: FC<CheckboxGroupProps>;
export default CheckboxGroup;
