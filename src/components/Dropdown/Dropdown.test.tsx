import React from "react";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./types";
import { fireEvent, render, screen } from "@test-utils/render";

describe("<Dropdown />", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  it("opens the dropdown and matches snapshot", () => {
    const { getByText, container } = render(
      <Dropdown list={mockList}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    expect(container).toMatchSnapshot();
  });

  it("calls onListItemSelect when an item is clicked", () => {
    const mockOnListItemSelect = jest.fn();
    const { getByText } = render(
      <Dropdown list={mockList} onListItemSelect={mockOnListItemSelect}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));
    fireEvent.click(getByText("Option 2"));

    expect(mockOnListItemSelect).toHaveBeenCalledWith({ label: "Option 2", value: "2" });
  });
});

it("disabled dropdown does not call onToggleList when clicked", () => {
  const mockOnToggleList = jest.fn();
  const { getByText } = render(
    <Dropdown list={mockList} onToggleList={mockOnToggleList} disabled>
      <Button disabled color="primary">
        Toggle
      </Button>
    </Dropdown>,
  );

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();

  fireEvent.click(getByText("Toggle"));

  expect(mockOnToggleList).not.toHaveBeenCalled();
});

it("disabled dropdown item does not call onListItemSelect when clicked", () => {
  const mockOnListItemSelect = jest.fn();
  const listWithDisabledItem: DropdownItem[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2", isDisabled: true },
    { label: "Option 3", value: "3" },
  ];

  const { getByText } = render(
    <Dropdown list={listWithDisabledItem} onListItemSelect={mockOnListItemSelect}>
      <Button color="primary">Toggle</Button>
    </Dropdown>,
  );

  fireEvent.click(getByText("Toggle"));
  fireEvent.click(getByText("Option 2"));

  expect(mockOnListItemSelect).not.toHaveBeenCalled();
});

it("dropdown item with divider renders divider element", () => {
  const listWithDividerItem: DropdownItem[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2", divider: true },
    { label: "Option 3", value: "3" },
  ];

  const { getByText, container } = render(
    <Dropdown list={listWithDividerItem}>
      <Button color="primary">Toggle</Button>
    </Dropdown>,
  );

  fireEvent.click(getByText("Toggle"));

  const dividerElement = container.querySelector(".divider");
  expect(dividerElement).toBeInTheDocument();
  expect(dividerElement).toHaveClass("divider");
});

describe("Grouped List functionality", () => {
  const groupedList: DropdownItem[] = [
    {
      label: "File Group",
      items: [
        { label: "File", value: "file" },
        { label: "Edit", value: "edit" },
        { label: "View", value: "view" },
      ],
    },
    {
      label: "Save Group",
      items: [
        { label: "Save", value: "save" },
        { label: "Save As", value: "save-as" },
      ],
    },
    {
      label: "Exit Group",
      items: [{ label: "Exit", value: "exit" }],
    },
  ];

  it("renders grouped list with automatic dividers when isGroupedList is true", () => {
    const { getByText, container } = render(
      <Dropdown list={groupedList} isGroupedList={true}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    // Check that all items are rendered
    expect(getByText("File")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
    expect(getByText("View")).toBeInTheDocument();
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Save As")).toBeInTheDocument();
    expect(getByText("Exit")).toBeInTheDocument();

    // Check that dividers are automatically added between groups
    const dividerElements = container.querySelectorAll(".divider");
    expect(dividerElements).toHaveLength(2); // Dividers between the 3 groups
  });

  it("calls onListItemSelect when an item in grouped list is clicked", () => {
    const mockOnListItemSelect = jest.fn();
    const { getByText } = render(
      <Dropdown list={groupedList} isGroupedList={true} onListItemSelect={mockOnListItemSelect}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));
    fireEvent.click(getByText("Save"));

    expect(mockOnListItemSelect).toHaveBeenCalledWith({ label: "Save", value: "save" });
  });

  it("works with search functionality in grouped list", async () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Dropdown list={groupedList} isGroupedList={true} isSearchable={true}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    // Initially all items should be visible
    expect(getByText("File")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
    expect(getByText("View")).toBeInTheDocument();
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Save As")).toBeInTheDocument();
    expect(getByText("Exit")).toBeInTheDocument();

    const searchInput = getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "Save" } });

    // Wait for the debounced search to complete (300ms + buffer)
    await new Promise((resolve) => setTimeout(resolve, 400));

    // After searching for "Save", only Save-related items should be visible
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Save As")).toBeInTheDocument();
    // Other items should not be visible
    expect(queryByText("File")).not.toBeInTheDocument();
    expect(queryByText("Edit")).not.toBeInTheDocument();
    expect(queryByText("View")).not.toBeInTheDocument();
    expect(queryByText("Exit")).not.toBeInTheDocument();
  });

  it("handles empty groups in grouped list", () => {
    const groupedListWithEmptyGroup: DropdownItem[] = [
      {
        label: "File Group",
        items: [
          { label: "File", value: "file" },
          { label: "Edit", value: "edit" },
        ],
      },
      {
        label: "Empty Group",
        items: [], // Empty group
      },
      {
        label: "Exit Group",
        items: [{ label: "Exit", value: "exit" }],
      },
    ];

    const { getByText, container } = render(
      <Dropdown list={groupedListWithEmptyGroup} isGroupedList={true}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    // Should render items and handle empty group gracefully
    expect(getByText("File")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
    expect(getByText("Exit")).toBeInTheDocument();

    // Should have only one divider (between the two non-empty groups)
    const dividerElements = container.querySelectorAll(".divider");
    expect(dividerElements).toHaveLength(1);
  });

  it("maintains backward compatibility when isGroupedList is false", () => {
    const regularList: DropdownItem[] = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ];

    const { getByText, container } = render(
      <Dropdown list={regularList} isGroupedList={false}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    // Should render items normally without dividers
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();

    // Should not have any dividers
    const dividerElements = container.querySelectorAll(".divider");
    expect(dividerElements).toHaveLength(0);
  });

  it("handles mixed structure with grouped items and standalone items", () => {
    const mixedList: DropdownItem[] = [
      {
        label: "File Group",
        items: [
          { label: "File", value: "file" },
          { label: "Edit", value: "edit" },
        ],
      },
      {
        label: "Save Group",
        items: [
          { label: "Save", value: "save" },
          { label: "Save As", value: "save-as" },
        ],
      },
      { label: "Standalone Option 1", value: "standalone1" },
      { label: "Standalone Option 2", value: "standalone2" },
    ];

    const { getByText, container } = render(
      <Dropdown list={mixedList} isGroupedList={true}>
        <Button color="primary">Toggle</Button>
      </Dropdown>,
    );

    fireEvent.click(getByText("Toggle"));

    // Check that all grouped items are rendered
    expect(getByText("File")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Save As")).toBeInTheDocument();

    // Check that standalone items are also rendered
    expect(getByText("Standalone Option 1")).toBeInTheDocument();
    expect(getByText("Standalone Option 2")).toBeInTheDocument();

    // Should have 2 dividers: one after each group (including one before standalone items)
    const dividerElements = container.querySelectorAll(".divider");
    expect(dividerElements).toHaveLength(2);
  });
});

const mockList: DropdownItem[] = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      {
        label: "Category 2",
        items: [
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ],
      },
    ],
  },
  {
    label: "Category 15",
    items: [
      { label: "Option 15", value: "15" },
      { label: "Option 16", value: "16" },
    ],
  },
  { label: "Option 5", value: "5" },
];
