import React from "react";
import { StoryFn } from "@storybook/react";
import LabelComponent, { LabelProps } from "./Label";
import { labelMeta, labelArgs } from "./Label.meta";

export default { ...labelMeta, component: LabelComponent };

export const Label: StoryFn<LabelProps> = (args) => <LabelComponent {...args} />;

Label.args = labelArgs;
