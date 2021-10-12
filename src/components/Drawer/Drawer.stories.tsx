import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Button } from "../../";
import { DrawerProps } from "./components/Dialog";
import DrawerComponent from "./Drawer";

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
    (Story: Story): JSX.Element => (
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

export const Default: Story<DrawerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [is2Open, set2IsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Drawer</Button>
      <DrawerComponent {...args} onClose={(): void => setIsOpen(false)} isOpen={isOpen}>
        <DrawerComponent.Header closable={!!args.onClose}>Drawer title</DrawerComponent.Header>
        <DrawerComponent.Body>
          <div style={{ padding: "2rem" }}>
            <p>Drawer content</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <Button onClick={(): void => set2IsOpen(true)}>Open Drawer</Button>
        </DrawerComponent.Body>
        <DrawerComponent.Footer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={(): void => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>
      <DrawerComponent {...args} id="test" onClose={(): void => set2IsOpen(false)} isOpen={is2Open}>
        <DrawerComponent.Header closable={!!args.onClose}>Drawer title</DrawerComponent.Header>
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
            <Button onClick={(): void => set2IsOpen(false)}>Close Drawer</Button>
          </div>
        </DrawerComponent.Footer>
      </DrawerComponent>
    </>
  );
};

Default.args = {
  id: "drawer-story",
  placement: "left",
};
