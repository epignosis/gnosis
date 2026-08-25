import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Tabs, { TabObject } from "./Tabs";
import { screen, render, fireEvent } from "@test-utils/render";

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

  it("still switches tabs on click when onChangeTab is provided but does not update selectedTab", async () => {
    // Regression: consumers (e.g. the stories) pass selectedTab + onChangeTab without wiring the
    // callback back into selectedTab; without the controlled prop they must stay uncontrolled.
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

    render(<Tabs selectedTab={0} onChangeTab={jest.fn()} tabs={tabs} />);

    await userEvent.click(screen.getByText(tab2TitleTxt));

    expect(screen.getByText(tab2Txt)).toBeInTheDocument();
  });

  it("acts as controlled when the controlled prop is set", async () => {
    const mockFn = jest.fn();
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

    const { rerender } = render(
      <Tabs controlled selectedTab={0} onChangeTab={mockFn} tabs={tabs} />,
    );

    await userEvent.click(screen.getByText(tab2TitleTxt));

    // The parent owns the selection: the click only notifies it, content stays on tab 1
    // until the parent updates selectedTab.
    expect(mockFn).toHaveBeenCalledWith(1);
    expect(screen.getByText(tab1Txt)).toBeInTheDocument();
    expect(screen.queryByText(tab2Txt)).not.toBeInTheDocument();

    rerender(<Tabs controlled selectedTab={1} onChangeTab={mockFn} tabs={tabs} />);

    expect(screen.getByText(tab2Txt)).toBeInTheDocument();
  });

  it("moves to the next rendered tab with ArrowRight, skipping tabs without content", () => {
    const { tab1Txt, tab2Txt, tab1TitleTxt, tab2TitleTxt, tab1Id, tab2Id, tab3TitleTxt, tab3Id } =
      getTabsProps();
    // The middle tab has no content, so only tabs 1 and 3 are rendered (indices 0 and 1).
    const tabs: TabObject[] = [
      {
        title: tab1TitleTxt,
        content: tab1Txt,
        id: tab1Id,
      },
      {
        title: tab3TitleTxt,
        content: undefined,
        id: tab3Id,
      },
      {
        title: tab2TitleTxt,
        content: tab2Txt,
        id: tab2Id,
      },
    ];

    render(<Tabs tabs={tabs} />);

    fireEvent.keyDown(screen.getByText(tab1TitleTxt), { key: "ArrowRight" });

    expect(screen.getByText(tab2Txt)).toBeInTheDocument();
  });

  describe("overflow arrows", () => {
    // Make the tab list overflow in jsdom so the arrows render.
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "offsetWidth",
    );
    const originalScrollWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "scrollWidth",
    );

    beforeAll(() => {
      Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        value: 100,
      });
      Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
        configurable: true,
        value: 200,
      });
    });

    afterAll(() => {
      if (originalOffsetWidth) {
        Object.defineProperty(HTMLElement.prototype, "offsetWidth", originalOffsetWidth);
      } else {
        delete (HTMLElement.prototype as { offsetWidth?: number }).offsetWidth;
      }
      if (originalScrollWidth) {
        Object.defineProperty(HTMLElement.prototype, "scrollWidth", originalScrollWidth);
      } else {
        delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth;
      }
    });

    const getOverflowTabs = () => {
      const { tab1Txt, tab2Txt, tab1TitleTxt, tab2TitleTxt, tab1Id, tab2Id, tab3TitleTxt, tab3Id } =
        getTabsProps();
      // A trailing tab without content is not rendered, so tab 2 (index 1) is the last visible.
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
          content: undefined,
          id: tab3Id,
        },
      ];

      return { tabs, tab1Txt, tab2Txt, tab1TitleTxt, tab2TitleTxt };
    };

    it("selects the next tab with content on right arrow click", async () => {
      const { tabs, tab2Txt } = getOverflowTabs();

      render(<Tabs tabs={tabs} />);

      await userEvent.click(screen.getByTestId("right-arrow"));

      expect(screen.getByText(tab2Txt)).toBeInTheDocument();
    });

    it("does not show the right arrow on the last tab with content", async () => {
      const { tabs, tab2TitleTxt } = getOverflowTabs();

      render(<Tabs tabs={tabs} />);

      await userEvent.click(screen.getByText(tab2TitleTxt));

      // Regression: bounds counted the content-less tab, so the arrow rendered here and clicking
      // it emitted an index that no rendered tab or panel has.
      expect(screen.queryByTestId("right-arrow")).not.toBeInTheDocument();
    });
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
