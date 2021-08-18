import React from "react";
import { Story } from "@storybook/react";
import InputComponent, { InputProps } from "./Input";
import { CalendarSVG } from "@icons/core";

export default {
  title: "components/Form Elements/Input",
  component: InputComponent,
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
  },
  args: {
    size: "md",
    placeholder: "Your LMS username",
    label: "Username",
    altLabel: false,
    status: "valid",
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<InputProps> = (args) => <InputComponent id="story-input" {...args} />;

export const Default = Template.bind({});

export const WithIconBefore = Template.bind({});

WithIconBefore.args = {
  iconBefore: CalendarSVG,
};

export const WithIconAfter = Template.bind({});

WithIconAfter.args = {
  iconAfter: CalendarSVG,
};
