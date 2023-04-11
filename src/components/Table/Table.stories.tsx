import React from "react";
import { Story } from "@storybook/react";
import Table, { Props } from "./Table";

export default {
  component: Table,
  title: "Components/Table",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    columns: [
      { accessor: "id", cell: "Code", classNames: ["id"] },
      { accessor: "description", cell: "Description", classNames: ["description"] },
      { accessor: "name", cell: "Name", classNames: ["name"] },
      { accessor: "category", cell: "Category", classNames: ["category"] },
    ],
    rows: [
      { id: 271, description: "Test", name: "Test", category: "Test", code: "Test" },
      { id: 272, description: "Test", name: "Test", category: "Test", code: "Test" },
      { id: 273, description: "Test", name: "Test", category: "Test", code: "Test" },
      { id: 274, description: "Test", name: "Test", category: "Test", code: "Test" },
    ],
    emptyState: {
      title: "No data",
      info: "There are no data here",
    },
  },
};

const Template: Story<Props> = (args) => (
  <>
    <Table {...args} />
  </>
);

export const Default = Template.bind({});

export const WithSorting = Template.bind({});

WithSorting.args = {
  sortable: true,
  sorting: { column: "id", isDescending: true },
};

export const WithRowSelection = Template.bind({});

WithRowSelection.args = {
  selectable: true,
};

export const WithoutData = Template.bind({});

WithoutData.args = {
  rows: [],
};