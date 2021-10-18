import React from "react";
import { Story } from "@storybook/react";
import { DrawerProps } from "./Drawer";
declare const _default: {
    title: string;
    component: React.FC<DrawerProps> & {
        Header: React.FC<Omit<import("./components/Header").HeaderProps, "onClose"> & {
            closable?: boolean | undefined;
        }>;
        Body: React.FC<{}>;
        Footer: React.FC<{}>;
        Root: React.FC<{}>;
    };
    argTypes: {
        placement: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
    decorators: ((Story: Story<import("@storybook/react").Args>) => JSX.Element)[];
};
export default _default;
declare type DrawerArgs = Pick<DrawerProps, "placement" | "showMask"> & {
    headerCloseBtn: boolean;
};
export declare const Default: Story<DrawerArgs>;
