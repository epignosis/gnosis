import React from "react";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";
import { act, render, screen } from "@test-utils/render";

const resizeWindow = (x: number, y: number) => {
  Object.assign(window, { innerWidth: x });
  Object.assign(window, { innerHeight: y });
  window.dispatchEvent(new Event("resize"));
};

describe("<Pagination />", () => {
  it("renders", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={1} totalPages={1} onChange={mockFn} />);

    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it("has 2 pages", () => {
    const mockFn = jest.fn();
    render(<Pagination current={1} totalPages={2} onChange={mockFn} />);

    const pageOptions = screen.getAllByRole("option");

    expect(pageOptions).toHaveLength(2);
  });

  it("doesn't have a next page", () => {
    const mockFn = jest.fn();
    const { queryByText } = render(<Pagination current={2} totalPages={2} onChange={mockFn} />);

    const nextBtn = queryByText(/Next/);

    expect(nextBtn).toBeNull();
  });

  it("doesn't have a previous page", () => {
    const mockFn = jest.fn();
    const { queryByText } = render(<Pagination current={1} totalPages={2} onChange={mockFn} />);

    const previousBtn = queryByText(/Previous/);

    expect(previousBtn).toBeNull();
  });

  it("has next & previous pages", () => {
    const mockFn = jest.fn();
    const { queryByText } = render(<Pagination current={2} totalPages={4} onChange={mockFn} />);

    const nextBtn = queryByText(/Next/);
    const previousBtn = queryByText(/Previous/);

    expect(nextBtn).not.toBeNull();
    expect(previousBtn).not.toBeNull();
  });

  it("changes page", () => {
    const mockFn = jest.fn();
    render(<Pagination current={2} totalPages={4} onChange={mockFn} />);

    const nextBtn = screen.getByText(/Next/);
    const previousBtn = screen.getByText(/Previous/);

    userEvent.click(nextBtn);
    userEvent.click(previousBtn);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot with on page", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={1} totalPages={1} onChange={mockFn} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with 2 pages", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={1} totalPages={2} onChange={mockFn} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with no previous page", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={1} totalPages={2} onChange={mockFn} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with no next page", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={2} totalPages={2} onChange={mockFn} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with previous and next pages", () => {
    const mockFn = jest.fn();
    const { container } = render(<Pagination current={2} totalPages={4} onChange={mockFn} />);

    expect(container).toMatchSnapshot();
  });
});

describe("<Pagination/> on mobile", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();

    render(<Pagination current={2} totalPages={4} onChange={mockFn} />);

    act(() => {
      resizeWindow(320, 500);
    });

    const nextBtn = screen.getByTestId("arrow-right");
    const previousBtn = screen.getByTestId("arrow-right");
    const options = screen.getAllByRole("option");
    const select = screen.getByTestId("pagination-page");

    userEvent.click(nextBtn);
    userEvent.click(previousBtn);

    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(4);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
