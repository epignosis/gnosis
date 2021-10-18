import { FC } from "react";
export declare type Size = "md" | "lg";
export declare type ProgressBarProps = {
    percent: number;
    size?: Size;
    rounded?: boolean;
};
declare const ProgressBar: FC<ProgressBarProps>;
export default ProgressBar;
