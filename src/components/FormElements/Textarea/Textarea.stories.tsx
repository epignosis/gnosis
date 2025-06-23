import React from "react";
import { StoryFn } from "@storybook/react";
import TextareaComponent, { TextareaProps } from "./Textarea";

export default {
  title: "components/Form Elements/Textarea",
  component: TextareaComponent,
  args: {
    label: "Description",
    id: "textareaInput",
    inline: false,
    placeholder: "Type some description",
    resize: "none",
    status: "valid",
  },
  argTypes: {
    resize: {
      control: {
        type: "select",
        options: ["none", "vertical", "horizontal", "both"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
  },
  decorators: [
    (Story: StoryFn): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<TextareaProps> = (args) => <TextareaComponent {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const WithRequired = Template.bind({});

WithRequired.args = {
  required: true,
};

export const WithRows = Template.bind({});

WithRows.args = {
  rows: 3,
};
