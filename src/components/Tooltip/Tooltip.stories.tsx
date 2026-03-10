import React, { ReactNode } from "react";
import { StoryFn } from "@storybook/react";
import { Button } from "../../";
import Tooltip, { TooltipProps } from "./Tooltip";
import {
  tooltipMeta,
  defaultArgs,
  withMaxWidthArgs,
  withNoArrowArgs,
  withBorderColorArgs,
} from "./Tooltip.meta";

export default { ...tooltipMeta, component: Tooltip };

export const Default: StoryFn<TooltipProps> = (args) => (
  <div>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

Default.args = defaultArgs;

export const WithMaxWidth = Default.bind({});

WithMaxWidth.args = withMaxWidthArgs;

export const WithNoArrow = Default.bind({});

WithNoArrow.args = withNoArrowArgs;

export const WithBorderColor = Default.bind({});

WithBorderColor.args = withBorderColorArgs;
