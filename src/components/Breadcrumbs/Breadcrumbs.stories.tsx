import React from "react";
import { StoryFn } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
  argTypes: {
    items: {
      control: "object",
      description: "List of all breadcrumb items",
    },
    highlightActivePage: {
      control: "boolean",
      description: "Last item gets inactive and highlighted (black color)",
    },
    navAriaLabel: {
      control: "text",
      description: "Aria label for the nav element",
    },
    linkAriaLabel: { control: "none", description: "Aria label for the link element" },
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
