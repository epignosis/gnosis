import { FC } from "react";
declare type TabsNavItemProps = {
    index: number;
    title: string;
    isActive: boolean;
    onSelectTab: (i: number) => void;
};
declare const TabsNavItem: FC<TabsNavItemProps>;
export default TabsNavItem;
