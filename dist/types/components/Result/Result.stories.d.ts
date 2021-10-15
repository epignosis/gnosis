import React from "react";
import { Story } from "@storybook/react";
import { ResultProps } from "./Result";
declare const _default: {
    title: string;
    component: React.FC<ResultProps>;
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
export declare const Default: Story<ResultProps>;
export declare const WithFooter: Story<ResultProps>;
