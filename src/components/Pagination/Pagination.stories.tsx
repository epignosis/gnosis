import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  component: Pagination,
  title: "Components/Pagination",
  argTypes: {
    onChange: { action: "Changed page!" },
  },
  args: {
    current: 1,
    totalPages: 4,
  },
};

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const WithNextBtn = Template.bind({});

WithNextBtn.args = {
  current: 1,
};

export const WithBothBtns = Template.bind({});

WithBothBtns.args = {
  current: 2,
  totalPages: 4,
};

export const WithPreviousBtn = Template.bind({});

WithPreviousBtn.args = {
  current: 4,
};
