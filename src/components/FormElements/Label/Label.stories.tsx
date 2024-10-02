import React from "react";
import { StoryFn } from "@storybook/react";
import LabelComponent, { LabelProps } from "./Label";

export default {
  title: "components/Form Elements/Label",
  component: LabelComponent,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export const Label: StoryFn<LabelProps> = (args) => <LabelComponent {...args} />;

Label.args = {
  size: "md",
  children: "This is an input label",
};
