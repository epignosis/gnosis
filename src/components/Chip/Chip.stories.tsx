import React from "react";
import { StoryFn } from "@storybook/react";
import { BranchesFilterSVG } from "../../icons";
import Chip, { ChipProps } from "./Chip";
import { chipMeta, defaultArgs, customArgs, filtersArgs } from "./Chip.meta";

export default { ...chipMeta, component: Chip };

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

// Story for default chip
export const Default = Template.bind({});

Default.args = defaultArgs;

// Story for custom chip
export const Custom = Template.bind({});

Custom.args = customArgs;

// Story for filters chip
export const Filters = Template.bind({});

Filters.args = { ...filtersArgs, icon: BranchesFilterSVG };
