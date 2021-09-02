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
    id: "selectStory",
    className: "selectStory",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
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

export const Select: Story<SelectProps> = (args) => (
  <SelectComponent id="programming-language" {...args}>
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
