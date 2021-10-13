import React from "react";
import { Story } from "@storybook/react";
import Avatar, { AvatarBaseProps, AvatarProps } from "./Avatar";
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
    className: "avatarStory",
  },
};

const Template: Story<AvatarBaseProps & AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarImage = Template.bind({});

AvatarImage.args = {
  alt: "John Doe",
  src: "https://talentlms-prod-frontend-static.s3.amazonaws.com/images/default_user_avatar.png",
};

AvatarImage.argTypes = {
  children: {
    control: false,
  },
  bgColor: {
    control: false,
  },
};

export const IconAvatar = Template.bind({});

IconAvatar.args = {
  children: <CertificateSVG />,
  bgColor: "#1B68B3",
};

IconAvatar.argTypes = {
  src: {
    control: false,
  },
  alt: {
    control: false,
  },
};

export const StringAvatar = Template.bind({});

StringAvatar.args = {
  children: "JT",
  bgColor: "#FF9C28",
};

StringAvatar.argTypes = {
  ...IconAvatar.argTypes,
};
