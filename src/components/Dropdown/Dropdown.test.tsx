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

    expect(mockOnListItemSelect).toHaveBeenCalledWith({
      id: "option-2",
      label: "Option 2",
      value: "2",
    });
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

const mockList: DropdownItem[] = [
  {
    id: "category-1",
    value: "category-1",
    label: "Category 1",
    items: [
      { id: "option-1", label: "Option 1", value: "1" },
      {
        id: "category-2",
        label: "Category 2",
        items: [
          { id: "option-2", label: "Option 2", value: "2" },
          { id: "option-3", label: "Option 3", value: "3" },
        ],
      },
    ],
  },
  {
    id: "category-15",
    value: "category-15",
    label: "Category 15",
    items: [
      { id: "option-15", label: "Option 15", value: "15" },
      { id: "option-16", label: "Option 16", value: "16" },
    ],
  },
  { id: "option-5", label: "Option 5", value: "5" },
];
