import React from "react";
import { Story } from "@storybook/react";
import { AvatarBaseProps, AvatarProps } from "./Avatar";
declare const _default: {
    component: React.FC<AvatarBaseProps & AvatarProps>;
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
        className: string;
    };
};
export default _default;
export declare const AvatarImage: Story<AvatarBaseProps & AvatarProps>;
export declare const IconAvatar: Story<AvatarBaseProps & AvatarProps>;
export declare const StringAvatar: Story<AvatarBaseProps & AvatarProps>;
