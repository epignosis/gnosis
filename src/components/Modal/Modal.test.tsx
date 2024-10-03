import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Modal from "./Modal";
import { render, screen } from "@test-utils/render";

const getModalProps = () => ({
  headerTxt: faker.lorem.word(),
  bodyTxt: faker.lorem.sentence(),
  footerTxt: faker.lorem.words(),
});

describe("<Modal>", () => {
  it("renders correctly with Header, Body and Footer", () => {
    const { headerTxt, bodyTxt, footerTxt } = getModalProps();
    render(
      <Modal isOpen>
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
    const { headerTxt, bodyTxt } = getModalProps();
    render(
      <Modal isOpen>
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
    const { bodyTxt } = getModalProps();
    render(
      <Modal isOpen>
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

  it("Header renders correctly with close btn", async () => {
    const { headerTxt } = getModalProps();
    const mockedOnClose = jest.fn();

    render(
      <Modal isOpen onClose={mockedOnClose}>
        <Modal.Header>{headerTxt}</Modal.Header>
      </Modal>,
    );
    const closeBtn = screen.getByRole("button");

    await userEvent.click(closeBtn);

    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });

  it("Header renders correctly without close btn", () => {
    const { headerTxt } = getModalProps();

    render(
      <Modal isOpen>
        <Modal.Header>{headerTxt}</Modal.Header>
      </Modal>,
    );
    const closeBtn = screen.queryByTestId("header-close-button");

    expect(closeBtn).not.toBeInTheDocument();
  });

  it("Header renders correctly with JSX content", () => {
    const { headerTxt } = getModalProps();
    render(
      <Modal isOpen>
        <Modal.Header>
          <button>{headerTxt}</button>
        </Modal.Header>
      </Modal>,
    );
    const header = screen.getByText(headerTxt);

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(headerTxt);
  });

  it("matches snapshot", () => {
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "app");
    document.body.appendChild(modalContainer);
    render(
      <Modal isOpen>
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body>Test body</Modal.Body>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>,
    );
    const modal = screen.getByLabelText("modal");

    expect(modal).toMatchSnapshot();
  });

  it("matches snapshot with cutom HTML classes", () => {
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "app");
    document.body.appendChild(modalContainer);
    render(
      <Modal isOpen size="fullscreen">
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body>Test body</Modal.Body>
        <Modal.Footer>Test footer</Modal.Footer>
      </Modal>,
    );
    const modal = screen.getByLabelText("modal");

    expect(modal).toMatchSnapshot();
  });

  it("matches snapshot with all props", () => {
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", "app");
    document.body.appendChild(modalContainer);
    render(
      <Modal
        isOpen
        size="md"
        closeOnOutsideClick
        style={{
          content: { border: "3px solid red" },
          overlay: { backgroundColor: "blue" },
        }}
      >
        <Modal.Header>Test header</Modal.Header>
        <Modal.Body style={{ border: "2px solid green" }}>
          <div style={{ marginBottom: 16 }}>
            <input id="password" type="password" />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input id="new-password" type="password" />
          </div>
          <input id="retype-psw" type="password" />
        </Modal.Body>
        <Modal.Footer style={{ border: "2px solid purple", textAlign: "right" }}>
          <button style={{ marginRight: "1rem" }}>Cancel</button>
          <button>Change password</button>
        </Modal.Footer>
      </Modal>,
    );
    const modal = screen.getByLabelText("modal");

    expect(modal).toMatchSnapshot();
  });
});
