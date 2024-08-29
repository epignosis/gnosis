import React, { FC, ReactNode, CSSProperties } from "react";

type TabsContentProps = {
  index: number;
  content: ReactNode;
  isVisible: boolean;
  style?: CSSProperties;
};

const TabsContent: FC<TabsContentProps> = ({ index, content, isVisible, style }) => {
  return isVisible ? (
    <div id={`content-${index}`} role="tabpanel" style={style} aria-hidden={!isVisible}>
      {content}
    </div>
  ) : null;
};

export default TabsContent;
