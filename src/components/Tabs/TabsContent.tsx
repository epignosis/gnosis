import React, { FC, ReactNode, CSSProperties } from "react";
import { tabsContent } from "./styles";

type TabsContentProps = {
  index: number;
  content: ReactNode;
  isVisible: boolean;
  style?: CSSProperties;
};

const TabsContent: FC<TabsContentProps> = ({ index, content, isVisible, style }) => {
  return (
    <article id={`content-${index}`} css={tabsContent(isVisible)} role="tabpanel" style={style}>
      {content}
    </article>
  );
};

export default TabsContent;
