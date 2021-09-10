import React from "react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";
import { render, screen } from "@test-utils/render";

describe("<Pagination />", () => {
  it("renders correctly", () => {
    render(<Pagination current={2} totalPages={4} onChange={jest.fn()} />);

    const prevBtn = screen.queryByTestId("previous-page-btn");
    const nextBtn = screen.queryByTestId("next-page-btn");
    const pageOptions = screen.getAllByRole("option");

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(pageOptions).toHaveLength(4);
  });

  it("doesn't have a previous page button if it is the first page", () => {
    render(<Pagination current={1} totalPages={4} onChange={jest.fn()} />);

    const prevBtn = screen.queryByTestId("previous-page-btn");
    const nextBtn = screen.queryByTestId("next-page-btn");
    const pageOptions = screen.getAllByRole("option");

    expect(prevBtn).not.toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(pageOptions).toHaveLength(4);
  });

  it("doesn't have a next page button if it is on the last page", () => {
    render(<Pagination current={4} totalPages={4} onChange={jest.fn()} />);

    const prevBtn = screen.queryByTestId("previous-page-btn");
    const nextBtn = screen.queryByTestId("next-page-btn");
    const pageOptions = screen.getAllByRole("option");

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).not.toBeInTheDocument();
    expect(pageOptions).toHaveLength(4);
  });

  it("onChange get correct page number", () => {
    const mockFn = jest.fn();
    render(<Pagination current={2} totalPages={4} onChange={mockFn} />);
    const nextBtn = screen.getByText("Next");
    const previousBtn = screen.getByText("Previous");

    userEvent.click(nextBtn);
    expect(mockFn.mock.calls[0][0]).toBe(3);
    userEvent.click(previousBtn);
    expect(mockFn.mock.calls[1][0]).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot with on page", () => {
    const { container } = render(<Pagination current={2} totalPages={4} onChange={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot in responsive view", () => {
    const { container } = render(
      <Pagination current={2} totalPages={4} onChange={jest.fn()} responsiveView />,
    );

    expect(container).toMatchSnapshot();
  });
});
