import React from "react";
import { Story } from "@storybook/react";
import Button from "../Button/Button";
import { MessageIconSVG } from "../../icons/";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md"],
      },
    },
  },
};

const Template: Story<BadgeProps> = (args) => (
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

WithBadgeContent.args = {
  offset: {
    right: "-15px",
    top: "-7px",
  },
  children: "Notifications",
  size: "md",
  badgeContent: "5",
};

export const WithoutBadgeContent = Template.bind({});

WithoutBadgeContent.args = {
  offset: {
    right: "-8px",
    top: "0px",
  },
  children: "Notifications",
  size: "md",
};
