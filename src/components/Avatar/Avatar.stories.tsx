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

type Props = AvatarBaseProps & AvatarProps;

export const AvatarImage: Story<Props> = (args) => <Avatar {...args} />;

AvatarImage.args = {
  alt: "John Tsevdos",
  src: "https://plus.talentlms.com/assets/users/user2.png",
};

AvatarImage.argTypes = {
  children: {
    control: false,
  },
  bgColor: {
    control: false,
  },
};

export const IconAvatar: Story<Props> = (args) => <Avatar {...args}>{args.children}</Avatar>;

IconAvatar.args = {
  children: <CertificateSVG />,
};

IconAvatar.argTypes = {
  src: {
    control: false,
  },
  alt: {
    control: false,
  },
};

export const StringAvatar: Story<Props> = (args) => <Avatar {...args}>{args.children}</Avatar>;

StringAvatar.args = {
  children: "JT",
  bgColor: "#FF9C28",
};

StringAvatar.argTypes = {
  ...IconAvatar.argTypes,
};
