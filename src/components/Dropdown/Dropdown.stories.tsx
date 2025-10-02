import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import Button from "../Button/Button";
import Radio from "../FormElements/RadioGroup/Radio";
import Checkbox from "../FormElements/CheckboxGroup/Checkbox";
import { WarningSVG } from "../../icons/";
import Dropdown from "./Dropdown";
import { DropdownItem, DropdownProps } from "./types";
import { FCWithChildren } from "types/common";

const dropdownList: DropdownItem[] = [
  {
    label: "Category 1",
    items: [
      { label: "Option 1", value: "1" },
      {
        label: "Category 3",
        items: [
          { label: "Option 5", value: "5" },
          { label: "Option 6", value: "6", isDisabled: true, divider: true },
          { label: "Option 7", value: "7" },
          { label: "Option 8", value: "8", divider: true },
          { label: "Option 9", value: "9" },
          { label: "Option 10", value: "10" },
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
    (Story: StoryFn): JSX.Element => (
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

const Template: StoryFn<DropdownProps> = (args) => {
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

const smallDropdownList: DropdownItem[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

withHover.args = {
  list: smallDropdownList,
  hover: true,
  remainOpenOnSelect: true,
  isSearchable: true,
};

export const withPrependContent = Template.bind({});

withPrependContent.args = {
  list: smallDropdownList,
  remainOpenOnSelect: true,
  prependContent: (
    <div style={{ marginBottom: "10px", textAlign: "center", borderBottom: "1px solid black" }}>
      Prepended Content
    </div>
  ),
  hover: true,
  isSearchable: true,
};

const ScrollableContainer: FCWithChildren = ({ children }) => (
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

const ScrollableTemplate: StoryFn<DropdownProps & React.CSSProperties> = ({
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

// TODO: this causes the alert to pop-up everytime you visit the story.
WithInfoOnListOpen.args = {
  list: smallDropdownList,
  onToggleList(isListOpen) {
    alert(isListOpen);
  },
};

export const SearchableWithJSXLabel = Template.bind({});

SearchableWithJSXLabel.args = {
  list: [
    { label: <div style={{ color: "red" }}>Option 1</div>, value: "1", originalText: "Option 1" },
    { label: <div style={{ color: "blue" }}>Option 2</div>, value: "2", originalText: "Option 2" },
    {
      label: <button>Option 3</button>,
      value: "3",
      originalText: "Option 3",
    },
    {
      label: <a style={{ fontWeight: "700" }}>Option 4</a>,
      value: "4",
      originalText: "Option 4",
    },
  ],
};

export const WithListOptionsElements = Template.bind({});

WithListOptionsElements.args = {
  list: [
    {
      label: "Google",
      value: "google",
      icon: <WarningSVG height={32} />,
    },
    {
      label: "iCal",
      value: "ical",
      icon: <WarningSVG height={32} />,
    },
    {
      label: "Outlook",
      value: "outlookcom",
      icon: <WarningSVG height={32} />,
    },
    {
      label: "Yahoo",
      value: "yahoo",
      icon: <WarningSVG height={32} />,
    },
  ],
};

// Grouped list items story using DropdownItem[][] format
export const WithGroupedListItems = Template.bind({});

WithGroupedListItems.args = {
  list: [
    [
      {
        label: "JavaScript",
        value: "javascript",
      },
      {
        label: "TypeScript",
        value: "typescript",
      },
      {
        label: "Python",
        value: "python",
      },
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Go",
        value: "go",
      },
      {
        label: "Rust",
        value: "rust",
      },
    ],
    [
      {
        label: "React",
        value: "react",
      },
      {
        label: "Vue.js",
        value: "vue",
      },
      {
        label: "Angular",
        value: "angular",
      },
      {
        label: "Node.js",
        value: "nodejs",
      },
      {
        label: "Express",
        value: "express",
      },
    ],
    // Fifth group - Databases
    [
      {
        label: "PostgreSQL",
        value: "postgresql",
      },
      {
        label: "MongoDB",
        value: "mongodb",
      },
      {
        label: "Redis",
        value: "redis",
      },
      {
        label: "MySQL",
        value: "mysql",
      },
    ],
  ],
  isSearchable: true,
  remainOpenOnSelect: true,
};
