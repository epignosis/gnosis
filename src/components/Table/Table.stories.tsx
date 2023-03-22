import React from "react";
import { Story } from "@storybook/react";
import Table, { Sorting, TableProps } from "./Table";

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
      title: "title",
      info: "info",
    },
    selected: [],
    selectable: false,
    sortable: false,
    sorting: { column: "code", isDescending: true },
    onSortingChanged: (sorting: Sorting): void => {
      const text = !sorting.isDescending ? sorting.column + " asc" : sorting.column + " desc";
      alert(text);
    },
  },
};

export const Default: Story<TableProps> = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};
