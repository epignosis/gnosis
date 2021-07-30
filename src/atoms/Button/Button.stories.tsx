import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

export default {
  title: "atoms/Button",
};

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
