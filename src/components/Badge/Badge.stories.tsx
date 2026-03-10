import React from "react";
import { StoryFn } from "@storybook/react";
import Button from "../Button/Button";
import { MessageIconSVG } from "../../icons/";
import Badge, { BadgeProps } from "./Badge";
import { badgeMeta, withBadgeContentArgs, withoutBadgeContentArgs, noContentWithPulseArgs } from "./Badge.meta";

export default { ...badgeMeta, component: Badge };

const Template: StoryFn<BadgeProps> = (args) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ marginRight: 48 }}>
      <Badge {...args} offset={{ top: "2px", right: "-22px" }} />
    </div>
    <div style={{ marginRight: 48 }}>
      <Badge {...args} offset={{ top: "-5px", right: "-5px" }}>
        <Button variant="outline">Button</Button>
      </Badge>
    </div>
    <div style={{ marginRight: 48 }}>
      <Badge {...args} offset={{ top: "-5px", right: "-2px" }}>
        <MessageIconSVG height={32} />
      </Badge>
    </div>
  </div>
);

export const WithBadgeContent = Template.bind({});

WithBadgeContent.args = withBadgeContentArgs;

export const WithoutBadgeContent = Template.bind({});

WithoutBadgeContent.args = withoutBadgeContentArgs;

export const NoContentWithPulse = Template.bind({});
NoContentWithPulse.args = noContentWithPulseArgs;
NoContentWithPulse.storyName = "Without Badge Content With Pulse";
