import React from "react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Tabs from "./Tabs";
import { screen, render } from "@test-utils/render";
import { resizeWindow } from "@test-utils/helpers/windowResize";

const tab1Txt = faker.lorem.paragraph();
const tab2Txt = faker.lorem.paragraph();
const tab3Txt = faker.lorem.paragraph();

const tab1TitleTxt = faker.lorem.word();
const tab2TitleTxt = faker.lorem.word();
const tab3TitleTxt = faker.lorem.word();

const tab1FallbackTitle = faker.lorem.word();

describe("<Tabs/>", () => {
  it("renders correctly", () => {
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

  it("matches snapshot with stickyHeader=`true`", () => {
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

describe("<Tabs/> on mobile", () => {
  it("renders correctly", () => {
    render(
      <Tabs>
        <Tabs.TabPane title={<button>{tab1TitleTxt}</button>} fallbackTitle={tab1FallbackTitle}>
          {tab1Txt}
        </Tabs.TabPane>
        <Tabs.TabPane title={tab2TitleTxt}>{tab2Txt}</Tabs.TabPane>
        <Tabs.TabPane title={tab3TitleTxt}>{tab3Txt}</Tabs.TabPane>
      </Tabs>,
    );

    act(() => {
      resizeWindow(320, 500);
    });

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
