import React from "react";
import { StoryFn } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
  argTypes: {
    items: [
      { label: "Reports", href: "/" },
      { label: "Course Reports", href: "/reports/course" },
      { label: "Introduction to TLMS+", href: "" },
    ],
  },
};

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { label: "Reports", href: "/" },
    { label: "Course Reports", href: "/reports/course" },
    { label: "Introduction to TLMS+", href: "" },
  ],
};

export const WithEmptyLinks = Template.bind({});

WithEmptyLinks.args = {
  items: [
    { label: "Reports", href: "" },
    { label: "Course Reports", href: "" },
    { label: "Introduction to TLMS+", href: "" },
  ],
};
