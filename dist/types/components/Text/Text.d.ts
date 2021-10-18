import React, { FC } from "react";
import { TypographyLevels } from "@theme/utils/typography";
export declare type TextWeight = "400" | "700";
declare type BaseProps = ({
    as?: "div";
} & React.HTMLAttributes<HTMLDivElement>) | ({
    as?: "span";
} & React.HTMLAttributes<HTMLSpanElement>) | ({
    as?: "p";
} & React.HTMLAttributes<HTMLParagraphElement>);
export declare type TextProps = BaseProps & {
    fontSize: TypographyLevels;
    weight?: TextWeight;
    className?: string;
};
declare const Text: FC<TextProps>;
export default Text;
