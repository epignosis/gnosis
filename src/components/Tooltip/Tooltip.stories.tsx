import React, { ReactNode } from "react";
import { Story } from "@storybook/react/types-6-0";
import Tooltip from "./Tooltip";
import { Button } from "@components";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["top", "right", "left", "bottom"],
      },
    },
  },
  decorators: [
    (story: () => ReactNode): JSX.Element => (
      <div style={{ marginTop: 150, display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
};

export const Default: Story = (args) => (
  <div>
    <Tooltip content={<div>This is a tooltip</div>} {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

Default.args = {
  placement: "top",
};
