import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { Button, Input } from "../../";
import DrawerComponent, { DrawerProps } from "./Drawer";
import { StatusIndicatorType } from "./components/StatusIndicator";

export default {
  title: "components/Drawer",
  component: DrawerComponent,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <DrawerComponent.Root />
        <Story />
      </div>
    ),
  ],
};

type DrawerArgs = Pick<DrawerProps, "placement" | "showMask"> & {
  headerCloseBtn: boolean;
};

export const Default: StoryFn<DrawerArgs> = (args) => {
  const { headerCloseBtn, ...rest } = args;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Drawer</Button>
      <DrawerComponent isOpen={isOpen} onClose={(): void => setIsOpen(false)} {...rest}>
        <DrawerComponent.Header closable={headerCloseBtn}>Drawer title</DrawerComponent.Header>
        <DrawerComponent.Body>
          <div style={{ padding: "2rem" }}>
            <p>Drawer content</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </DrawerComponent.Body>
        <DrawerComponent.Footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={(): void => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>
    </>
  );
};

Default.args = {
  headerCloseBtn: true,
  placement: "left",
  showMask: true,
};

export const MultipleDrawers: StoryFn<DrawerArgs> = (args) => {
  const { headerCloseBtn, ...rest } = args;
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsFirstOpen(true)}>Open First Drawer</Button>

      <DrawerComponent isOpen={isFirstOpen} onClose={(): void => setIsFirstOpen(false)} {...rest}>
        <DrawerComponent.Header closable={headerCloseBtn}>
          First drawer title
        </DrawerComponent.Header>
        <DrawerComponent.Body>
          <div style={{ padding: "2rem" }}>
            <p>First drawer content</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </DrawerComponent.Body>
        <DrawerComponent.Footer>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Button onClick={(): void => setIsFirstOpen(false)}>Close First Drawer</Button>
            <Button onClick={(): void => setIsSecondOpen(true)}>Open Second Drawer</Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>

      <DrawerComponent isOpen={isSecondOpen} onClose={(): void => setIsSecondOpen(false)} {...rest}>
        <DrawerComponent.Header closable={headerCloseBtn}>
          Second drawer title
        </DrawerComponent.Header>
        <DrawerComponent.Body>
          <div style={{ padding: "2rem" }}>
            <Input id="test-input" />
            <p>Second drawer content</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </DrawerComponent.Body>
        <DrawerComponent.Footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={(): void => setIsSecondOpen(false)}>Close Second Drawer</Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>
    </>
  );
};

MultipleDrawers.args = {
  headerCloseBtn: true,
  placement: "left",
  showMask: true,
};

type DrawerWithStatusArgs = Pick<DrawerProps, "placement" | "showMask"> & {
  headerCloseBtn: boolean;
  statusType: StatusIndicatorType;
};

export const WithStatusIndicator: StoryFn<DrawerWithStatusArgs> = (args: DrawerWithStatusArgs) => {
  const { headerCloseBtn, statusType, ...rest } = args;
  const [isOpen, setIsOpen] = useState(false);

  const statusMessages: Record<StatusIndicatorType, string> = {
    success: "The operation was completed successfully.",
    error: "An error occurred while processing your request.",
    info: "Please review the information before proceeding.",
  };

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Drawer with Status</Button>
      <DrawerComponent
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
        status={{
          type: statusType,
          content: statusMessages[statusType],
        }}
        {...rest}
      >
        <DrawerComponent.Header closable={headerCloseBtn}>
          Drawer with Status
        </DrawerComponent.Header>
        <DrawerComponent.Body>
          <div style={{ padding: "2rem" }}>
            <p>This drawer demonstrates the status indicator feature.</p>
            <p>The status indicator appears in the footer above the action buttons.</p>
            <ul>
              <li>Status type: {statusType}</li>
              <li>The indicator shows a colored circular icon</li>
              <li>It displays a message based on the status type</li>
            </ul>
          </div>
        </DrawerComponent.Body>
        <DrawerComponent.Footer>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Button onClick={(): void => setIsOpen(false)}>Save</Button>
            <Button variant="outline" onClick={(): void => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>
    </>
  );
};

WithStatusIndicator.args = {
  headerCloseBtn: true,
  placement: "left",
  showMask: true,
  statusType: "success",
};

WithStatusIndicator.argTypes = {
  statusType: {
    control: {
      type: "select",
    },
    options: ["success", "error", "info"],
  },
};
