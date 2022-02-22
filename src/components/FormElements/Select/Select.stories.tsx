import React from "react";
import { Story } from "@storybook/react";
import SelectComponent, { SelectProps } from "./Select";

export default {
  title: "components/Form Elements/Select",
  component: SelectComponent,
  args: {
    size: "md",
    label: "Choose a programming language",
    inline: false,
    id: "programming-language",
    className: "selectStory",
    status: "valid",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    status: {
      control: {
        type: "select",
        options: ["valid", "error"],
      },
    },
    onChange: { action: "value changed" },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<SelectProps> = (args) => (
  <SelectComponent {...args}>
    <option value="rs">Rust</option>
    <option value="js">JavaScript</option>
    <option value="ts">TypeScript</option>
    <option value="go">GoLang</option>
    <option value="python">Python</option>
    <option value="php" disabled>
      PHP
    </option>
  </SelectComponent>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
