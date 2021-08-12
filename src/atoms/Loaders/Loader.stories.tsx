import React from "react";
import Loader from "./Loader";

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

export const Load = ({ ...args }): JSX.Element => <Loader {...args} />;
