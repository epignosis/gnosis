import React from "react";
import { faker } from "@faker-js/faker";
import Table from "../Table";
import { render } from "@test-utils/render";

const COLUMNS = [
  {
    accessor: "header1",
    cell: "Header1",
    classNames: ["header1"],
  },
  {
    accessor: "header2",
    cell: "Header2",
    classNames: ["header2"],
  },
  {
    accessor: "header3",
    cell: "Header3",
    classNames: ["header3"],
  },
  {
    accessor: "header4",
    cell: "Header4",
    classNames: ["header4"],
  },
  {
    accessor: "header5",
    cell: "Header5",
    classNames: ["header5"],
  },
];

const ROWS = [
  {
    id: "id1",
    description: "description1",
    name: "name1",
    category: "category1",
    code: "code1",
    date: "date1",
  },
  {
    id: "id2",
    description: "description2",
    name: "name2",
    category: "category2",
    code: "code2",
    date: "date2",
  },
  {
    id: "id3",
    description: "description3",
    name: "name3",
    category: "category3",
    code: "code3",
    date: "date3",
  },
  {
    id: "id4",
    description: "description4",
    name: "name4",
    category: "category4",
    code: "code4",
    date: "date4",
  },
];

const EMPTY_STATE = {
  title: faker.helpers.unique(faker.lorem.word),
  info: faker.helpers.unique(faker.lorem.word),
};

describe("<Table>", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Table rows={ROWS} columns={COLUMNS} emptyState={EMPTY_STATE} />,
    );
    const table = getByTestId("table");

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Table id="table-1" rows={ROWS} columns={COLUMNS} emptyState={EMPTY_STATE} />,
    );

    expect(container).toMatchSnapshot();
  });
});
