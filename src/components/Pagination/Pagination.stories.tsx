import React, { useState } from "react";
import { Story } from "@storybook/react";
import Pagination from "./Pagination";
import { PaginationProps, PaginationDropDownOptions } from "./types";

const rowsPerPageOptions: PaginationDropDownOptions[] = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 40, label: "40" },
  { value: 80, label: "80" },
  { value: 160, label: "160" },
];

const translations = {
  perPage: "Per page",
  nextPage: "Next page",
  previousPage: "Previous page",
  firstPage: "First page",
  lastPage: "Last page",
  ofPages: "of",
};

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
  },
  args: {
    page: 1,
    translations,
    pageSize: 20,
    totalPages: 6,
    rowsPerPageOptions,
    disabled: false,
  },
};

const Template: Story<PaginationProps> = (args) => {
  const [page, setPage] = useState(args.page);
  const [, setPageSize] = useState(args.pageSize);

  return (
    <Pagination
      style={{ marginTop: "10rem" }}
      {...args}
      page={page}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
};

export const Default = Template.bind({});

export const WithTooManyPages = Template.bind({});
WithTooManyPages.args = { totalPages: 1000 };

export const WithZeroPages = Template.bind({});
WithZeroPages.args = { totalPages: 0 };
