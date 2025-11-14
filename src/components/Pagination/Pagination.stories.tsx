import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
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
  perPage: "per page",
  nextPage: "Next page",
  previousPage: "Previous page",
  firstPage: "First page",
  lastPage: "Last page",
  ofPages: "of",
};

const a11yTranslations = {
  perPage: "20 results per page",
  nextPage: "Go to the next page",
  previousPage: "Go to the previous page",
  firstPage: "Go to first page",
  lastPage: "Go to the last page",
  ofPages: "Page 1 of 6 pages",
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
    a11yTranslations,
    pageSize: 20,
    totalPages: 6,
    rowsPerPageOptions,
    disabled: false,
  },
};

const Template: StoryFn<PaginationProps> = (args) => {
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

export const WithTotalResults = Template.bind({});
WithTotalResults.args = {
  totalResults: 120,
  rowsPerPageOptions: rowsPerPageOptions.filter(({ value }) => value !== 160),
};

export const WithTooManyPages = Template.bind({});
WithTooManyPages.args = { totalPages: 1000, totalResults: 20000 };

export const WithZeroPages = Template.bind({});
WithZeroPages.args = { pageSize: 10, totalPages: 0, totalResults: 10 };
