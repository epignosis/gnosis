import React, { FC } from "react";
export declare type Size = "md";
export declare type Offset = {
    top: string;
    right: string;
};
export declare type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: Size;
    offset?: Offset;
};
declare const Badge: FC<BadgeProps>;
export default Badge;
