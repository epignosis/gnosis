import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Drawer from "./Drawer";
import { screen, render } from "@test-utils/render";

describe("<Drawer/>", () => {
  const drawerEl = document.createElement("div");
  drawerEl.setAttribute("id", "drawerRoot");
  document.body.appendChild(drawerEl);

  const headerTxt = faker.lorem.word();
  const bodyTxt = faker.lorem.word();
  const footerTxt = faker.lorem.word();

  it("renders correctly", () => {
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header>{headerTxt}</Drawer.Header>
        <Drawer.Body>{bodyTxt}</Drawer.Body>
        <Drawer.Footer>{footerTxt}</Drawer.Footer>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);
    const body = screen.getByText(bodyTxt);
    const footer = screen.getByText(footerTxt);
    const mask = screen.getByTestId("mask");

    userEvent.click(mask);

    expect(header).toHaveTextContent(headerTxt);
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).toHaveTextContent(footerTxt);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("renders correctly without Header and Footer", () => {
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Body>{bodyTxt}</Drawer.Body>
      </Drawer>,
    );

    const header = screen.queryByTestId("drawer-header");
    const body = screen.getByText(bodyTxt);
    const footer = screen.queryByTestId("drawer-footer");

    expect(header).not.toBeInTheDocument();
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).not.toBeInTheDocument();
  });

  it("Header renders correctly with close button", () => {
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header closable>{headerTxt}</Drawer.Header>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);
    const closeBtn = screen.getByRole("button");

    userEvent.click(closeBtn);

    expect(header).toHaveTextContent(headerTxt);
    expect(closeBtn).toBeInTheDocument();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("Header renders with JSX content", () => {
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header closable>
          <button>{headerTxt}</button>
        </Drawer.Header>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(headerTxt);
  });

  it("matches snapshot with header, body and footer", () => {
    const mockFn = jest.fn();

    const { container } = render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header>Test header</Drawer.Header>
        <Drawer.Body>Test body</Drawer.Body>
        <Drawer.Footer>Test footer</Drawer.Footer>
      </Drawer>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot without header and footer", () => {
    const mockFn = jest.fn();

    const { container } = render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Body>Test body</Drawer.Body>
      </Drawer>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with close button", () => {
    const mockFn = jest.fn();

    const { container } = render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header closable>{headerTxt}</Drawer.Header>
      </Drawer>,
    );

    expect(container).toMatchSnapshot();
  });
});
