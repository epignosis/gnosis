import React from "react";
import { Story } from "@storybook/react";
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

export const Label: Story<LabelProps> = (args) => (
  <LabelComponent {...args}>This is an input label</LabelComponent>
);

Label.args = {
  size: "md",
};
