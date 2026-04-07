/* eslint-disable no-console */
import React, { MouseEvent, useRef, useState } from "react";
import { StoryFn } from "@storybook/react";
import { DropdownItem } from "../Dropdown/types";
import { IconEmptyStateSVG } from "../../icons/";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Table, { Props } from "./Table";
import { Row, Sorting, TableHandlers } from "./types";

const emptyState = {
  title: "No results found with these criteria",
  info: "Please try again or",
  callbackInfo: "Restore to default",
  icon: IconEmptyStateSVG,
  callbackFn: () => window.alert("Hello"),
};

const rows = [];
for (let i = 0; i < 10; i++) {
  rows.push({
    id: i,
    description: "Test",
    name: "Test",
    category: "Test",
    code: "Test",
    date: "27/05/1997",
  });
}

const longTextRows = [
  {
    id: 501,
    description:
      "A very long description that is useful for validating wrapping, truncation, and expanded mobile rendering across multiple breakpoints without changing the desktop table structure.An intentionally long primary field value that should truncate on mobile until the row is expanded by the user.An intentionally long primary field value that should truncate on mobile until the row is expanded by the user",
    name: "An intentionally long primary field value that should truncate on mobile until the row is expanded by the user.An intentionally long primary field value that should truncate on mobile until the row is expanded by the user",
    category:
      "A category label with enough text to test stacked mobile detail sections and confirm long labels remain readable",
    date: "Friday, September 27, 2026 at 14:30 UTC",
  },
  {
    id: 502,
    description:
      "Another long descriptive value with more context so we can inspect spacing, divider rhythm, and how the details panel behaves when several fields contain verbose content.",
    name: "A second row with a long title that helps us check zebra striping and expanded state behavior in the mobile presentation",
    category:
      "A second category value that is intentionally verbose and slightly awkward so edge cases become visible in Storybook",
    date: "Wednesday, October 1, 2026 at 09:15 UTC",
  },
];

export default {
  component: Table,
  title: "Components/Table",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    columns: [
      {
        accessor: "id",
        cell: "Code",
        classNames: ["id"],
        sortOrder: "asc",
        isDefaultAccessor: true,
      },
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
    rows,
    emptyState: {
      title: "No results found with these criteria",
      info: "Please try again or",
      icon: IconEmptyStateSVG,
    },
    disabled: false,
  },
};

const Template: StoryFn<Props> = (args) => {
  const [, setSelectedRows] = useState<number[]>([]);
  const { selectable, autohide } = args;
  const showUncheckBtn = selectable && !autohide;
  const tableRef = useRef<TableHandlers>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (tableRef.current) {
      tableRef.current?.selectRowsById([1, 2, 5, 6]);
    }
  };

  const handleRowSelect = (rowIds: number[]): void => {
    setSelectedRows((rows) => [...rows, ...rowIds]);
  };

  return (
    <>
      {showUncheckBtn && (
        <Button onClick={handleClick} style={{ marginBottom: "1rem" }}>
          Toggle rows 1, 2, 5, 6
        </Button>
      )}
      <Table {...args} ref={tableRef} onRowSelect={handleRowSelect} />
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
  onRowSelect: (rowIds: number[]) => console.log(rowIds),
  onRowClick: (row: Row) => console.log(row),
};

export const WithAutoHideRowSelection = Template.bind({});

WithAutoHideRowSelection.args = {
  selectable: true,
  autohide: true,
  onRowSelect: (rowIds: number[]) => console.log(rowIds),
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
