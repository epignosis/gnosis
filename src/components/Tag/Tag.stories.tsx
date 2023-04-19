import React from "react";
import { Story } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

export default {
  component: Tag,
  title: "Components/Tag",
};

export const Default: Story<TagProps> = (args) => <Tag {...args} />;

Default.args = {
  children: "This is a tag",
};
