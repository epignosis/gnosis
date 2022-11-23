import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Tabs from "./Tabs";
import { screen, render } from "@test-utils/render";

const getTabsProps = () => ({
  tab1Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab2Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab3Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab1TitleTxt: faker.helpers.unique(faker.lorem.word),
  tab2TitleTxt: faker.helpers.unique(faker.lorem.word),
  tab3TitleTxt: faker.helpers.unique(faker.lorem.word),
});

// mock scrollIntoView function in jsdom
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("<Tabs/>", () => {
  it("renders correctly", () => {
    const { tab1Txt, tab2Txt, tab3Txt, tab1TitleTxt, tab2TitleTxt, tab3TitleTxt } = getTabsProps();
    render(
      <Tabs>
        <Tabs.TabPane title={tab1TitleTxt}>{tab1Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab3TitleTxt}>{tab3Txt}</Tabs.TabPane>
      </Tabs>,
    );

    const titles = screen.getAllByRole("tab");
    const tab1Content = screen.getByText(tab1Txt);
    const tab1Title = screen.getByText(tab1TitleTxt);

    expect(titles).toHaveLength(3);
    expect(tab1Content).toHaveTextContent(tab1Txt);
    expect(tab1Title).toHaveTextContent(tab1TitleTxt);
  });

  it("changes tabs correctly", () => {
    const { tab1Txt, tab2Txt, tab1TitleTxt, tab2TitleTxt } = getTabsProps();

    render(
      <Tabs>
        <Tabs.TabPane title={tab1TitleTxt}>{tab1Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
      </Tabs>,
    );

    const tab2 = screen.getByText(tab2TitleTxt);

    userEvent.click(tab2);

    const tab2Content = screen.getByText(tab2Txt);

    expect(tab2Content).toHaveTextContent(tab2Txt);
  });

  it("render with initial tab value", () => {
    const { tab1Txt, tab2Txt, tab3Txt, tab1TitleTxt, tab2TitleTxt, tab3TitleTxt } = getTabsProps();
    render(
      <Tabs selectedTab={1}>
        <Tabs.TabPane title={tab1TitleTxt}>{tab1Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab3TitleTxt}>{tab3Txt}</Tabs.TabPane>
      </Tabs>,
    );
    const tab2 = screen.getByText(tab2TitleTxt);
    const tab2Content = screen.getByText(tab2Txt);

    expect(tab2).toHaveClass("selected");
    expect(tab2Content).toHaveTextContent(tab2Txt);
  });

  it("to get tab index with `onChangeTab` callback", () => {
    const mockFn = jest.fn();
    const { tab1Txt, tab2Txt, tab3Txt, tab1TitleTxt, tab2TitleTxt, tab3TitleTxt } = getTabsProps();
    render(
      <Tabs onChangeTab={mockFn}>
        <Tabs.TabPane title={tab1TitleTxt}>{tab1Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab3TitleTxt}>{tab3Txt}</Tabs.TabPane>
      </Tabs>,
    );
    const tab2 = screen.getByText(tab2TitleTxt);
    const tab3 = screen.getByText(tab3TitleTxt);

    userEvent.click(tab2);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1);

    userEvent.click(tab3);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith(2);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Tabs id="tab-1" className="tabs">
        <Tabs.TabPane title="Tab 1">Test tab 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">Test tab 2</Tabs.TabPane>
        <Tabs.TabPane title="Tab 3">Test tab 3</Tabs.TabPane>
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with stickyHeader", () => {
    const { container } = render(
      <Tabs stickyHeader>
        <Tabs.TabPane title="Tab 1">Test tab 1</Tabs.TabPane>
        <Tabs.TabPane title="Tab 2">Test tab 2</Tabs.TabPane>
        <Tabs.TabPane title="Tab 3">Test tab 3</Tabs.TabPane>
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
  });
});
