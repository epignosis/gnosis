import React from "react";
import { StoryFn } from "@storybook/react";
import Heading, { HeadingProps, SIZES } from "./Heading";
import { headingMeta, h1Args, h2Args, h3Args, h4Args, h5Args, h6Args } from "./Heading.meta";

export default { ...headingMeta, component: Heading };

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});

H1.args = h1Args;

export const H2 = Template.bind({});

H2.args = h2Args;

export const H3 = Template.bind({});

H3.args = h3Args;

export const H4 = Template.bind({});

H4.args = h4Args;

export const H5 = Template.bind({});

H5.args = h5Args;

export const H6 = Template.bind({});

H6.args = h6Args;
