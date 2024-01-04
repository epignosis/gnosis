/* eslint-disable no-console */
import React, { useState } from "react";
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
        sortableHeader: false,
      },
      { accessor: "name", cell: "Name", classNames: ["name"], sortOrder: "asc" },
      {
        accessor: "category",
        cell: "Category",
        classNames: ["category"],
        sortOrder: "asc",
      },
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
      {
        id: 275,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 276,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 277,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 278,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 279,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 280,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 281,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 282,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 283,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 284,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 285,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 286,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 287,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 288,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 289,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 290,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 291,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 292,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 293,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 294,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 295,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 296,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 297,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 298,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 299,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 300,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 301,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 302,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 303,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 304,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 305,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 306,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 307,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 308,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 309,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 310,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 311,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 312,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 313,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 314,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 315,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 316,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 317,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 318,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 319,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 320,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 321,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 322,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 323,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 324,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 325,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 326,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 327,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 328,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 329,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 330,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 331,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 332,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 333,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 334,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 335,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 336,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 337,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 338,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 339,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 340,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 341,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 342,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 343,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 344,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 345,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 346,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 347,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 348,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 349,
        description: "Test",
        name: "Test",
        category: "Test",
        code: "Test",
        date: "27/05/1997",
      },
      {
        id: 350,
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

const Template: Story<Props> = (args) => {
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <>
      <Button onClick={() => setSelectedRows([])}> Uncheck rows </Button>
      <Table {...args} selectedRows={selectedRows} />
    </>
  );
};

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

export const WithAutoHideRowSelection = Template.bind({});

WithAutoHideRowSelection.args = {
  selectable: true,
  autohide: true,
  onRowSelect: (selectedRows: Row[]) => console.log(selectedRows),
  onRowClick: (row: Row) => console.log(row),
};

export const WithOverflowColumns = Template.bind({});

WithOverflowColumns.args = {
  columns: [
    { accessor: "id", cell: "Code", classNames: ["id"], sortOrder: "asc", headerWidth: 100 },
    {
      accessor: "description",
      cell: "Description",
      classNames: ["description"],
      maxWidth: 100,
      sortOrder: "asc",
    },
    {
      accessor: "name",
      cell: "Name",
      classNames: ["name"],
      maxWidth: 100,
      sortOrder: "asc",
    },
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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
