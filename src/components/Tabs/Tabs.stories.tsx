import React from "react";
import { Story } from "@storybook/react";
import Heading from "../Heading/Heading";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
};

const tabs = [
  {
    title: "Completed courses",
    content: (
      <div style={{ padding: "2rem" }}>
        <Heading>Completed courses</Heading>
        <p>Completed courses content!</p>
      </div>
    ),
  },
  {
    title: "My super points",
    content: (
      <div style={{ padding: "2rem" }}>
        <Heading>My super points</Heading>
        <p>My super points content!</p>
      </div>
    ),
  },
  {
    title: "My superior level",
    content: (
      <div style={{ padding: "2rem" }}>
        <Heading>My superior level</Heading>
        <p>My superior level content!</p>
      </div>
    ),
  },
  {
    title: "I have a lot of certifications",
    content: (
      <div style={{ padding: "2rem" }}>
        <Heading>I have a lot of certifications</Heading>
        <p>I have a lot of certifications content!</p>
      </div>
    ),
  },

  {
    title: "I should not be displayed",
    content: undefined,
  },
];

const Template: Story = (args) => {
  return <Tabs {...args} tabs={tabs} />;
};

export const Basic = Template.bind({});

const commonProps = {
  selectedTab: 0,
  stickyHeader: false,
  onChangeTab: (index: number): void => {
    // eslint-disable-next-line no-console
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
    <Tabs {...args} tabs={tabs} />
  </div>
);

export const Responsive = ResponsiveTemplate.bind({});

Responsive.args = {
  ...commonProps,
};

export const withOptionalTabs = Template.bind({});

SelectedTab.args = {
  ...commonProps,
  selectedTab: 0,
};
