import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Avatar from "./Avatar";
import { CertificateSVG } from "@icons/core";

export default {
  component: Avatar,
  title: "Components/Avatar",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
  args: {
    size: "sm",
  },
};

export const AvatarImage: Story = (args) => (
  <Avatar src="https://plus.talentlms.com/assets/users/user2.png" alt="John Tsevdos" {...args} />
);

export const IconAvatar: Story = (args) => (
  <Avatar {...args}>
    <CertificateSVG />
  </Avatar>
);

export const StringAvatar: Story = (args) => <Avatar {...args}>JT</Avatar>;
