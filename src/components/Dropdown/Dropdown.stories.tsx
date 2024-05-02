import React, { FC, useState } from "react";
import { Story } from "@storybook/react";
import Button from "../Button/Button";
import Radio from "../FormElements/RadioGroup/Radio";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import Dropdown from "./Dropdown";
import { DropdownItem, DropdownProps } from "./types";

const dropdownList: DropdownItem[] = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      {
        label: "Category 3",
        items: [
          { label: "Option 5", value: "5" },
          { label: "Option 6", value: "6", isDisabled: true },
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

export default {
  title: "components/Dropdown",
  component: Dropdown,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["bottom-start", "bottom-end", "top-start", "top-end", "end-top"],
      },
    },
    isSearchable: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    textSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md"],
      },
    },
    fixPlacement: {
      control: "boolean",
    },
  },
  args: {
    placement: "bottom-start",
    isSearchable: true,
    textSize: "sm",
    fullWidth: false,
    disabled: false,
  },
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

const Template: Story<DropdownProps> = (args) => {
  const [show, toggle] = useState(false);

  const toggleDropdown = () => {
    if (!args.disabled) {
      toggle((show) => !show);
    }
  };

  return (
    <Dropdown {...args}>
      <Button
        color="primary"
        as="div"
        className="filter-button"
        onClick={toggleDropdown}
        disabled={args.disabled}
      >
        Click (or hover) to {show ? "close" : "open"}
      </Button>
    </Dropdown>
  );
};

const extendedDropdownList: DropdownItem[] = [
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
  list: dropdownList,
  prependContent: (
    <div style={{ marginBottom: "10px", textAlign: "center", borderBottom: "1px solid black" }}>
      Prepended Content
    </div>
  ),
};

export const withExtendedList = Template.bind({});

withExtendedList.args = {
  list: extendedDropdownList,
};

const mockList = [
  {
    id: "options",
    label: "Options",
    items: [
      {
        id: "score",
        value: "score",
        label: <Checkbox id="score" value="score" label={"Score"} name="Course score" />,
      },
      {
        id: "progress",
        value: "progress",
        label: (
          <Checkbox id="progress" value="progress" label={"Progress"} name="Course progress" />
        ),
      },
    ],
  },
  {
    id: "focus",
    value: "",
    label: "Focus",
    items: [
      {
        id: "all",
        value: "all",
        label: <Radio id="all" value="all" label={"All"} name="All" />,
      },
    ],
  },
];

export const withJsxElementLabels = Template.bind({});

withJsxElementLabels.args = {
  list: mockList,
  remainOpenOnSelect: true,
  isSearchable: false,
};

export const withHover = Template.bind({});

withHover.args = {
  list: mockList,
  hover: true,
  isSearchable: true,
};

export const withPrependContent = Template.bind({});

withPrependContent.args = {
  list: mockList,
  prependContent: (
    <div style={{ marginBottom: "10px", textAlign: "center", borderBottom: "1px solid black" }}>
      Prepended Content
    </div>
  ),
  hover: true,
  isSearchable: true,
};

const smallDropdownList: DropdownItem[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const ScrollableContainer: FC = ({ children }) => (
  <div
    id="scrollable-container"
    style={{
      backgroundColor: "#F5F5F6",
      height: "350px",
      width: "100%",
      overflow: "auto",
      padding: "1rem",
      display: "flex",
    }}
  >
    {children}
  </div>
);

const ScrollableTemplate: Story<DropdownProps & React.CSSProperties> = ({
  position,
  top,
  marginInlineStart,
  height,
  disabled = false,
  ...args
}) => {
  const [show, toggle] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) {
      toggle((show) => !show);
    }
  };

  return (
    <ScrollableContainer>
      <div style={{ position, top, marginInlineStart, height }}>
        <Dropdown {...args} disabled={disabled}>
          <Button
            color="primary"
            as="div"
            className="filter-button"
            onClick={toggleDropdown}
            disabled={disabled}
          >
            Click to {show ? "close" : "open"}
          </Button>
        </Dropdown>
      </div>
    </ScrollableContainer>
  );
};

export const ScrollableContainerTopStart = ScrollableTemplate.bind({});
export const ScrollableContainerBottomStart = ScrollableTemplate.bind({});
export const ScrollableContainerTopEnd = ScrollableTemplate.bind({});
export const ScrollableContainerBottomEnd = ScrollableTemplate.bind({});

ScrollableContainerTopStart.args = {
  list: smallDropdownList,
  position: "relative",
  top: "0",
  height: "fit-content",
  fixPlacement: true,
};

ScrollableContainerBottomStart.args = {
  list: smallDropdownList,
  position: "relative",
  top: "200px",
  height: "fit-content",
  fixPlacement: true,
};

ScrollableContainerTopEnd.args = {
  list: smallDropdownList,
  marginInlineStart: "auto",
  height: "fit-content",
  fixPlacement: true,
};

ScrollableContainerBottomEnd.args = {
  list: smallDropdownList,
  marginInlineStart: "auto",
  position: "relative",
  top: "200px",
  height: "fit-content",
  fixPlacement: true,
};

export const WithInfoOnListOpen = Template.bind({});

WithInfoOnListOpen.args = {
  list: smallDropdownList,
  onToggleList(isListOpen) {
    alert(isListOpen);
  },
};
