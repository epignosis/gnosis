import React from "react";
import { StoryFn } from "@storybook/react";
import Text, { TextProps } from "./Text";
import { textMeta, defaultArgs } from "./Text.meta";

export default { ...textMeta, component: Text };

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = defaultArgs;
