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
      title: "No data",
      info: "There are no data here",
    },
  },
};

const sortingArgs = {
  sorting: { column: "code", isDescending: true },
  onSortingChanged: (sorting: Sorting): void => {
    const text = !sorting.isDescending ? sorting.column + " asc" : sorting.column + " desc";
    alert(text);
  },
};

export const Default: Story<TableProps> = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};

export const TableWithSorting: Story<TableProps> = (args) => {
  return (
    <div>
      <Table
        id="TableWithSorting"
        {...args}
        sortable={true}
        sorting={sortingArgs.sorting}
        onSortingChanged={sortingArgs.onSortingChanged}
      />
    </div>
  );
};

export const TableWithSelection: Story<TableProps> = (args) => {
  return (
    <div>
      <Table id="TableWithSelection" {...args} selectable={true} />
    </div>
  );
};

export const TableWithBoth: Story<TableProps> = (args) => {
  return (
    <div>
      <Table
        id="TableWithBoth"
        {...args}
        sortable={true}
        sorting={sortingArgs.sorting}
        onSortingChanged={sortingArgs.onSortingChanged}
        selectable={true}
        rows={[
          { id: 276, description: "Test", name: "Test", category: "Test", code: "Test" },
          { id: 277, description: "Test", name: "Test", category: "Test", code: "Test" },
          { id: 278, description: "Test", name: "Test", category: "Test", code: "Test" },
          { id: 279, description: "Test", name: "Test", category: "Test", code: "Test" },
        ]}
      />
    </div>
  );
};

export const TableNoData: Story<TableProps> = (args) => {
  return (
    <div>
      <Table id="TableNoData" {...args} rows={[]} />
    </div>
  );
};
