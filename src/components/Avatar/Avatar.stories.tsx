import React from "react";
import { StoryFn } from "@storybook/react";
import { CertificateSVG } from "../../icons/";
import Avatar, { AvatarBaseProps, AvatarProps } from "./Avatar";
import { colors } from "@theme/default/colors";
import { avatarMeta, avatarImageArgs, stringAvatarArgs } from "./Avatar.meta";

export default { ...avatarMeta, component: Avatar };

const Template: StoryFn<AvatarBaseProps & AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarImage = Template.bind({});

AvatarImage.args = avatarImageArgs;

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

StringAvatar.args = stringAvatarArgs;

StringAvatar.argTypes = {
  ...IconAvatar.argTypes,
};
