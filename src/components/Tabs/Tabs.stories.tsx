import React from "react";
import { Story } from "@storybook/react";
import { Heading } from "../../";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
};

const Template: Story = (args) => (
  <Tabs {...args}>
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

const commonProps = {
  selectedTab: 0,
  stickyHeader: false,
  onChangeTab: (index: number): void => {
    console.log(index);
  },
};

Basic.args = {
  ...commonProps,
};

export const SelectedTab = Template.bind({});

SelectedTab.args = {
  ...commonProps,
  selectedTab: 2,
};

export const OnChangeTab = Template.bind({});

OnChangeTab.args = {
  ...commonProps,
  onChangeTab: (index: number): void => {
    alert(`You selected tab ${index} (zero index)`);
  },
};

const ResponsiveTemplate: Story = (args) => (
  <div style={{ maxWidth: "500px", border: "1px solid red" }}>
    <Tabs {...args}>
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
  </div>
);

export const Responsive = ResponsiveTemplate.bind({});

Responsive.args = {
  ...commonProps,
};
