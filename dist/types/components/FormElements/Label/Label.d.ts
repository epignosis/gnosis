import React, { FC } from "react";
export declare type LabelSize = "md" | "lg";
export declare type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    size?: LabelSize;
};
declare const Label: FC<LabelProps>;
export default Label;
