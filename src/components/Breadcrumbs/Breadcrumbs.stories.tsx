import React from "react";
import { StoryFn } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";
import { breadcrumbsMeta, defaultArgs } from "./Breadcrumbs.meta";

export default { ...breadcrumbsMeta, component: Breadcrumbs };

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = defaultArgs;
