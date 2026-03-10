import React from "react";
import { StoryFn } from "@storybook/react";
import TextareaComponent, { TextareaProps } from "./Textarea";
import { textareaMeta, disabledArgs, withRequiredArgs, withRowsArgs } from "./Textarea.meta";

export default { ...textareaMeta, component: TextareaComponent };

const Template: StoryFn<TextareaProps> = (args) => <TextareaComponent {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = disabledArgs;

export const WithRequired = Template.bind({});

WithRequired.args = withRequiredArgs;

export const WithRows = Template.bind({});

WithRows.args = withRowsArgs;
