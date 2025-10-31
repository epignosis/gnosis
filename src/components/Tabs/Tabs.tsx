import React, { FC, useState, useEffect, useRef } from "react";
import { SerializedStyles } from "@emotion/react";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import Button from "../Button/Button";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import { container, tabsHeader } from "./styles";

export type TabObject = {
  title: JSX.Element | string;
  id?: string;
  content?: JSX.Element | string;
};

type TabsProps = React.HTMLAttributes<HTMLElement> & {
  stickyHeader?: boolean;
  selectedTab?: number;
  onChangeTab?: (index: number) => void;
  tabs: TabObject[];
  inlineEndComponent?: JSX.Element;
  testIds?: {
    nav?: string;
    content?: string;
  };
};

const Tabs: FC<TabsProps> = ({
  tabs = [],
  stickyHeader = false,
  selectedTab = 0,
  onChangeTab,
  inlineEndComponent,
  testIds,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const tabsLength = tabs.length - 1;
  const tabsNavEl = useRef<HTMLDivElement>(null);
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const dir = document.dir;

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
    if (!isOverflowActive || !tabs.length) return false;
    return activeTab < tabsLength;
  };

  const handRightArrowClick = () => {
    if (tabs.length && activeTab < tabsLength) {
      scrollToTab(activeTab + 1);
      setActiveTab((currentTab) => currentTab + 1);
    }
  };

  useEffect(() => {
    let newSelectedTab = selectedTab;

    if (selectedTab < 0) {
      newSelectedTab = 0;
    }

    if (selectedTab > tabsLength) {
      newSelectedTab = tabsLength;
    }

    setActiveTab(newSelectedTab);
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

  //TODO: find a way to perform scrolling to tab
  const scrollToTab = (tabIndex: number) => {
    const tabOffset = document.querySelector(`#tab-${tabIndex}`)?.getBoundingClientRect().x;

    const tablist = document.getElementsByTagName("nav")[0];
    tabOffset && tablist.scrollTo(tabOffset > 0 ? tabOffset - 16 : 0, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "ArrowRight" && index < tabsLength) {
      // If next tab is undefined, do nothing
      if (tabs[index + 1].content) {
        onSelectTab(index + 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      // If prev tab is undefined, do nothing
      if (tabs[index - 1].content) {
        onSelectTab(index - 1);
      }
    }
  };

  return (
    <section css={container} {...rest}>
      <div className="nav-wrapper" role="navigation" tabIndex={0}>
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
          {...(testIds?.nav && { "data-testid": testIds.nav })}
        >
          {tabs
            .filter((tab) => tab.content)
            .map(({ title, id }, index) => (
              <TabsNavItem
                id={id}
                key={index}
                index={index}
                title={title}
                isActive={activeTab === index}
                onSelectTab={onSelectTab}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          {inlineEndComponent && <div className="inline-end-component">{inlineEndComponent}</div>}
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

      <div
        id="content"
        aria-live="polite"
        role="region"
        {...(testIds?.content && { "data-testid": testIds.content })}
      >
        {tabs
          .filter((tab) => tab.content)
          .map(({ content }, index) => (
            <TabsContent
              key={index}
              index={index}
              content={content}
              isVisible={activeTab === index}
            />
          ))}
      </div>
    </section>
  );
};

export default Tabs;
