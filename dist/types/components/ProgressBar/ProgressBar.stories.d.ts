import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { ProgressBarProps } from "./ProgressBar";
declare const _default: {
    component: React.FC<ProgressBarProps>;
    title: string;
    argTypes: {
        percent: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    decorators: ((story: () => ReactNode) => JSX.Element)[];
};
export default _default;
export declare const Default: Story<ProgressBarProps>;
