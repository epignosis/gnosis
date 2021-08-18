import React from "react";
import Pagination from "./Pagination";
import { render, screen } from "@test-utils/render";

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
