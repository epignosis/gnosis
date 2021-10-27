import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Tabs from "./Tabs";
import { screen, render } from "@test-utils/render";

const getTabsProps = () => ({
  tab1Txt: faker.unique(faker.lorem.paragraph),
  tab2Txt: faker.unique(faker.lorem.paragraph),
  tab3Txt: faker.unique(faker.lorem.paragraph),
  tab1TitleTxt: faker.unique(faker.lorem.word),
  tab2TitleTxt: faker.unique(faker.lorem.word),
  tab3TitleTxt: faker.unique(faker.lorem.word),
});

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

  it("matches snapshot", () => {
    const { container } = render(
      <Tabs>
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

  it("renders correctly mobile view", () => {
    const { tab1Txt, tab2Txt, tab3Txt, tab1TitleTxt, tab2TitleTxt, tab3TitleTxt } = getTabsProps();
    const tab1FallbackTitle = faker.lorem.word();

    render(
      <Tabs responsiveHeader>
        <Tabs.TabPane title={<button>{tab1TitleTxt}</button>} fallbackTitle={tab1FallbackTitle}>
          {tab1Txt}
        </Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab3TitleTxt}>{tab3Txt}</Tabs.TabPane>
      </Tabs>,
    );

    const select = screen.getByLabelText("select tab");
    const options = screen.getAllByRole("option");
    const fallbackTitle = screen.getByText(tab1FallbackTitle);

    expect(options).toHaveLength(3);
    expect(fallbackTitle).toHaveTextContent(tab1FallbackTitle);
    expect(select).toHaveValue("0");

    userEvent.selectOptions(select, "1");

    expect(select).toHaveValue("1");
  });
});
