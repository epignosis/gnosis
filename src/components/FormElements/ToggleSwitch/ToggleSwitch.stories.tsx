import React, { useRef, useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PreviewIconSVG } from "../../../icons";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import Heading from "../../Heading/Heading";
import ToggleSwitch, { ToggleProps, ToggleSwitchHandlers } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "components/Form Elements/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    docs: {
      description: {
        component:
          "A flexible toggle switch component with support for labels, descriptions, tooltips, variants, and sizes.",
      },
    },
  },
  args: {
    id: "toggle-switch",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "success"],
      description: "Visual style variant of the toggle switch",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "Size of the toggle switch",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial checked state",
    },
    required: {
      control: "boolean",
      description: "Whether the toggle is required (shows asterisk)",
    },
    hasInlineText: {
      control: "boolean",
      description: "Show enabled/disabled text inside medium size toggles",
    },
    showOutlineBorder: {
      control: "boolean",
      description: "Show outline border around the toggle",
    },
    preventToggle: {
      control: "boolean",
      description: "Prevent automatic state changes (for custom handling)",
    },
    notSwitchedOff: {
      control: "boolean",
      description: "Special styling for labels that are never switched off",
    },
  },
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 600, padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: StoryFn<ToggleProps> = (args) => <ToggleSwitch {...args} />;

// Basic Examples
export const Default = Template.bind({});
Default.args = {
  labelBefore: "Enable feature",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  labelBefore: "Notifications",
  description: "Receive email notifications for important updates",
};

export const WithLabelAfter = Template.bind({});
WithLabelAfter.args = {
  labelAfter: "Dark mode",
  required: true,
};

export const WithBothLabels = Template.bind({});
WithBothLabels.args = {
  labelBefore: "Disabled",
  labelAfter: "Enabled",
  description: "Toggle between disabled and enabled state",
  notSwitchedOff: true,
  defaultChecked: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  labelBefore: "Advanced settings",
  tooltip: "This will enable advanced configuration options that require administrator privileges",
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  labelBefore: "User notifications",
  description: "Control notification preferences",
  subtitle: "Changes take effect immediately",
};

// Variants
export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
  variant: "primary",
  labelBefore: "Primary variant",
  defaultChecked: true,
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  variant: "success",
  labelBefore: "Success variant",
  defaultChecked: true,
};

// Sizes
export const SmallSize = Template.bind({});
SmallSize.args = {
  size: "sm",
  labelBefore: "Small toggle",
  defaultChecked: true,
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: "md",
  labelBefore: "Medium toggle",
  defaultChecked: true,
};

export const MediumWithInlineText = Template.bind({});
MediumWithInlineText.args = {
  size: "md",
  hasInlineText: true,
  labelBefore: "With inline text",
  inlineTextTranslations: { enabled: "ON", disabled: "OFF" },
  defaultChecked: true,
};

export const WithCustomInlineText = Template.bind({});
WithCustomInlineText.args = {
  size: "md",
  hasInlineText: true,
  labelBefore: "Auto-save",
  inlineTextTranslations: { enabled: "AUTO", disabled: "MANUAL" },
  variant: "success",
};

// With Icons
export const WithInternalIcon = Template.bind({});
WithInternalIcon.args = {
  size: "md",
  labelBefore: "Preview mode",
  InternalIcon: <PreviewIconSVG height={32} />,
  variant: "success",
  defaultChecked: true,
};

// Remove WithCheckIcon since CheckIconSVG is not available

// States
export const Disabled = Template.bind({});
Disabled.args = {
  labelBefore: "Disabled toggle",
  description: "This toggle is disabled",
  isDisabled: true,
  defaultChecked: true,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  labelBefore: "Disabled toggle",
  description: "This toggle is disabled and unchecked",
  isDisabled: true,
  defaultChecked: false,
};

// Advanced Examples
export const CompleteExample = Template.bind({});
CompleteExample.args = {
  labelBefore: "Enterprise features",
  description: "Enable advanced enterprise functionality",
  subtitle: "Requires administrator approval",
  tooltip: "Contact your system administrator to enable these features",
  variant: "success",
  size: "md",
  hasInlineText: true,
  required: true,
  showOutlineBorder: true,
  inlineTextTranslations: { enabled: "ACTIVE", disabled: "INACTIVE" },
};

