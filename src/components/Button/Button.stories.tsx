import React from "react";
import { Story } from "@storybook/react";
import { CalendarSVG } from "../../icons/";
import Button, { ButtonProps } from "./Button";
import { colors } from "@theme/default/colors";

export default {
  title: "Components/Button",
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "success", "primaryLight"],
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
  },
};

const Template: Story<ButtonProps<"button">> = ({ style, ...args }) => (
  <div style={style}>
    <div style={{ marginBottom: 16 }}>
      <Button size="sm" {...args} />
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="link" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Button {...args} />
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="link" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Button size="lg" {...args} />
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="link" />
    </div>
  </div>
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

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {
  color: "primaryLight",
  children: "Primary light",
  style: { background: colors.primary.darker, padding: "1rem 1rem 0" },
};

export const PrimaryDarker = Template.bind({});

PrimaryDarker.args = {
  color: "primaryDarker",
  children: "Primary darker",
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
