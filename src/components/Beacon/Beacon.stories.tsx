import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Button from "../Button/Button";
import { Beacon, type BeaconProps } from "./Beacon";

const meta: Meta<typeof Beacon> = {
  title: "Components/Beacon",
  component: Beacon,
  argTypes: {
    placement: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    offsetX: { control: { type: "number" } },
    offsetY: { control: { type: "number" } },
    children: { control: false },
    isBeaconVisible: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

const Template: StoryFn<BeaconProps> = (args) => (
  <Beacon {...args}>
    <Button>Beacon Target</Button>
  </Beacon>
);

export const Default = Template.bind({});
Default.args = {
  placement: "right",
  offsetX: 0,
  offsetY: 0,
  isBeaconVisible: true,
};

export const LeftPlacementWithCustomOffset = Template.bind({});
LeftPlacementWithCustomOffset.args = {
  placement: "left",
  offsetX: 0.25,
  offsetY: 0.25,
};

export const HiddenBeacon = Template.bind({});
HiddenBeacon.args = {
  placement: "right",
  offsetX: 0,
  offsetY: 0,
  isBeaconVisible: false,
};