// Interactive Examples
export const ControlledToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ToggleSwitch
        id="controlled-toggle"
        labelBefore="Controlled toggle"
        description={`Current state: ${isChecked ? "ON" : "OFF"}`}
        defaultChecked={isChecked}
        onChange={setIsChecked}
      />
      <Button size="sm" onClick={() => setIsChecked(!isChecked)}>
        Toggle via button
      </Button>
    </div>
  );
};

export const WithMiddleStep = () => {
  const [preventToggle, setPreventToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentState, setCurrentState] = useState(true);
  const toggleSwitchRef = useRef<ToggleSwitchHandlers>(null);

  const handleToggle = (isChecked: boolean): void => {
    if (currentState && !isChecked) {
      setIsModalOpen(true);
    } else {
      setCurrentState(isChecked);
      setPreventToggle(false);
    }
  };

  const handleModalConfirm = (): void => {
    setCurrentState(false);
    setPreventToggle(false);
    setIsModalOpen(false);
    toggleSwitchRef.current?.toggle();
  };

  const handleModalCancel = (): void => {
    setIsModalOpen(false);
    setPreventToggle(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalCancel}>
        <Modal.Header>
          <Heading as="h3" size="lg">
            Confirm Action
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <Text fontSize="md">
            Are you sure you want to disable this feature? This action may affect your workflow.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={handleModalCancel}>
            Cancel
          </Button>
          <Button variant="solid" onClick={handleModalConfirm}>
            Disable Feature
          </Button>
        </Modal.Footer>
      </Modal>

      <ToggleSwitch
        id="toggle-with-confirmation"
        ref={toggleSwitchRef}
        onChange={handleToggle}
        labelBefore="Critical feature"
        description="Requires confirmation to disable"
        preventToggle={preventToggle}
        defaultChecked={currentState}
        variant="success"
        size="md"
        tooltip="This feature requires confirmation before being disabled"
      />
    </>
  );
};

export const ImperativeAPI = () => {
  const toggleRef = useRef<ToggleSwitchHandlers>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ToggleSwitch
        id="imperative-toggle"
        ref={toggleRef}
        labelBefore="Imperative API example"
        description="Control this toggle using the buttons below"
        size="md"
        variant="success"
      />

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button size="sm" onClick={() => toggleRef.current?.toggle()}>
          Toggle via ref
        </Button>
      </div>

      <Text fontSize="sm">
        The imperative API allows external control of the toggle state using refs.
      </Text>
    </div>
  );
};

// Layout Examples
export const LayoutShowcase = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div>
      <Heading as="h4" size="md" style={{ marginBottom: "1rem" }}>
        Basic Layouts
      </Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleSwitch id="layout-1" labelBefore="Label before" />
        <ToggleSwitch id="layout-2" labelAfter="Label after" />
        <ToggleSwitch
          id="layout-3"
          labelBefore="Both labels"
          labelAfter="work together"
          notSwitchedOff={true}
        />
      </div>
    </div>

    <div>
      <Heading as="h4" size="md" style={{ marginBottom: "1rem" }}>
        With Descriptions
      </Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleSwitch
          id="desc-1"
          labelBefore="Email notifications"
          description="Receive notifications via email"
        />
        <ToggleSwitch
          id="desc-2"
          labelAfter="Push notifications"
          description="Receive push notifications on your device"
          required={true}
        />
      </div>
    </div>

    <div>
      <Heading as="h4" size="md" style={{ marginBottom: "1rem" }}>
        Size Comparison
      </Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleSwitch id="size-sm" size="sm" labelBefore="Small size" defaultChecked={true} />
        <ToggleSwitch id="size-md" size="md" labelBefore="Medium size" defaultChecked={true} />
      </div>
    </div>

    <div>
      <Heading as="h4" size="md" style={{ marginBottom: "1rem" }}>
        Variant Comparison
      </Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleSwitch
          id="var-primary"
          variant="primary"
          labelBefore="Primary variant"
          defaultChecked={true}
        />
        <ToggleSwitch
          id="var-success"
          variant="success"
          labelBefore="Success variant"
          defaultChecked={true}
        />
      </div>
    </div>
  </div>
);
