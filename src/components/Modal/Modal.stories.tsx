import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { Button, Input } from "../../";
import Modal, { ReactModalProps } from "./Modal";

export default {
  component: Modal,
  title: "Components/Modal",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg", "fullscreen"],
      },
    },
  },
  args: {
    size: "md",
  },
};

export const Default: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Simple Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={(): void => setIsOpen(false)}>
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>This is the modal body</Modal.Body>
        <Modal.Footer>This is the modal footer</Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalWithNoHeader: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal with no Header</Button>
      <Modal {...args} isOpen={isOpen} onClose={(): void => setIsOpen(false)}>
        <Modal.Body style={{ padding: 0 }}>
          <div style={{ overflow: "auto", maxHeight: "32rem" }}>
            <img
              src="https://res.cloudinary.com/tsevdos/image/upload/v1607431472/Card01_Sales_rtxuhj.jpg"
              style={{ width: "100%" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={(): void => setIsOpen(false)}>Close Modal</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalWithCotent: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal with Content</Button>
      <Modal {...args} isOpen={isOpen} onClose={(): void => setIsOpen(false)}>
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: 16 }}>
            <Input id="password" type="password" label="Enter current password " />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input id="new-password" type="password" label="Type new password" />
          </div>
          <Input id="retype-psw" type="password" label="Retype password" />
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "right" }}>
          <Button
            color="secondary"
            onClick={(): void => setIsOpen(false)}
            style={{ marginInlineEnd: "1rem" }}
          >
            Cancel
          </Button>
          <Button onClick={(): void => setIsOpen(false)}>Change password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalNotCloseOnOutsideClick: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal with Content</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        closeOnOutsideClick={false}
      >
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: 16 }}>
            <Input id="password" type="password" label="Enter current password " />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input id="new-password" type="password" label="Type new password" />
          </div>
          <Input id="retype-psw" type="password" label="Retype password" />
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "right" }}>
          <Button
            color="secondary"
            onClick={(): void => setIsOpen(false)}
            style={{ marginInlineEnd: "1rem" }}
          >
            Cancel
          </Button>
          <Button onClick={(): void => setIsOpen(false)}>Change password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalWithCustomStyles: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal with Content</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        style={{
          content: { border: "3px solid red" },
          overlay: { backgroundColor: "blue" },
        }}
      >
        <Modal.Header style={{ border: "2px solid red" }}>This is the modal title</Modal.Header>
        <Modal.Body style={{ border: "2px solid green" }}>
          <div style={{ marginBottom: 16 }}>
            <Input id="password" type="password" label="Enter current password " />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input id="new-password" type="password" label="Type new password" />
          </div>
          <Input id="retype-psw" type="password" label="Retype password" />
        </Modal.Body>
        <Modal.Footer style={{ border: "2px solid purple", textAlign: "right" }}>
          <Button
            color="secondary"
            onClick={(): void => setIsOpen(false)}
            style={{ marginInlineEnd: "1rem" }}
          >
            Cancel
          </Button>
          <Button onClick={(): void => setIsOpen(false)}>Change password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalWithNoCloseButton: StoryFn<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal without close button</Button>
      <Modal {...args} isOpen={isOpen}>
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>This is the modal body</Modal.Body>
        <Modal.Footer>This is the modal footer</Modal.Footer>
      </Modal>
    </div>
  );
};
