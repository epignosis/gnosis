import React from "react";
import userEvent from "@testing-library/user-event";
import { Sidebar } from "./Sidebar.stories";
import { render, screen } from "@test-utils/render";

describe("<Sidebar/>", () => {
  it("renders expanded correctly", () => {
    const mockFn = jest.fn();
    render(<Sidebar onToggle={mockFn} />);

    const handle = screen.getByRole("button");
    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(9);
    expect(handle).toHaveTextContent("Menu");
    expect(items[0]).toHaveTextContent("Home");
    expect(items[1]).toHaveTextContent("My courses");
    expect(items[2]).toHaveTextContent("Catalog");
    expect(items[3]).toHaveTextContent("Calendar");
    expect(items[4]).toHaveTextContent("Messages");
    expect(items[5]).toHaveTextContent("Discussions");
    expect(items[6]).toHaveTextContent("Notifications");
    expect(items[7]).toHaveTextContent("Help");
    expect(items[8]).toHaveTextContent("My profile");
  });

  it("renders collapsed correctly", () => {
    const mockFn = jest.fn();
    render(<Sidebar isCollapsed onToggle={mockFn} />);

    const handle = screen.getByRole("button");
    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(9);
    expect(handle).not.toHaveTextContent("Menu");
    expect(items[0]).not.toHaveTextContent("Home");
    expect(items[1]).not.toHaveTextContent("My courses");
    expect(items[2]).not.toHaveTextContent("Catalog");
    expect(items[3]).not.toHaveTextContent("Calendar");
    expect(items[4]).not.toHaveTextContent("Messages");
    expect(items[5]).not.toHaveTextContent("Discussions");
    expect(items[6]).not.toHaveTextContent("Notifications");
    expect(items[7]).not.toHaveTextContent("Help");
    expect(items[8]).not.toHaveTextContent("My profile");
  });

  it("fires the onToggle handler", () => {
    const mockToggle = jest.fn();
    render(<Sidebar onToggle={mockToggle} />);

    const handle = screen.getByRole("button");

    userEvent.click(handle);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const mockFn = jest.fn();
    const { container } = render(<Sidebar onToggle={mockFn} />);

    expect(container).toMatchSnapshot();
  });
});
