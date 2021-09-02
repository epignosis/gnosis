import React, { useState } from "react";
import { Story } from "@storybook/react";
import Modal, { ReactModalProps } from "./Modal";
import { Button, Input } from "@components";

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

export const Default: Story<ReactModalProps> = (args) => {
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

export const ModalWithNoHeader: Story<ReactModalProps> = (args) => {
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

export const ModalWithCotent: Story<ReactModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setIsOpen(true)}>Modal with Content</Button>
      <Modal {...args} isOpen={isOpen} onClose={(): void => setIsOpen(false)}>
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>
          <Input
            id="password"
            type="password"
            label="Enter current password "
            style={{ marginBottom: 16 }}
          />
          <Input
            id="new-password"
            type="password"
            label="Type new password"
            style={{ marginBottom: 16 }}
          />
          <Input id="retype-psw" type="password" label="Retype password" />
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "right" }}>
          <Button
            color="secondary"
            onClick={(): void => setIsOpen(false)}
            style={{ marginRight: "1rem" }}
          >
            Cancel
          </Button>
          <Button onClick={(): void => setIsOpen(false)}>Change password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
