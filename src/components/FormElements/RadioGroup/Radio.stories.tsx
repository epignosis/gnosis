import React from "react";
import { Story } from "@storybook/react";
import RadioComponent, { RadioProps } from "./Radio";

export default {
  title: "components/Form Elements/Radio/Radio",
  component: RadioComponent,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

export const Radio: Story<RadioProps> = (args) => <RadioComponent {...args} />;

Radio.args = {
  label: "All",
  value: "all",
  id: "all",
};
