import React from "react";
import { Story } from "@storybook/react";
import InputErrorComponent, { InputErrorProps } from "./InputError";

export default {
  title: "components/Form Elements/Input Error",
  component: InputErrorComponent,
};

export const InputError: Story<InputErrorProps> = (args) => <InputErrorComponent {...args} />;

InputError.args = {
  children: "Incorrect field! Try adding a number...",
  as: "div",
};
