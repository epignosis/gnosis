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

export const OneBreadcrumb: Story<BreadcrumbProps> = () => {
  return (
    <Breadcrumb breadcrumbEl={breadcrumbPortal} separator="/">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export const MultipleBreadcrumbs: Story<BreadcrumbProps> = () => {
  return (
    <Breadcrumb breadcrumbEl={breadcrumbPortal} separator="/">
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
