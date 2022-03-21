import React, { FC, useState, ReactElement, Children } from "react";
import { SerializedStyles } from "@emotion/react";
import Select from "../FormElements/Select/Select";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import { container, tabsHeader } from "./styles";

type TabsProps = React.HTMLAttributes<HTMLElement> & {
  stickyHeader?: boolean;
  responsiveHeader?: boolean;
  initialSelectedTab?: number;
  onChangeTab?: (index: number) => void;
};

type TabPaneProps = {
  title: JSX.Element | string;
  fallbackTitle?: string;
};

const TabPane: FC<TabPaneProps> = () => null;

type TabsCompoundProps = {
  TabPane: FC<TabPaneProps>;
};

const Tabs: FC<TabsProps> & TabsCompoundProps = ({
  children,
  stickyHeader = false,
  responsiveHeader = false,
  initialSelectedTab = 0,
  onChangeTab,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState(initialSelectedTab);
  const tabTitles = Children.map(children, (child, i) => ({
    index: i,
    title: (child as ReactElement).props.title,
    fallbackTitle:
      typeof (child as ReactElement).props.title === "string"
        ? (child as ReactElement).props.title
        : (child as ReactElement).props.fallbackTitle,
  }));
  const tabPanes = Children.map(children, (child, i) => ({
    index: i,
    content: (child as ReactElement).props.children,
  }));
  const onSelectTab = (index: number): void => {
    setActiveTab(index);
    onChangeTab && onChangeTab(index);
  };
  const displayResponsiveHeader = tabTitles?.length && responsiveHeader;

  return (
    <section css={container} {...rest}>
      <nav css={(theme): SerializedStyles => tabsHeader(theme, { stickyHeader })} role="tablist">
        {!displayResponsiveHeader &&
          tabTitles?.map(({ index, title }) => (
            <TabsNavItem
              key={index}
              index={index}
              title={title}
              isActive={activeTab === index}
              onSelectTab={onSelectTab}
            />
          ))}

        {displayResponsiveHeader && (
          <Select aria-label="select tab" onChange={(index): void => onSelectTab(parseInt(index))}>
            {tabTitles?.map(({ index, fallbackTitle }) => (
              <option key={index} value={index}>
                {fallbackTitle}
              </option>
            ))}
          </Select>
        )}
      </nav>

      <section id="content" aria-live="polite" role="region">
        {tabPanes?.length &&
          tabPanes.map(({ index, content }) => (
            <TabsContent
              key={index}
              index={index}
              content={content}
              isVisible={activeTab === index}
            />
          ))}
      </section>
    </section>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
