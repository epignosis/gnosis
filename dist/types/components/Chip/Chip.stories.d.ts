import React from "react";
import { Story } from "@storybook/react";
import { ChipProps } from "./Chip";
declare const _default: {
    component: React.FC<ChipProps>;
    title: string;
    argTypes: {
        onClose: {
            action: string;
        };
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Default: Story<ChipProps>;
