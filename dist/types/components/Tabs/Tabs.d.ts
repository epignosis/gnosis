import { FC } from "react";
declare type TabsProps = {
    stickyHeader?: boolean;
    responsiveHeader?: boolean;
};
declare type TabPaneProps = {
    title: JSX.Element | string;
    fallbackTitle?: string;
};
declare type TabsCompoundProps = {
    TabPane: FC<TabPaneProps>;
};
declare const Tabs: FC<TabsProps> & TabsCompoundProps;
export default Tabs;
