import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Text, { TextProps } from "./Text";

export default {
  component: Text,
  title: "atoms/Text",
  argTypes: {
    weight: {
      control: {
        type: "select",
        options: ["400", "700"],
      },
    },
    fontSize: {
      control: {
        type: "select",
        // TODO: add the remaining sizes when typography docs are merged in master
        options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      },
    },
    as: {
      control: {
        type: "select",
        options: ["span", "div", "p"],
      },
    },
  },
};

const Template: Story<TextProps> = (args) => <Text {...args}>This is some text!</Text>;

export const Default = Template.bind({});

Default.args = {
  weight: "400",
  fontSize: "md",
  as: "span",
};
