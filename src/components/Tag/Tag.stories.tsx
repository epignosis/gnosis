import React from "react";
import { StoryFn } from "@storybook/react";
import Tag, { TagProps } from "./Tag";
import { tagMeta, defaultArgs, customArgs } from "./Tag.meta";

export default { ...tagMeta, component: Tag };

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = defaultArgs;

export const Custom = Template.bind({});

Custom.args = customArgs;
