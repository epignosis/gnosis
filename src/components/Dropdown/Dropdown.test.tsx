import React from "react";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./types";
import { buildDropdownMenu } from "./helpers";
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

it("works with nested array format (DropdownItem[][]) and adds dividers", () => {
  const nestedList: DropdownItem[][] = [
    [
      { label: "Group 1 - Option 1", value: "g1-1" },
      { label: "Group 1 - Option 2", value: "g1-2" },
    ],
    [
      { label: "Group 2 - Option 1", value: "g2-1" },
      { label: "Group 2 - Option 2", value: "g2-2" },
    ],
  ];

  const mockOnListItemSelect = jest.fn();
  const { getByText, container } = render(
    <Dropdown list={nestedList} onListItemSelect={mockOnListItemSelect}>
      <Button color="primary">Toggle</Button>
    </Dropdown>,
  );

  fireEvent.click(getByText("Toggle"));

  // Check that dividers are added between groups
  const dividerElements = container.querySelectorAll(".divider");
  expect(dividerElements).toHaveLength(1); // One divider between the two groups

  fireEvent.click(getByText("Group 1 - Option 1"));
  expect(mockOnListItemSelect).toHaveBeenCalledWith({ label: "Group 1 - Option 1", value: "g1-1" });
});

describe("buildDropdownMenu", () => {
  it("returns flat array as-is when input is DropdownItem[]", () => {
    const flatList: DropdownItem[] = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const result = buildDropdownMenu(flatList);
    expect(result).toEqual(flatList);
  });

  it("flattens nested arrays and adds dividers between groups", () => {
    const nestedList: DropdownItem[][] = [
      [
        { label: "Group 1 - Option 1", value: "g1-1" },
        { label: "Group 1 - Option 2", value: "g1-2" },
      ],
      [
        { label: "Group 2 - Option 1", value: "g2-1" },
        { label: "Group 2 - Option 2", value: "g2-2" },
      ],
      [{ label: "Group 3 - Option 1", value: "g3-1" }],
    ];

    const result = buildDropdownMenu(nestedList);

    expect(result).toHaveLength(5); // 2 + 2 + 1 items, with 2 dividers
    expect(result[1]).toEqual({ label: "Group 1 - Option 2", value: "g1-2", divider: true });
    expect(result[3]).toEqual({ label: "Group 2 - Option 2", value: "g2-2", divider: true });
    expect(result[4]).toEqual({ label: "Group 3 - Option 1", value: "g3-1" }); // No divider on last group
  });

  it("filters out empty groups", () => {
    const nestedList: DropdownItem[][] = [
      [{ label: "Group 1 - Option 1", value: "g1-1" }],
      [], // Empty group
      [{ label: "Group 3 - Option 1", value: "g3-1" }],
    ];

    const result = buildDropdownMenu(nestedList);

    expect(result).toHaveLength(2); // 1 + 1 items, with 1 divider
    expect(result[0]).toEqual({ label: "Group 1 - Option 1", value: "g1-1", divider: true });
    expect(result[1]).toEqual({ label: "Group 3 - Option 1", value: "g3-1" });
  });

  it("returns empty array when all groups are empty", () => {
    const nestedList: DropdownItem[][] = [[], [], []];

    const result = buildDropdownMenu(nestedList);

    expect(result).toEqual([]);
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
