import { Story } from "@storybook/react";
import { Props } from "./Button";
declare const _default: {
    title: string;
    argTypes: {
        onClick: {
            action: string;
        };
        color: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    args: {
        disabled: boolean;
        isLoading: boolean;
        block: boolean;
        noGutters: boolean;
        rounded: boolean;
        as: string;
    };
};
export default _default;
export declare const Primary: Story<Props>;
export declare const Secondary: Story<Props>;
export declare const Danger: Story<Props>;
export declare const Success: Story<Props>;
export declare const WithIconBefore: Story<Props>;
export declare const WithIconAfter: Story<Props>;
