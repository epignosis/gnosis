import React, { FC, MouseEvent } from "react";
export declare type Size = "md" | "lg";
export declare type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
    onClose?: (e: MouseEvent) => void;
    size?: Size;
    children: string;
};
declare const Chip: FC<ChipProps>;
export default Chip;
