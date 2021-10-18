import { FC } from "react";
import { MotionStyle } from "framer-motion";
import { HeaderProps } from "./components/Header";
export declare type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    showMask?: boolean;
    placement?: "left" | "right";
    width?: string;
    dialogStyles?: MotionStyle;
    dialogClassName?: string;
};
declare type DrawerCompoundProps = {
    Header: FC<Omit<HeaderProps, "onClose"> & {
        closable?: boolean;
    }>;
    Body: FC;
    Footer: FC;
    Root: FC;
};
declare const Drawer: FC<DrawerProps> & DrawerCompoundProps;
export default Drawer;
