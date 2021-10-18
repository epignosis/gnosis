import { FC } from "react";
import { HTMLMotionProps } from "framer-motion";
import { NavItemProps } from "./NavItem";
export declare type SidebarProps = HTMLMotionProps<"nav"> & {
    isCollapsed?: boolean;
    onToggle?: () => void;
};
declare type SidebarCompoundProps = {
    Item: NavItemProps;
};
declare const Sidebar: FC<SidebarProps> & SidebarCompoundProps;
export default Sidebar;
