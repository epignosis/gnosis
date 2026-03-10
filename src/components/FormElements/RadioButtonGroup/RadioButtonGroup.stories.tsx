import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import RadioButtonGroupComponent, { RadioGroupProps } from "./RadioButtonGroup";
import { radioButtonGroupMeta } from "./RadioButtonGroup.meta";

export default { ...radioButtonGroupMeta, component: RadioButtonGroupComponent };

export const RadioButtonGroup: StoryFn<RadioGroupProps> = (args) => {
  const [value, setValue] = useState("");
  const updateValue = (val: string) => {
    setValue(val);
  };

  return <RadioButtonGroupComponent {...args} value={value} onChange={updateValue} />;
};
