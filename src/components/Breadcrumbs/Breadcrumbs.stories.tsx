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
    highlightActivePage: { control: "boolean" },
    navAriaLabel: { control: "text" },
    linkAriaLabel: { control: "none" },
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
  navAriaLabel: "Breadcrumb navigation",
  highlightActivePage: false,
};
