import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { Button, Input } from "../../";
import DrawerComponent, { DrawerProps } from "./Drawer";

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
  placement: "left",
  showMask: true,
};
