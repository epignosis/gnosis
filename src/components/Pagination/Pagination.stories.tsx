import React, { useState } from "react";
import { Story } from "@storybook/react";
import Pagination from "./Pagination";
import { PaginationProps, RowItem } from "./types";

const list: RowItem[] = [
  { id: 10, value: "10 rows" },
  { id: 20, value: "20 rows" },
  { id: 30, value: "30 rows" },
];

export default {
  component: Pagination,
  title: "Components/Pagination",
  argTypes: {
    dir: {
      control: {
        type: "select",
        options: ["ltr", "rtl"],
      },
    },
    handlePaginationNumberChanged: { action: "Changed page!" },
  },
  args: {
    current: 1,
    totalPages: 6,
    list,
    size: 20,
  },
};

export const Default: Story<PaginationProps> = (args) => {
  const [value, setValue] = useState(1);
  const updateValue = (val: number) => {
    setValue(val);
  };
  const [size, setSize] = useState(args.size);
  const handleSizeChanged = (size: number) => {
    setSize(size);
  };

  const selectionText = `${value}-${args.totalPages} of ${size} results`;

  return (
    <Pagination
      style={{ marginTop: "10rem" }}
      {...args}
      current={value}
      handlePaginationNumberChanged={updateValue}
      selectionText={selectionText}
      handlePaginationSizeChanged={handleSizeChanged}
    />
  );
};

export const WithTooManyPages: Story<PaginationProps> = (args) => {
  const [value, setValue] = useState(1);
  const updateValue = (val: number) => {
    setValue(val);
  };
  const [size, setSize] = useState(args.size);
  const handleSizeChanged = (size: number) => {
    setSize(size);
  };

  const selectionText = `${value}-${args.totalPages} of ${size} results`;

  return (
    <Pagination
      style={{ marginTop: "10rem" }}
      {...args}
      current={value}
      handlePaginationNumberChanged={updateValue}
      selectionText={selectionText}
      handlePaginationSizeChanged={handleSizeChanged}
    />
  );
};

WithTooManyPages.args = {
  totalPages: 1000,
};
