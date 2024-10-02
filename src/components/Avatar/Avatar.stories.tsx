import React from "react";
import { StoryFn } from "@storybook/react";
import { CertificateSVG } from "../../icons/";
import Avatar, { AvatarBaseProps, AvatarProps } from "./Avatar";
import { colors } from "@theme/default/colors";

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

const Template: StoryFn<AvatarBaseProps & AvatarProps> = (args) => <Avatar {...args} />;

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
  bgColor: colors.primary.base,
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
};

StringAvatar.argTypes = {
  ...IconAvatar.argTypes,
};
