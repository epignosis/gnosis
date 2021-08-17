import React from "react";
import { Story } from "@storybook/react";
import AspectRatio, { AspectRatioProps } from "./AspectRatio";

export default {
  title: "Components/AspectRatio",
  component: AspectRatio,
};

export const Default: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <img
      src="https://d3j0t7vrtr92dk.cloudfront.net/test/1616506869_Def_Course.png?"
      alt="An image"
      height="100%"
      width="100%"
    />
  </AspectRatio>
);

Default.args = {
  ratio: [4, 3],
};

Default.parameters = {
  viewport: {
    defaultViewport: "xs",
  },
};
