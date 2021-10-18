import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { TooltipProps } from "./Tooltip";
declare const _default: {
    component: React.FC<TooltipProps>;
    title: string;
    argTypes: {
        placement: {
            control: {
                type: string;
                options: string[];
            };
        };
        as: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    decorators: ((story: () => ReactNode) => JSX.Element)[];
};
export default _default;
export declare const Default: Story<TooltipProps>;
