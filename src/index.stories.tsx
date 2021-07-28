import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react";
import Component from "./index";

// This is meta information about our component
const meta: Meta<PropsWithChildren<{}>> = {
  title: "My Component", // What title to display in component story page
  component: Component, // This one is obvious :-)
  argTypes: {
    // Here we can specify configuration for our component's props
    children: {
      description: "Content or elements to be rendered inside the Component",
      control: {
        type: "text",
      },
    },
  },
};

// Create one template for our component's story to use in some custom variants
const Template: Story<PropsWithChildren<{}>> = (args) => (
  <Component {...args} />
);

// Basic variant of our component
const Basic = Template.bind({});
Basic.args = {
  children: "Component",
};

export default meta;
export { Basic };
