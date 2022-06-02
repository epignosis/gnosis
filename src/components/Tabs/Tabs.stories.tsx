import React from "react";
import { Story } from "@storybook/react";
import { Heading } from "../../";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
};

const commonProps = {
  stickyHeader: false,
};

const Template: Story = (args) => (
  <Tabs {...args} style={{ maxWidth: args.maxWidth ?? "100%" }}>
    <Tabs.TabPane title="Completed courses">
      <div style={{ padding: "2rem" }}>
        <Heading>Completed courses</Heading>
        <p>Completed courses content!</p>
      </div>
    </Tabs.TabPane>
    <Tabs.TabPane title="My super points">
      <div style={{ padding: "2rem" }}>
        <Heading>My super points</Heading>
        <p>My super points content!</p>
      </div>
    </Tabs.TabPane>
    <Tabs.TabPane title="My superior level">
      <div style={{ padding: "2rem" }}>
        <Heading>My superior level</Heading>
        <p>My superior level content!</p>
      </div>
    </Tabs.TabPane>
    <Tabs.TabPane title="I have a lot of certifications">
      <div style={{ padding: "2rem" }}>
        <Heading>I have a lot of certifications</Heading>
        <p>I have a lot of certifications content!</p>
      </div>
    </Tabs.TabPane>
  </Tabs>
);

export const Basic = Template.bind({});

Basic.args = {
  ...commonProps,
};

export const Responsive = Template.bind({});

Responsive.args = {
  maxWidth: "500px",
};

export const SelectedTab = Template.bind({});

SelectedTab.args = {
  selectedTab: 1,
};

export const OnChangeTab = Template.bind({});

OnChangeTab.args = {
  ...commonProps,
  selectedTab: 1,
  onChangeTab: (index: number): void => {
    alert(index);
  },
};
