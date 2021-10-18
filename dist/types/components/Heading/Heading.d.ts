import React, { FC } from "react";
import { TypographyLevels } from "@theme/utils/typography";
export declare type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export declare type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    size?: TypographyLevels;
    as?: HeadingTag;
};
export declare const SIZES: {
    readonly h1: "3xl";
    readonly h2: "2xl";
    readonly h3: "xl";
    readonly h4: "lg";
    readonly h5: "md";
    readonly h6: "sm";
};
declare const Heading: FC<HeadingProps>;
export default Heading;
