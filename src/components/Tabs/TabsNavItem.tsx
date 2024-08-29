import React, { FC, MouseEvent } from "react";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { tabNavItem } from "./styles";

type TabsNavItemProps = {
  index: number;
  title: string | JSX.Element;
  isActive: boolean;
  id?: string;
  onSelectTab: (i: number) => void;
};

const TabsNavItem: FC<TabsNavItemProps> = ({ index, title, isActive, id, onSelectTab }) => {
  const HtmlClasses = classNames({
    "tab-link": true,
    selected: isActive,
  });
  const onClick = (): void => {
    onSelectTab(index);
  };

  return (
    <div
      css={(theme): SerializedStyles => tabNavItem(theme, { isActive })}
      id={id ?? `tab-${index}`}
      data-testid={id ? `${id}-tab` : `tab-${index}`}
      aria-controls={`content-${index}`}
      aria-selected={isActive}
      role="tab"
      className={HtmlClasses}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default TabsNavItem;
