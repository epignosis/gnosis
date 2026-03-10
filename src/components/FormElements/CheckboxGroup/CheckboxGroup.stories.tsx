import React from "react";
import { StoryFn } from "@storybook/react";
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";
import { checkboxGroupMeta } from "./CheckboxGroup.meta";

export default { ...checkboxGroupMeta, component: CheckboxGroup };

export const Group: StoryFn<CheckboxGroupProps> = (args) => <CheckboxGroup {...args} />;
