import React from "react";
import { Story } from "@storybook/react";
import Tabs from "./Tabs";
import { Heading } from "@components";

export default {
  title: "Components/Tabs",
};

const commonProps = {
  stickyHeader: false,
};

const Template: Story = (args) => (
  <Tabs {...args}>
    <Tabs.TabPane title="Completed courses" fallbackTitle="aa">
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
