import { FC, ReactNode } from "react";
export declare type DrawerProps = FC<{
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    footer?: ReactNode;
}>;
declare const Drawer: DrawerProps;
export default Drawer;
