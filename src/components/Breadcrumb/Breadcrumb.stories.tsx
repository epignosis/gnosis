import React from "react";
import { Story } from "@storybook/react";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";

export default {
  component: Breadcrumb,
  title: "Components/Breadcrumb",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const breadcrumbPortal = document.createElement("div");
breadcrumbPortal.setAttribute("id", "breadcrumb");
document.body.appendChild(breadcrumbPortal);

export const OneBreadcrumb: Story<BreadcrumbProps> = (args) => {
  return (
    <Breadcrumb {...args}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
  );
};

OneBreadcrumb.args = {
  breadcrumbEl: breadcrumbPortal,
  separator: "/",
};

export const MultipleBreadcrumbs: Story<BreadcrumbProps> = (args) => {
  return (
    <Breadcrumb {...args}>
      <Breadcrumb.Item>
        <a href="#">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Catalog</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item current> My courses</Breadcrumb.Item>
    </Breadcrumb>
  );
};

MultipleBreadcrumbs.args = {
  breadcrumbEl: breadcrumbPortal,
  separator: "/",
};
