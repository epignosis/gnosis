import React from "react";
import { StoryFn } from "@storybook/react";
import InputErrorComponent, { InputErrorProps } from "./InputError";
import { inputErrorMeta, inputErrorArgs } from "./InputError.meta";

export default { ...inputErrorMeta, component: InputErrorComponent };

export const InputError: StoryFn<InputErrorProps> = (args) => <InputErrorComponent {...args} />;

InputError.args = inputErrorArgs;
