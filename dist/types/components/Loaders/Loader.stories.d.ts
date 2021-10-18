import React from "react";
import { Story } from "@storybook/react";
import { LoaderProps } from "./Loader";
declare const _default: {
    component: React.FC<LoaderProps>;
    title: string;
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        size: string;
        fullScreen: boolean;
    };
};
export default _default;
export declare const Deafult: Story<LoaderProps>;
