import { FC, ReactNode, CSSProperties } from "react";
declare type TabsContentProps = {
    index: number;
    content: ReactNode;
    isVisible: boolean;
    style?: CSSProperties;
};
declare const TabsContent: FC<TabsContentProps>;
export default TabsContent;
