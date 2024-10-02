import React from "react";
import { StoryFn } from "@storybook/react";
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
    type: {
      control: {
        type: "select",
        options: ["pulse", "clip"],
      },
    },
  },
  args: {
    size: "md",
    fullScreen: false,
  },
};

const Template: StoryFn<LoaderProps> = ({ ...args }): JSX.Element => <Loader {...args} />;

export const PulseLoader = Template.bind({});

export const ClipLoader = Template.bind({});

ClipLoader.args = {
  type: "clip",
};
