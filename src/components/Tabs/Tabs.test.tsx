import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Tabs from "./Tabs";
import { screen, render } from "@test-utils/render";

describe("<Tabs/>", () => {
  const tab1Txt = faker.lorem.paragraph();
  const tab2Txt = faker.lorem.paragraph();
  const tab3Txt = faker.lorem.paragraph();

  const tab1TitleTxt = faker.lorem.word();
  const tab2TitleTxt = faker.lorem.word();
  const tab3TitleTxt = faker.lorem.word();

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
});
