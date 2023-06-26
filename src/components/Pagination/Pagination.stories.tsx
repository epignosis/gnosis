import React, { useState } from "react";
import { Story } from "@storybook/react";
import Pagination from "./Pagination";
import { PaginationProps, RowsPerPageOption } from "./types";

const rowsPerPageOptions: RowsPerPageOption[] = [
  { value: 10, label: "10 rows" },
  { value: 20, label: "20 rows" },
  { value: 30, label: "30 rows" },
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
  },
  args: {
    page: 1,
    pageSize: 20,
    totalPages: 6,
    rowsPerPageOptions,
  },
};

const Template: Story<PaginationProps> = (args) => {
  const [page, setPage] = useState(args.page);
  const [pageSize, setPageSize] = useState(args.pageSize);

  const selectionText = `${page}-${args.totalPages} of ${pageSize} results`;

  return (
    <Pagination
      style={{ marginTop: "10rem" }}
      {...args}
      page={page}
      selectionText={selectionText}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
};

export const Default = Template.bind({});
export const WithTooManyPages = Template.bind({ totalPages: 1000 });
