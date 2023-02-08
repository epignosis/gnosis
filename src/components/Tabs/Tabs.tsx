import React, { FC, useState, ReactElement, Children, useEffect, useRef } from "react";
import { SerializedStyles } from "@emotion/react";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import Button from "../Button/Button";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import { container, tabsHeader } from "./styles";

type TabsProps = React.HTMLAttributes<HTMLElement> & {
  stickyHeader?: boolean;
  selectedTab?: number;
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

//TODO: find a way to perform scrolling to tab
const scrollToTab = (tabIndex: number) => {
  const tabOffset = document.querySelector(`#tab-${tabIndex}`)?.getBoundingClientRect().x;

  const tablist = document.getElementsByTagName("nav")[0];
  tabOffset && tablist.scrollTo(tabOffset > 0 ? tabOffset - 16 : 0, 0);
};

const Tabs: FC<TabsProps> & TabsCompoundProps = ({
  children,
  stickyHeader = false,
  selectedTab = 0,
  onChangeTab,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const tabsNavEl = useRef<HTMLElement>(null);
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const dir = document.dir;
  const arrayChildren = Children.toArray(children);

  const tabTitles = Children.map(arrayChildren, (child, i) => ({
    index: i,
    title: (child as ReactElement).props.title,
    fallbackTitle:
      typeof (child as ReactElement).props.title === "string"
        ? (child as ReactElement).props.title
        : (child as ReactElement).props.fallbackTitle,
  }));

  const tabPanes = Children.map(arrayChildren, (child, i) => ({
    index: i,
    content: (child as ReactElement).props.children,
  }));

  const onSelectTab = (index: number): void => {
    scrollToTab(index);
    setActiveTab(index);
    onChangeTab && onChangeTab(index);
  };

  const showLeftArrow = () => {
    if (!isOverflowActive) return false;
    return activeTab > 0;
  };

  const handLeftArrowClick = () => {
    if (activeTab > 0) {
      scrollToTab(activeTab - 1);
      setActiveTab((currentTab) => currentTab - 1);
    }
  };

  const showRightArrow = () => {
    if (!isOverflowActive) return false;
    if (!tabTitles) return false;
    return activeTab < tabTitles.length - 1;
  };

  const handRightArrowClick = () => {
    if (tabTitles && activeTab < tabTitles.length - 1) {
      scrollToTab(activeTab + 1);
      setActiveTab((currentTab) => currentTab + 1);
    }
  };

  useEffect(() => {
    if (tabTitles) {
      let newSelectedTab = selectedTab;

      if (selectedTab < 0) {
        newSelectedTab = 0;
      }

      if (selectedTab > tabTitles.length - 1) {
        newSelectedTab = tabTitles.length - 1;
      }

      setActiveTab(newSelectedTab);
    }
  }, [selectedTab]);

  useEffect(() => {
    toggleTabsArrow();
  }, [tabsNavEl]);

  const toggleTabsArrow = () => {
    const el = tabsNavEl.current;
    if (el) {
      setIsOverflowActive(el.offsetWidth < el.scrollWidth);
    }
  };

  // add listener on window resize to toggle tabs arrow visibility
  useEffect(() => {
    window.addEventListener("resize", toggleTabsArrow);

    return () => {
      window.removeEventListener("resize", toggleTabsArrow);
    };
  }, []);

  return (
    <section css={container} {...rest}>
      <div className="nav-wrapper">
        {showLeftArrow() && (
          <Button
            data-testid="left-arrow"
            variant="link"
            color="secondary"
            noGutters
            onClick={handLeftArrowClick}
          >
            {dir === "rtl" ? <ArrowRightSVG height={22} /> : <ArrowLeftSVG height={22} />}
          </Button>
        )}

        <nav
          css={(theme): SerializedStyles => tabsHeader(theme, { stickyHeader })}
          role="tablist"
          ref={tabsNavEl}
        >
          {tabTitles?.map(({ index, title }) => (
            <TabsNavItem
              key={index}
              index={index}
              title={title}
              isActive={activeTab === index}
              onSelectTab={onSelectTab}
            />
          ))}
        </nav>

        {showRightArrow() && (
          <Button
            data-testid="right-arrow"
            variant="link"
            color="secondary"
            noGutters
            onClick={handRightArrowClick}
          >
            {dir === "rtl" ? <ArrowLeftSVG height={22} /> : <ArrowRightSVG height={22} />}
          </Button>
        )}
      </div>

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
