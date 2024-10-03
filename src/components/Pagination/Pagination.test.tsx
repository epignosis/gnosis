import React from "react";
import { userEvent } from "@testing-library/user-event";
import Pagination from "./Pagination";
import { PaginationDropDownOptions } from "./types";
import { render, screen } from "@test-utils/render";

const rowsPerPageOptions: PaginationDropDownOptions[] = [
  { value: 10, label: "10 rows" },
  { value: 20, label: "20 rows" },
  { value: 30, label: "30 rows" },
];

describe("<Pagination />", () => {
  it("renders correctly", () => {
    render(
      <Pagination
        page={2}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={jest.fn()}
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
        page={1}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={jest.fn()}
      />,
    );

    const prevBtn = screen.getByTestId("previous-page-btn");

    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
  });

  it("next page button is disabled if it is on the last page", () => {
    render(
      <Pagination
        page={6}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={jest.fn()}
      />,
    );

    const nextBtn = screen.queryByTestId("next-page-btn");

    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toBeDisabled();
  });

  it("onChange get correct page number", async () => {
    const mockFn = jest.fn();
    render(
      <Pagination
        page={3}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={mockFn}
      />,
    );
    const nextBtn = screen.getByTestId("next-page-btn");
    const previousBtn = screen.getByTestId("previous-page-btn");

    await userEvent.click(nextBtn);
    expect(mockFn.mock.calls[0][0]).toBe(4);

    await userEvent.click(previousBtn);
    expect(mockFn.mock.calls[1][0]).toBe(2);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot with on page", () => {
    const { container } = render(
      <Pagination
        page={3}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={jest.fn()}
        id="my-id"
        className="html-class"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("disables all pagination controls when the disabled prop is true", async () => {
    render(
      <Pagination
        page={2}
        pageSize={20}
        totalPages={6}
        translations={{
          perPage: "Per page",
          nextPage: "Next page",
          previousPage: "Previous page",
          firstPage: "First page",
          lastPage: "Last page",
          ofPages: "of",
        }}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={jest.fn()}
        onPageChange={jest.fn()}
        disabled
      />,
    );

    const buttons = screen.getAllByRole("button");
    for (const button of buttons) {
      expect(button).toBeDisabled();
    }

    const onPageChangeMock = jest.fn();
    const nextBtn = screen.getByTestId("next-page-btn");

    await userEvent.click(nextBtn);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});
