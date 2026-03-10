import React from "react";
import { StoryFn } from "@storybook/react";
import Loader, { LoaderProps } from "./Loader";
import { loaderMeta, clipLoaderArgs } from "./Loader.meta";

export default { ...loaderMeta, component: Loader };

const Template: StoryFn<LoaderProps> = ({ ...args }): JSX.Element => <Loader {...args} />;

export const PulseLoader = Template.bind({});

export const ClipLoader = Template.bind({});

ClipLoader.args = clipLoaderArgs;
