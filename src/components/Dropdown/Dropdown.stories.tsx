import React, { useState } from "react";
import { Story } from "@storybook/react";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./types";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  argTypes: {},
  decorators: [
    (Story: Story): JSX.Element => (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template: Story<{ dropdownlist: DropdownItem[] }> = ({ dropdownlist }) => {
  const [show, toggle] = useState(false);

  const toggleDropdown = () => {
    toggle((show) => !show);
  };

  return (
    <Dropdown
      isSearchable={true}
      list={dropdownlist}
      textSize="xs"
      onListItemSelect={(): void => undefined}
    >
      <Button color="primary" as="div" className="filter-button" onClick={toggleDropdown}>
        Click to {show ? "close" : "open"}
      </Button>
    </Dropdown>
  );
};

const dropdownlist: DropdownItem[] = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      {
        label: "Category 3",
        items: [
          { label: "Option 5", value: "5" },
          { label: "Option 6", value: "6" },
        ],
      },
    ],
  },
  {
    label: "Category 2",
    items: [
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4" },
    ],
  },
  { label: "Option 5", value: "5" },
];

const extendedDropdownlist: DropdownItem[] = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      {
        label: "Category 3",
        items: [
          { label: "Option 5", value: "5" },
          { label: "Option 6", value: "6" },
        ],
      },
    ],
  },
  {
    label: "Category 2",
    items: [
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4" },
      { label: "Option 5", value: "3" },
      { label: "Option 6", value: "4" },
      { label: "Option 7", value: "3" },
      { label: "Option 8", value: "4" },
    ],
  },
  { label: "Option 5", value: "5" },
];

export const Default = Template.bind({});

Default.args = {
  dropdownlist,
};

export const withExtendedList = Template.bind({});

withExtendedList.args = {
  dropdownlist: extendedDropdownlist,
};
