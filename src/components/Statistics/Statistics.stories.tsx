import React from "react";
import { Story } from "@storybook/react";
import Avatar from "../Avatar/Avatar";
import Statistics, { StatisticsProps } from "./Statistics";

export default {
  component: Statistics,
  title: "Components/Statistics",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<StatisticsProps> = (args) => <Statistics {...args} />;

export const Default = Template.bind({});

Default.args = {
  statNumber: 100,
  title: "Courses not started",
};

export const WithJsxElement = Template.bind({});

WithJsxElement.args = {
  statNumber: (
    <Avatar size="sm" bgColor="#1B68B3">
      10
    </Avatar>
  ),
  title: "Completed assignments",
};

export const WithSubtitle = Template.bind({});

WithSubtitle.args = {
  statNumber: 100,
  title: "Courses not started",
  subtitle: (
    <div className="last-login-dif">
      <div className="difference">+10</div>
      <div>since last week</div>
    </div>
  ),
};
