import React, { useState } from "react";
import { Story } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  component: Pagination,
  title: "Components/Pagination",
  argTypes: {
    onChange: { action: "Changed page!" },
  },
  args: {
    current: 3,
    totalPages: 6,
  },
};

export const Default: Story<PaginationProps> = (args) => {
  const [value, setValue] = useState(1);
  const updateValue = (val: number) => {
    setValue(val);
  };

  return <Pagination {...args} current={value} onChange={updateValue} />;
};

export const WithTooManyPages: Story<PaginationProps> = (args) => {
  const [value, setValue] = useState(1);
  const updateValue = (val: number) => {
    setValue(val);
  };

  return <Pagination {...args} current={value} onChange={updateValue} />;
};

WithTooManyPages.args = {
  totalPages: 1000,
};
