import React from "react";
import userEvent from "@testing-library/user-event";
import { Default as Drawer } from "./Drawer.stories";
import { screen, render } from "@test-utils/render";

describe("<Drawer/>", () => {
  const drawerEl = document.createElement("div");
  drawerEl.setAttribute("id", "drawerRoot");
  document.body.appendChild(drawerEl);

  it("renders correctly", () => {
    const mockFn = jest.fn();

    render(<Drawer onClose={mockFn} {...Drawer.args} />);

    userEvent.click(screen.getByRole("button"));

    const header = screen.getByText("Drawer title");
    const body = screen.getByText("Drawer content");
    const footer = screen.getByText("Close Drawer");
    const mask = screen.getByTestId("mask");
    const closeBtn = screen.getByLabelText("Close drawer");

    userEvent.click(mask);
    userEvent.click(closeBtn);

    expect(header).toHaveTextContent("Drawer title");
    expect(body).toHaveTextContent("Drawer content");
    expect(footer).toHaveTextContent("Close Drawer");
    expect(closeBtn).toBeInTheDocument();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot with header, body and footer", () => {
    const mockFn = jest.fn();

    const { container } = render(<Drawer onClose={mockFn} {...Drawer.args} />);

    expect(container).toMatchSnapshot();
  });
});
