import React from "react";
import { Story } from "@storybook/react";
import FileInputComponent, { FileInputProps } from "./FileInput";

export default {
  title: "components/Form Elements/File Input",
  component: FileInputComponent,
  argTypes: {
    type: {
      control: false,
    },
  },
};

const Template: Story<FileInputProps> = (args) => <FileInputComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "fileInputStory",
  name: "fileInputStory",
  label: "Input label",
};
