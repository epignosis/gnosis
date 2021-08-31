import React from "react";
import { Story } from "@storybook/react";
import TextareaComponent, { TextareaProps } from "./Textarea";

export default {
  title: "components/Form Elements/Textarea",
  component: TextareaComponent,
  args: {
    label: "Description",
    altLabel: false,
    placeholder: "Type some description",
    resize: "none",
    status: "valid",
    id: "textareaStory",
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
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export const Textarea: Story<TextareaProps> = (args) => (
  <TextareaComponent id="description" {...args} />
);
