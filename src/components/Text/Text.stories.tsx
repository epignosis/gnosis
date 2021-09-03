import React from "react";
import { Story } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  component: Text,
  title: "Components/Text",
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
        options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
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

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  weight: "400",
  fontSize: "md",
  as: "span",
  children: "This is some text",
};
