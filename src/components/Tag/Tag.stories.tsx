import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Tag, { TagProps } from "./Tag";

export default {
  component: Tag,
  title: "Components/Tag",
  argTypes: {
    bgColor: {
      control: {
        type: "select",
        options: ["course", "card", "new"],
      },
    },
  },
};

export const Default: Story<TagProps> = (args) => <Tag {...args} />;

Default.args = {
  bgColor: "course",
  children: "This is a tag",
};
