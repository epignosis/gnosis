import React, { FC, useState, useEffect, useRef } from "react";
import { SerializedStyles } from "@emotion/react";
import { ArrowLeftSVG, ArrowRightSVG } from "../../icons/";
import Button from "../Button/Button";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import { container, tabsHeader } from "./styles";

type TabObject = {
  title: JSX.Element | string;
  content: JSX.Element;
};

type TabsProps = React.HTMLAttributes<HTMLElement> & {
  stickyHeader?: boolean;
  selectedTab?: number;
  onChangeTab?: (index: number) => void;
  tabs: TabObject[];
};

const Tabs: FC<TabsProps> = ({
  tabs,
  stickyHeader = false,
  selectedTab = 0,
  onChangeTab,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const tabsNavEl = useRef<HTMLElement>(null);
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
    if (!isOverflowActive) return false;
    if (!tabs) return false;
    return activeTab < tabs.length - 1;
  };

  const handRightArrowClick = () => {
    if (tabs && activeTab < tabs.length - 1) {
      scrollToTab(activeTab + 1);
      setActiveTab((currentTab) => currentTab + 1);
    }
  };

  useEffect(() => {
    let newSelectedTab = selectedTab;

    if (selectedTab < 0) {
      newSelectedTab = 0;
    }

    if (selectedTab > tabs.length - 1) {
      newSelectedTab = tabs.length - 1;
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
          {tabs.map(({ title }, index) => (
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
        {tabs.map(({ content }, index) => (
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

export default Tabs;
