import React from "react";
import { StoryFn } from "@storybook/react";
import Tag, { TagProps } from "./Tag";
import { colors } from "@theme/default/colors";

export default {
  component: Tag,
  title: "Components/Tag",
};

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a default tag",
};

export const Custom = Template.bind({});

Custom.args = {
  children: "This is a custom tag",
  style: {
    backgroundColor: colors.red.base,
    color: colors.black,
  },
};
