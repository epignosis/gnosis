export const avatarMeta = {
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

export const avatarImageArgs = {
  alt: "John Doe",
  src: "https://talentlms-prod-frontend-static.s3.amazonaws.com/images/default_user_avatar.png",
};
export const stringAvatarArgs = { children: "JT" };
