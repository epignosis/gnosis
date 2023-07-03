/* eslint-disable no-console */
import React from "react";
import { Story } from "@storybook/react";
import { IconEmptyStateSVG } from "../../icons/";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Table, { Props } from "./Table";
import { Row, Sorting } from "./types";

const emptyState = {
  title: "No results found with these criteria",
  info: "Please try again or",
  callbackInfo: "Restore to default",
  icon: IconEmptyStateSVG,
  callbackFn: () => window.alert("Hello"),
};

export default {
  component: Table,
  title: "Components/Table",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    columns: [
      { accessor: "id", cell: "Code", classNames: ["id"], sortOrder: "asc" },
      {
        accessor: "description",
        cell: "Description",
        classNames: ["description"],
        sortOrder: "asc",
      },
      { accessor: "name", cell: "Name", classNames: ["name"], sortOrder: "asc" },
      { accessor: "category", cell: "Category", classNames: ["category"], sortOrder: "asc" },
      { accessor: "date", cell: "Date", classNames: ["date"], sortOrder: "desc" },
    ],
    rows: [
      {
        id: 271,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 272,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 273,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 274,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
    ],
    emptyState: {
      title: "No results found with these criteria",
      info: "Please try again or",
      icon: IconEmptyStateSVG,
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
  sorting: { column: "id", isDescending: false },
  onSortingChanged: (sorting: Sorting) => console.log(sorting),
};

export const WithRowSelection = Template.bind({});

WithRowSelection.args = {
  selectable: true,
  onRowSelect: (selectedRows: Row[]) => console.log(selectedRows),
  onRowClick: (row: Row) => console.log(row),
};

export const WithOverflowColumns = Template.bind({});

WithOverflowColumns.args = {
  columns: [
    { accessor: "id", cell: "Code", classNames: ["id"], sortOrder: "asc" },
    {
      accessor: "description",
      cell: "Description",
      classNames: ["description"],
      maxWidth: 100,
      sortOrder: "asc",
    },
    { accessor: "name", cell: "Name", classNames: ["name"], maxWidth: 100, sortOrder: "asc" },
    { accessor: "category", cell: "Category", classNames: ["category"], sortOrder: "asc" },
  ],
  rows: [
    {
      id: 271,
      description: <div className="has-overflow">Testing Testing Testing</div>,
      name: "Test",
      category: "Test",
      code: "Test",
    },
    { id: 272, description: "Test", name: "Test", category: "Test", code: "Test" },
    {
      id: 273,
      description: "Test",
      name: (
        <div className="has-overflow">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      ),
      category: "Test",
      code: "Test",
    },
    { id: 274, description: "Test", name: "Test", category: "Test", code: "Test" },
  ],
};

export const WithoutData = Template.bind({});

WithoutData.args = {
  rows: [],
  emptyState: {
    ...emptyState,
    hideInfo: true,
    footer: (
      <div className="body">
        <Text fontSize="lg">{emptyState.title}</Text>
        <br />
        <Text fontSize="lg">{emptyState.info}</Text>
        <Button variant="link" className="link-text" onClick={emptyState.callbackFn}>
          <Text fontSize="lg">{emptyState.callbackInfo}</Text>
        </Button>
      </div>
    ),
  },
};
