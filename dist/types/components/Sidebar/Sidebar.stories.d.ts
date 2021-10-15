import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { SidebarProps } from "./Sidebar";
declare const _default: {
    component: React.FC<SidebarProps> & {
        Item: import("./NavItem").NavItemProps;
    };
    title: string;
    decorators: ((story: () => ReactNode) => JSX.Element)[];
    argTypes: {
        onToggle: {
            action: string;
        };
    };
    args: {
        isCollapsed: boolean;
        style: {
            zIndex: number;
            overflow: string;
        };
    };
};
export default _default;
export declare const Sidebar: Story<SidebarProps>;
