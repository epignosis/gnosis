import React from "react";
import { Story } from "@storybook/react";
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

export const Default: Story<PaginationProps> = (args) => <Pagination {...args} />;
