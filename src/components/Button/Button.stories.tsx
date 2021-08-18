import React from "react";
import { Story } from "@storybook/react";
import Button, { Props } from "./Button";
import { CalendarSVG } from "@icons/core";

export default {
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "danger", "success"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["solid", "ghost"],
      },
    },
  },
  args: {
    disabled: false,
    isLoading: false,
    block: false,
    noGutters: false,
    rounded: false,
    as: "button",
    variant: "solid",
  },
};

const Template: Story<Props> = (args) => (
  <>
    <div style={{ marginBottom: 16 }}>
      <Button {...args} />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Button size="lg" {...args} />
    </div>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  color: "tertiary",
  children: "Tertiary",
};

export const Danger = Template.bind({});

Danger.args = {
  color: "danger",
  children: "Danger",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
  children: "Success",
};

export const WithIconBefore = Template.bind({});

WithIconBefore.args = {
  color: "primary",
  iconBefore: CalendarSVG,
  children: "Icon prefix",
};

export const WithIconAfter = Template.bind({});

WithIconAfter.args = {
  color: "primary",
  iconAfter: CalendarSVG,
  children: "Icon prefix",
};
