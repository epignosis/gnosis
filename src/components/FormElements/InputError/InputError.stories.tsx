import React from "react";
import { StoryFn } from "@storybook/react";
import InputErrorComponent, { InputErrorProps } from "./InputError";

export default {
  title: "components/Form Elements/Input Error",
  component: InputErrorComponent,
};

export const InputError: StoryFn<InputErrorProps> = (args) => <InputErrorComponent {...args} />;

InputError.args = {
  children: "Incorrect field! Try adding a number...",
  as: "div",
};
