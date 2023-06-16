import React from "react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";
import { RowItem } from "./types";
import { render, screen } from "@test-utils/render";

const list: RowItem[] = [
  { id: 10, value: "10 rows" },
  { id: 20, value: "20 rows" },
  { id: 30, value: "30 rows" },
];

describe("<Pagination />", () => {
  it("renders correctly", () => {
    render(
      <Pagination
        list={list}
        size={20}
        current={2}
        totalPages={6}
        selectionText="dummy"
        handlePaginationSizeChanged={jest.fn()}
        handlePaginationNumberChanged={jest.fn()}
      />,
    );

    const prevBtn = screen.queryByTestId("previous-page-btn");
    const nextBtn = screen.queryByTestId("next-page-btn");

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it("previous page button is disabled if it is the first page", () => {
    render(
      <Pagination
        current={1}
        list={list}
        size={20}
        totalPages={6}
        selectionText="dummy"
        handlePaginationSizeChanged={jest.fn()}
        handlePaginationNumberChanged={jest.fn()}
      />,
    );

    const prevBtn = screen.getByTestId("previous-page-btn");

    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
  });

  it("next page button is disabled if it is on the last page", () => {
    render(
      <Pagination
        list={list}
        size={20}
        current={6}
        totalPages={6}
        selectionText="dummy"
        handlePaginationSizeChanged={jest.fn()}
        handlePaginationNumberChanged={jest.fn()}
      />,
    );

    const nextBtn = screen.queryByTestId("next-page-btn");

    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toBeDisabled();
  });

  it("onChange get correct page number", () => {
    const mockFn = jest.fn();
    render(
      <Pagination
        list={list}
        size={20}
        current={3}
        totalPages={6}
        selectionText="dummy"
        handlePaginationSizeChanged={jest.fn()}
        handlePaginationNumberChanged={mockFn}
      />,
    );
    const nextBtn = screen.getByTestId("next-page-btn");
    const previousBtn = screen.getByTestId("previous-page-btn");

    userEvent.click(nextBtn);
    expect(mockFn.mock.calls[0][0]).toBe(4);

    userEvent.click(previousBtn);
    expect(mockFn.mock.calls[1][0]).toBe(2);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot with on page", () => {
    const { container } = render(
      <Pagination
        list={list}
        size={20}
        current={3}
        totalPages={6}
        selectionText="dummy"
        handlePaginationSizeChanged={jest.fn()}
        handlePaginationNumberChanged={jest.fn()}
        id="my-id"
        className="html-class"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
