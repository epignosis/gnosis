import React from "react";
import { StoryFn } from "@storybook/react";
import { CalendarSVG } from "../../icons/";
import Button, { ButtonProps } from "./Button";
import {
  buttonMeta,
  primaryArgs,
  secondaryArgs,
  dangerArgs,
  successArgs,
  primaryLightArgs,
  primaryDarkerArgs,
  orangeArgs,
  whiteArgs,
} from "./Button.meta";

export default { ...buttonMeta, component: Button };

const Template: StoryFn<ButtonProps<"button">> = ({ style, ...args }) => (
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

Primary.args = primaryArgs;

export const Secondary = Template.bind({});

Secondary.args = secondaryArgs;

export const Danger = Template.bind({});

Danger.args = dangerArgs;

export const Success = Template.bind({});

Success.args = successArgs;

export const PrimaryLight = Template.bind({});

PrimaryLight.args = primaryLightArgs;

export const PrimaryDarker = Template.bind({});

PrimaryDarker.args = primaryDarkerArgs;

export const Orange = Template.bind({});

Orange.args = orangeArgs;

const WhiteTemplate: StoryFn<ButtonProps<"button">> = ({ style, ...args }) => (
  <>
    <div style={{ marginBottom: 16 }}>
      <div style={style}>
        <Button size="sm" {...args} />
      </div>
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button size="sm" {...args} variant="link" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <div style={style}>
        <Button {...args} />
      </div>
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button {...args} variant="link" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <div style={style}>
        <Button size="lg" {...args} />
      </div>
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="outline" />
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="ghost" />
      <span style={{ marginRight: 16 }} />
      <Button size="lg" {...args} variant="link" />
    </div>
  </>
);

export const White = WhiteTemplate.bind({});

White.args = whiteArgs;

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
