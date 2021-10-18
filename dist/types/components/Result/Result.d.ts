import { FC, ReactNode } from "react";
import { IconType } from "types/common";
export declare type Size = "md" | "lg";
export declare type ResultProps = {
    icon?: IconType;
    title: string;
    info?: string;
    size?: Size;
    footer?: ReactNode;
};
declare const Result: FC<ResultProps>;
export default Result;
