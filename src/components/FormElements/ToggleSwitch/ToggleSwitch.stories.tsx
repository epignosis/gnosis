import React, { useRef, useState } from "react";
import { StoryFn } from "@storybook/react";
import { PreviewIconSVG } from "../../../icons";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import ToggleSwitch, { ToggleProps, ToggleSwitchHandlers } from "./ToggleSwitch";

export default {
  title: "components/Form Elements/ToggleSwitch",
  component: ToggleSwitch,
  args: {
    id: "toggle-switch",
    labelBefore: "Before",
    inlineTextTranslations: { enabled: "Enabled", disabled: "Disabled" },
  },
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<ToggleProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

export const WithInternalIcon = Template.bind({});

WithInternalIcon.args = {
  size: "md",
  InternalIcon: <PreviewIconSVG height={32} />,
};

export const WithSubtitle = Template.bind({});

WithSubtitle.args = {
  subtitle: "This is a subtitle for the toggle",
};

export const WithMiddleStep = () => {
  const [preventToggle, setPreventToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSwitchRef = useRef<ToggleSwitchHandlers>(null);

  const handleToggle = (isChecked: boolean): void => {
    if (!isChecked) {
      setIsModalOpen(true);
    } else {
      setPreventToggle(true);
    }
  };

  const handleModalConfirm = (): void => {
    setPreventToggle(false);
    setIsModalOpen(false);
    toggleSwitchRef.current?.toggle();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Footer>
          <Button onClick={handleModalConfirm}>Confirm</Button>
        </Modal.Footer>
      </Modal>
      <ToggleSwitch
        id="toggle-switch"
        ref={toggleSwitchRef}
        onChange={handleToggle}
        labelBefore="With Middle Step"
        preventToggle={preventToggle}
      />
    </>
  );
};
