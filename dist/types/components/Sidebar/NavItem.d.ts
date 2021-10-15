import { FC, ReactNode } from "react";
export declare type NavItemProps = FC<{
    isExpanded: boolean;
    icon: ReactNode;
    label: string;
    isActive?: boolean;
}>;
declare const NavItem: NavItemProps;
export default NavItem;
