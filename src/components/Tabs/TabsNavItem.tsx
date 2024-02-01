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
  const onClick = (e: MouseEvent): void => {
    e.preventDefault();
    onSelectTab(index);
  };

  return (
    <a
      css={(theme): SerializedStyles => tabNavItem(theme, { isActive })}
      href={`#tab-${index}`}
      id={id ?? `tab-${index}`}
      data-testid={id ? `${id}-tab` : `tab-${index}`}
      aria-controls={`content-${index}`}
      role="tab"
      className={HtmlClasses}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default TabsNavItem;
