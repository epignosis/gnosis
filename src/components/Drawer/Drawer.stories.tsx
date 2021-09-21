import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Button } from "../../";
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

type DrawerArgs = Pick<DrawerProps, "placement" | "showMask"> & {
  headerCloseBtn: boolean;
};

export const Default: Story<DrawerArgs> = (args) => {
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
