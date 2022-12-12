import React from "react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";
import { render, screen } from "@test-utils/render";

describe("<Pagination />", () => {
  it("renders correctly", () => {
    render(<Pagination current={2} totalPages={6} onChange={jest.fn()} />);

    const prevBtn = screen.queryByTestId("previous-page-btn");
    const nextBtn = screen.queryByTestId("next-page-btn");
    const pageNum = screen.queryAllByTestId("pagination-page");

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(pageNum).toHaveLength(6);
  });

  it("previous page button is disabled if it is the first page", () => {
    render(<Pagination current={1} totalPages={6} onChange={jest.fn()} />);

    const prevBtn = screen.getByTestId("previous-page-btn");

    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
  });

  it("next page button is disabled if it is on the last page", () => {
    render(<Pagination current={6} totalPages={6} onChange={jest.fn()} />);

    const nextBtn = screen.queryByTestId("next-page-btn");

    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toBeDisabled();
  });

  it("onChange get correct page number", () => {
    const mockFn = jest.fn();
    render(<Pagination current={3} totalPages={6} onChange={mockFn} />);
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
        current={2}
        totalPages={6}
        onChange={jest.fn()}
        id="my-id"
        className="html-class"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
