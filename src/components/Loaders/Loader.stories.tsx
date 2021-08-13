import React from "react";
import { Story } from "@storybook/react";
import Loader, { LoaderProps } from "./Loader";

export default {
  component: Loader,
  title: "Components/Loader",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
  args: {
    size: "md",
    fullScreen: false,
  },
};

export const Deafult: Story<LoaderProps> = ({ ...args }): JSX.Element => <Loader {...args} />;
