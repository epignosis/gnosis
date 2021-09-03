import React from "react";
import { Story } from "@storybook/react";
import Heading, { HeadingProps, SIZES } from "./Heading";

export default {
  title: "Components/Headings",
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.values(SIZES),
      },
    },
    as: {
      control: {
        type: "select",
        options: Object.keys(SIZES),
      },
    },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});

H1.args = {
  size: "3xl",
  as: "h1",
};

export const H2 = Template.bind({});

H2.args = {
  size: "2xl",
  as: "h2",
};

export const H3 = Template.bind({});

H3.args = {
  size: "xl",
  as: "h3",
};

export const H4 = Template.bind({});

H4.args = {
  size: "lg",
  as: "h4",
};

export const H5 = Template.bind({});

H5.args = {
  size: "md",
  as: "h5",
};

export const H6 = Template.bind({});

H6.args = {
  size: "sm",
  as: "h6",
};
