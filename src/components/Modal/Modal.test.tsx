import React from "react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { render, screen } from "@test-utils/render";

const mockedOnClose = jest.fn();

describe("<Modal>", () => {
  it("renders correctly with Header, Body and Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body>Test body</Modal.Body>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>,
    );
    const header = screen.getByText("Test header");
    const body = screen.getByText("Test body");
    const footer = screen.getByText("Test footer");

    expect(header).toHaveTextContent("Test header");
    expect(body).toHaveTextContent("Test body");
    expect(footer).toHaveTextContent("Test footer");
  });

  it("renders correctly without Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body>Test body</Modal.Body>
      </Modal>,
    );
    const header = screen.getByText("Test header");
    const body = screen.getByText("Test body");
    const footer = screen.queryByTestId("modal-footer");

    expect(header).toHaveTextContent("Test header");
    expect(body).toHaveTextContent("Test body");
    expect(footer).not.toBeInTheDocument();
  });

  it("renders correctly without Header and Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Body>Test body</Modal.Body>
      </Modal>,
    );
    const body = screen.getByText("Test body");
    const header = screen.queryByTestId("modal-header");
    const footer = screen.queryByTestId("modal-footer");

    expect(body).toHaveTextContent("Test body");
    expect(header).not.toBeInTheDocument();
    expect(footer).not.toBeInTheDocument();
  });

  it("Header renders correctly with close btn", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>Test header</Modal.Header>
      </Modal>,
    );
    const closeBtn = screen.getByRole("button");

    userEvent.click(closeBtn);

    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body>Test body</Modal.Body>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>,
    );

    expect(container).toMatchSnapshot();
  });
});
