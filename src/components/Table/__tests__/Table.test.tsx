import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import Table from "../Table";
import { render, screen } from "@test-utils/render";

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

const MOBILE_COLUMNS = [
  {
    accessor: "name",
    cell: "Name",
  },
  {
    accessor: "status",
    cell: "Status",
  },
  {
    accessor: "owner",
    cell: "Owner",
  },
];

const MOBILE_ROWS = [
  {
    id: 1,
    name: "Mobile row primary value",
    status: "Pending",
    owner: "Ada",
  },
];

const MOBILE_COLUMNS_WITHOUT_SECONDARY = [
  {
    accessor: "name",
    cell: "Name",
  },
];

const MOBILE_ROWS_WITHOUT_SECONDARY = [
  {
    id: 2,
    name: "Standalone mobile value",
  },
];

const EMPTY_STATE = {
  title: faker.helpers.unique(faker.lorem.word),
  info: faker.helpers.unique(faker.lorem.word),
};

const setWindowWidth = (width: number): void => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
};

describe("<Table>", () => {
  beforeEach(() => {
    setWindowWidth(1280);
  });

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

  it("renders expandable mobile rows using the primary accessor", async () => {
    setWindowWidth(480);

    render(<Table rows={MOBILE_ROWS} columns={MOBILE_COLUMNS} emptyState={EMPTY_STATE} />);

    expect(screen.getByText("Mobile row primary value")).toBeInTheDocument();
    expect(screen.queryByText("Pending")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Expand row details" }));

    expect(screen.getAllByText("Status")).toHaveLength(2);
    expect(screen.getByText("Pending")).toBeInTheDocument();
    expect(screen.getAllByText("Owner")).toHaveLength(2);
    expect(screen.getByText("Ada")).toBeInTheDocument();
  });

  it("fires onRowExpand when a mobile row is expanded and collapsed by clicking the row", async () => {
    setWindowWidth(480);

    const onRowExpand = jest.fn();

    render(
      <Table
        rows={MOBILE_ROWS}
        columns={MOBILE_COLUMNS}
        emptyState={EMPTY_STATE}
        onRowExpand={onRowExpand}
      />,
    );

    await userEvent.click(screen.getByText("Mobile row primary value"));
    expect(onRowExpand).toHaveBeenNthCalledWith(1, 1, true);

    await userEvent.click(screen.getByText("Mobile row primary value"));
    expect(onRowExpand).toHaveBeenNthCalledWith(2, 1, false);
  });

  it("fires onRowExpand when the mobile expand button is clicked", async () => {
    setWindowWidth(480);

    const onRowExpand = jest.fn();

    render(
      <Table
        rows={MOBILE_ROWS}
        columns={MOBILE_COLUMNS}
        emptyState={EMPTY_STATE}
        onRowExpand={onRowExpand}
      />,
    );

    await userEvent.click(screen.getByRole("button", { name: "Expand row details" }));

    expect(onRowExpand).toHaveBeenCalledWith(1, true);
  });

  it("does not fire onRowExpand when selecting a row checkbox", async () => {
    setWindowWidth(480);

    const onRowExpand = jest.fn();
    const onRowSelect = jest.fn();

    render(
      <Table
        selectable
        rows={MOBILE_ROWS}
        columns={MOBILE_COLUMNS}
        emptyState={EMPTY_STATE}
        onRowExpand={onRowExpand}
        onRowSelect={onRowSelect}
      />,
    );

    await userEvent.click(screen.getByTestId("checkbox-label-table-entry-1-select"));

    expect(onRowSelect).toHaveBeenCalled();
    expect(onRowExpand).not.toHaveBeenCalled();
  });

  it("hides the expand button and does not expand mobile rows without secondary columns", async () => {
    setWindowWidth(480);

    const onRowExpand = jest.fn();

    render(
      <Table
        rows={MOBILE_ROWS_WITHOUT_SECONDARY}
        columns={MOBILE_COLUMNS_WITHOUT_SECONDARY}
        emptyState={EMPTY_STATE}
        onRowExpand={onRowExpand}
      />,
    );

    expect(screen.queryByRole("button", { name: "Expand row details" })).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Standalone mobile value"));

    expect(onRowExpand).not.toHaveBeenCalled();
  });
});
