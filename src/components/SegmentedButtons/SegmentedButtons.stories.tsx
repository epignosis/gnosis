import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { ListSVG } from "../../icons/legacy";
import SegmentedButtonsComponent, { SegmentedButtonsProps } from "./SegmentedButtons";

export default {
  title: "components/Segmented Buttons",
  component: SegmentedButtonsComponent,
  args: {
    ariaLabel: "Layout selector",
    options: [
      { label: "Item first", value: "first" },
      { label: "Item second", value: "second" },
    ],
  },
};

const Template: StoryFn<SegmentedButtonsProps> = (args) => {
  const [value, setValue] = useState("first");

  return <SegmentedButtonsComponent {...args} value={value} onChange={setValue} />;
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  options: [
    { label: "Item first", value: "first" },
    { label: "Item second", value: "second" },
  ],
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  options: [
    { value: "first", icon: ListSVG },
    { value: "second", icon: ListSVG },
  ],
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  options: [
    { label: "Item first", value: "first", icon: ListSVG },
    { label: "Item second", value: "second", icon: ListSVG },
  ],
};

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  options: [
    { label: "Item first", value: "first" },
    { label: "Item second", value: "second", disabled: true },
  ],
};

export const ThreeItems = Template.bind({});
ThreeItems.args = {
  options: [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ],
};
