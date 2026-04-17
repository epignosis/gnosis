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

const renderTable = (props: Partial<React.ComponentProps<typeof Table>> = {}) =>
  render(<Table rows={ROWS} columns={COLUMNS} emptyState={EMPTY_STATE} {...props} />);

describe("<Table>", () => {
  const setupMobileTable = (
    props: Partial<React.ComponentProps<typeof Table>> = {},
  ): ReturnType<typeof render> => {
    setWindowWidth(480);
    return renderTable({ rows: MOBILE_ROWS, columns: MOBILE_COLUMNS, ...props });
  };

  const setupExpandedMobileRow = async (
    props: Partial<React.ComponentProps<typeof Table>> = {},
  ): Promise<void> => {
    setupMobileTable(props);
    await userEvent.click(screen.getByRole("button", { name: "Expand row details" }));
  };

  beforeEach(() => {
    setWindowWidth(1280);
  });

  it("renders table in document", () => {
    const { getByTestId } = renderTable();
    const table = getByTestId("table");

    expect(table).toBeInTheDocument();
  });

  it("renders visible table", () => {
    const { getByTestId } = renderTable();
    const table = getByTestId("table");

    expect(table).toBeVisible();
  });

  it("matches snapshot", () => {
    const { container } = renderTable({ id: "table-1" });

    expect(container).toMatchSnapshot();
  });

  it("renders the mobile primary value", () => {
    setupMobileTable();

    expect(screen.getByText("Mobile row primary value")).toBeInTheDocument();
  });

  it("hides status value before mobile row expansion", () => {
    setupMobileTable();

    expect(screen.queryByText("Pending")).not.toBeInTheDocument();
  });

  it("hides owner value before mobile row expansion", () => {
    setupMobileTable();

    expect(screen.queryByText("Ada")).not.toBeInTheDocument();
  });

  it("renders status label after expansion", async () => {
    await setupExpandedMobileRow();

    expect(screen.getAllByText("Status")).toHaveLength(2);
  });

  it("renders status value after expansion", async () => {
    await setupExpandedMobileRow();

    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("renders owner label after expansion", async () => {
    await setupExpandedMobileRow();

    expect(screen.getAllByText("Owner")).toHaveLength(2);
  });

  it("renders owner value after expansion", async () => {
    await setupExpandedMobileRow();

    expect(screen.getByText("Ada")).toBeInTheDocument();
  });

  it("expands a mobile row when the row is clicked", async () => {
    setupMobileTable();

    await userEvent.click(screen.getByText("Mobile row primary value"));

    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("expands a mobile row when the expand button is clicked", async () => {
    await setupExpandedMobileRow();

    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("calls onRowSelect when selecting a mobile row checkbox", async () => {
    const onRowSelect = jest.fn();

    setupMobileTable({
      selectable: true,
      onRowSelect,
    });

    await userEvent.click(screen.getByTestId("checkbox-label-table-entry-1-select"));

    expect(onRowSelect).toHaveBeenCalled();
  });

  it("does not expand mobile row when selecting a checkbox", async () => {
    setupMobileTable({
      selectable: true,
      onRowSelect: jest.fn(),
    });

    await userEvent.click(screen.getByTestId("checkbox-label-table-entry-1-select"));

    expect(screen.queryByText("Pending")).not.toBeInTheDocument();
  });

  it("hides expand button without secondary mobile columns", () => {
    setWindowWidth(480);

    renderTable({
      rows: MOBILE_ROWS_WITHOUT_SECONDARY,
      columns: MOBILE_COLUMNS_WITHOUT_SECONDARY,
    });

    expect(screen.queryByRole("button", { name: "Expand row details" })).not.toBeInTheDocument();
  });

  it("does not expand mobile rows without secondary columns", async () => {
    setWindowWidth(480);

    renderTable({
      rows: MOBILE_ROWS_WITHOUT_SECONDARY,
      columns: MOBILE_COLUMNS_WITHOUT_SECONDARY,
    });

    await userEvent.click(screen.getByText("Standalone mobile value"));

    expect(screen.queryByRole("button", { name: "Collapse row details" })).not.toBeInTheDocument();
  });
});
