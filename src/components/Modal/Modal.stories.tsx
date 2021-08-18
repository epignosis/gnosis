import React, { useState } from "react";
import { Story } from "@storybook/react";
import Modal from "./Modal";
import { Button, Input } from "@components";

export default {
  component: Modal,
  title: "Components/Modal",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const ModalStory = (): JSX.Element => {
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={openModal}>Simple Modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Header>This is the modal title</Modal.Header>
        <Modal.Body>This is the modal body</Modal.Body>
        <Modal.Footer>This is the modal footer</Modal.Footer>
      </Modal>
    </div>
  );
};

const ModalNoHeader = (): JSX.Element => {
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={openModal}>Modal with no Header</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body style={{ padding: 0, maxWidth: "32rem" }}>
          <img
            src="https://res.cloudinary.com/tsevdos/image/upload/v1607431472/Card01_Sales_rtxuhj.jpg"
            style={{ width: "100%", height: 300 }}
          />
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={closeModal}>Close Modal</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const ModalContent = (): JSX.Element => {
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={openModal}>Modal with Content</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
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
          <Button color="secondary" onClick={closeModal} style={{ marginRight: "1rem" }}>
            Cancel
          </Button>
          <Button onClick={closeModal}>Change password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const SimpleModal: Story = () => (
  <div style={{ marginBottom: 16 }}>
    <ModalStory />
  </div>
);

export const ModalWithNoHeader: Story = () => (
  <div style={{ marginBottom: 16 }}>
    <ModalNoHeader />
  </div>
);

export const ModalWithContent: Story = () => (
  <div style={{ marginBottom: 16 }}>
    <ModalContent />
  </div>
);
