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
    toggle((show) => !show);
  };

  return (
    <Dropdown {...args}>
      <Button color="primary" as="div" className="filter-button" onClick={toggleDropdown}>
        Click to {show ? "close" : "open"}
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

const smallDropdownList: DropdownItem[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
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
  marginLeft,
  height,
  ...args
}) => {
  const [show, toggle] = useState(false);

  const toggleDropdown = () => {
    toggle((show) => !show);
  };

  return (
    <ScrollableContainer>
      <div style={{ position, top, marginLeft, height }}>
        <Dropdown {...args} fixPlacement placement="top-end">
          <Button color="primary" as="div" className="filter-button" onClick={toggleDropdown}>
            Click to {show ? "close" : "open"}
          </Button>
        </Dropdown>
      </div>
    </ScrollableContainer>
  );
};

export const ScrollableContainerTopLeft = ScrollableTemplate.bind({});
export const ScrollableContainerBottomLeft = ScrollableTemplate.bind({});
export const ScrollableContainerTopRight = ScrollableTemplate.bind({});
export const ScrollableContainerBottomRight = ScrollableTemplate.bind({});
export const ScrollableContainerMiddle = ScrollableTemplate.bind({});

ScrollableContainerTopLeft.args = {
  list: smallDropdownList,
  position: "relative",
  top: "0",
  height: "fit-content",
};

ScrollableContainerBottomLeft.args = {
  list: smallDropdownList,
  position: "relative",
  top: "200px",
  height: "fit-content",
};

ScrollableContainerTopRight.args = {
  list: smallDropdownList,
  marginLeft: "auto",
  height: "fit-content",
};

ScrollableContainerBottomRight.args = {
  list: smallDropdownList,
  marginLeft: "auto",
  position: "relative",
  top: "200px",
  height: "fit-content",
};

ScrollableContainerMiddle.args = {
  list: smallDropdownList,
  marginLeft: "350px",
  position: "relative",
  top: "100px",
  height: "fit-content",
};

export const WithInfoOnListOpen = Template.bind({});

WithInfoOnListOpen.args = {
  list: smallDropdownList,
  onToggleList(isListOpen) {
    alert(isListOpen);
  },
};
