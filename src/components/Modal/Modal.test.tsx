import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Modal from "./Modal";
import { render, screen } from "@test-utils/render";

const mockedOnClose = jest.fn();

describe("<Modal>", () => {
  const headerTxt = faker.lorem.word();
  const bodyTxt = faker.lorem.sentence();
  const footerTxt = faker.lorem.words();

  it("renders correctly with Header, Body and Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>{headerTxt}</Modal.Header>
        <Modal.Body>{bodyTxt}</Modal.Body>
        <Modal.Footer>{footerTxt}</Modal.Footer>
      </Modal>,
    );
    const header = screen.getByText(headerTxt);
    const body = screen.getByText(bodyTxt);
    const footer = screen.getByText(footerTxt);

    expect(header).toHaveTextContent(headerTxt);
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).toHaveTextContent(footerTxt);
  });

  it("renders correctly without Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>{headerTxt}</Modal.Header>
        <Modal.Body>{bodyTxt}</Modal.Body>
      </Modal>,
    );
    const header = screen.getByText(headerTxt);
    const body = screen.getByText(bodyTxt);
    const footer = screen.queryByTestId("modal-footer");

    expect(header).toHaveTextContent(headerTxt);
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).not.toBeInTheDocument();
  });

  it("renders correctly without Header and Footer", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Body>{bodyTxt}</Modal.Body>
      </Modal>,
    );
    const body = screen.getByText(bodyTxt);
    const header = screen.queryByTestId("modal-header");
    const footer = screen.queryByTestId("modal-footer");

    expect(body).toHaveTextContent(bodyTxt);
    expect(header).not.toBeInTheDocument();
    expect(footer).not.toBeInTheDocument();
  });

  it("Header renders correctly with close btn", () => {
    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>{headerTxt}</Modal.Header>
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
