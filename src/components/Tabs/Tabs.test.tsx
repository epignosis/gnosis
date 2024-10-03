import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Tabs, { TabObject } from "./Tabs";
import { screen, render } from "@test-utils/render";

const getTabsProps = () => ({
  tab1Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab2Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab3Txt: faker.helpers.unique(faker.lorem.paragraph),
  tab1TitleTxt: faker.helpers.unique(faker.lorem.word),
  tab2TitleTxt: faker.helpers.unique(faker.lorem.word),
  tab3TitleTxt: faker.helpers.unique(faker.lorem.word),
  tab1Id: faker.helpers.unique(faker.lorem.word),
  tab2Id: faker.helpers.unique(faker.lorem.word),
  tab3Id: faker.helpers.unique(faker.lorem.word),
});

// mock scrollIntoView function in jsdom
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("<Tabs/>", () => {
  it("renders correctly", () => {
    const {
      tab1Txt,
      tab2Txt,
      tab3Txt,
      tab1TitleTxt,
      tab2TitleTxt,
      tab3TitleTxt,
      tab1Id,
      tab2Id,
      tab3Id,
    } = getTabsProps();

    const tabs: TabObject[] = [
      {
        title: tab1TitleTxt,
        content: tab1Txt,
        id: tab1Id,
      },
      {
        title: tab2TitleTxt,
        content: tab2Txt,
        id: tab2Id,
      },
      {
        title: tab3TitleTxt,
        content: tab3Txt,
        id: tab3Id,
      },
    ];

    render(<Tabs tabs={tabs} />);

    const titles = screen.getAllByRole("tab");
    const tab1Content = screen.getByText(tab1Txt);
    const tab1Title = screen.getByText(tab1TitleTxt);

    expect(titles).toHaveLength(3);
    expect(tab1Content).toHaveTextContent(tab1Txt);
    expect(tab1Title).toHaveTextContent(tab1TitleTxt);
  });

  it("changes tabs correctly", async () => {
    const { tab1Txt, tab2Txt, tab1TitleTxt, tab2TitleTxt, tab1Id, tab2Id } = getTabsProps();
    const tabs: TabObject[] = [
      {
        title: tab1TitleTxt,
        content: tab1Txt,
        id: tab1Id,
      },
      {
        title: tab2TitleTxt,
        content: tab2Txt,
        id: tab2Id,
      },
    ];
    render(<Tabs tabs={tabs} />);

    const tab2 = screen.getByText(tab2TitleTxt);

    await userEvent.click(tab2);

    const tab2Content = screen.getByText(tab2Txt);

    expect(tab2Content).toHaveTextContent(tab2Txt);
  });

  it("render with initial tab value", () => {
    const {
      tab1Txt,
      tab2Txt,
      tab3Txt,
      tab1TitleTxt,
      tab2TitleTxt,
      tab3TitleTxt,
      tab1Id,
      tab2Id,
      tab3Id,
    } = getTabsProps();

    const tabs: TabObject[] = [
      {
        title: tab1TitleTxt,
        content: tab1Txt,
        id: tab1Id,
      },
      {
        title: tab2TitleTxt,
        content: tab2Txt,
        id: tab2Id,
      },
      {
        title: tab3TitleTxt,
        content: tab3Txt,
        id: tab3Id,
      },
    ];

    render(<Tabs selectedTab={1} tabs={tabs} />);
    const tab2 = screen.getByText(tab2TitleTxt);
    const tab2Content = screen.getByText(tab2Txt);

    expect(tab2).toHaveClass("selected");
    expect(tab2Content).toHaveTextContent(tab2Txt);
  });

  it("to get tab index with `onChangeTab` callback", async () => {
    const mockFn = jest.fn();
    const {
      tab1Txt,
      tab2Txt,
      tab3Txt,
      tab1TitleTxt,
      tab2TitleTxt,
      tab3TitleTxt,
      tab1Id,
      tab2Id,
      tab3Id,
    } = getTabsProps();

    const tabs: TabObject[] = [
      {
        title: tab1TitleTxt,
        content: tab1Txt,
        id: tab1Id,
      },
      {
        title: tab2TitleTxt,
        content: tab2Txt,
        id: tab2Id,
      },
      {
        title: tab3TitleTxt,
        content: tab3Txt,
        id: tab3Id,
      },
    ];

    render(<Tabs onChangeTab={mockFn} tabs={tabs} />);
    const tab2 = screen.getByText(tab2TitleTxt);
    const tab3 = screen.getByText(tab3TitleTxt);

    await userEvent.click(tab2);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1);

    await userEvent.click(tab3);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith(2);
  });

  it("matches snapshot", () => {
    const tabs = [
      {
        title: "Tab 1",
        content: "Test tab 1",
        id: "my-tab-0",
      },
      {
        title: "Tab 2",
        content: "Test tab 2",
        id: "my-tab-1",
      },
      {
        title: "Tab 3",
        content: "Test tab 3",
        id: "my-tab-2",
      },
    ];

    const { container } = render(<Tabs id="tab-1" className="tabs" tabs={tabs} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with stickyHeader", () => {
    const tabs = [
      {
        title: "Tab 1",
        content: "Test tab 1",
        id: "my-tab-0",
      },
      {
        title: "Tab 2",
        content: "Test tab 2",
        id: "my-tab-1",
      },
      {
        title: "Tab 3",
        content: "Test tab 3",
        id: "my-tab-2",
      },
    ];

    const { container } = render(<Tabs stickyHeader tabs={tabs} />);

    expect(container).toMatchSnapshot();
  });
});
