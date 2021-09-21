import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { Button } from "../../";
import Tooltip, { TooltipProps } from "./Tooltip";

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
    as: {
      control: {
        type: "select",
        options: ["div", "span"],
      },
    },
  },
  decorators: [
    (story: () => ReactNode): JSX.Element => (
      <div style={{ marginTop: 150, display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
};

export const Default: Story<TooltipProps> = (args) => (
  <div>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

Default.args = {
  placement: "top",
  content: "This is a tooltip",
  as: "div",
};
