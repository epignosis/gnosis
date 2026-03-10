import React from "react";
import { StoryFn } from "@storybook/react";
import ErrorComponent from "./FormError";
import { formErrorMeta, formErrorArgs } from "./FormError.meta";

export default { ...formErrorMeta, component: ErrorComponent };

export const FormError: StoryFn = (args) => <ErrorComponent {...args} />;

FormError.args = formErrorArgs;
