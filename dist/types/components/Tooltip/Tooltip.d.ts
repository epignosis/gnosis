import { FC } from "react";
import { TippyProps } from "@tippyjs/react/headless";
export declare type TooltipProps = TippyProps & {
    as?: "div" | "span";
    content: TippyProps["content"];
};
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
