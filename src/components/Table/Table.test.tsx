import React from "react";
import Table from "./Table";
import { screen, render } from "@test-utils/render";

const columns = [
  {
    Header: "Love level",
    accessor: "love_level",
  },
  {
    Header: "Awesomeness",
    accessor: "awesomeness",
  },
  {
    Header: "Favorite framework",
    accessor: "favorite_framework",
  },
];

const data = [
  {
    love_level: "You'll find no such thing here",
    awesomeness: "Dino awesome",
    favorite_framework: "None",
  },
  {
    love_level: "To infinity and beyond!",
    awesomeness: "Super awesome",
    favorite_framework: (
      <a href="https://github.com/tokio-rs/tokio" target="_blank" rel="noreferrer">
        tokio-rs/tokio
      </a>
    ),
  },
  {
    love_level: "Much love",
    awesomeness: "Such maze",
    favorite_framework: (
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        React
      </a>
    ),
  },
  {
    love_level: "You'll find no such thing here",
    awesomeness: "Dino awesome",
    favorite_framework: "None",
  },
];

describe("<Table>", () => {
  it("renders correctly without Footer", () => {
    render(<Table columns={columns} data={data} />);

    const footer = screen.queryByRole("footer");
    const headerTitles = screen.getAllByRole("columnheader");
    const bodyRows = screen.getAllByTestId("body-row");
    const cells = screen.getAllByRole("cell");

    expect(footer).not.toBeInTheDocument();
    expect(headerTitles).toHaveLength(3);
    expect(bodyRows).toHaveLength(4);
    expect(cells).toHaveLength(headerTitles.length * bodyRows.length);
  });

  it("renders correctly with Footer", () => {
    render(<Table columns={columns} data={data} footer={<div>Test footer</div>} />);

    const footer = screen.getByText("Test footer");
    expect(footer).toHaveTextContent("Test footer");
  });

  it("matches snapshot without footer", () => {
    const { container } = render(<Table columns={columns} data={data} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with footer", () => {
    const { container } = render(
      <Table columns={columns} data={data} footer={<div>Test footer</div>} />,
    );

    expect(container).toMatchSnapshot();
  });
});
