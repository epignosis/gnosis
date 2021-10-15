import React from "react";
import { Story } from "@storybook/react";
import { LabelProps } from "./Label";
declare const _default: {
    title: string;
    component: React.FC<LabelProps>;
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Label: Story<LabelProps>;
