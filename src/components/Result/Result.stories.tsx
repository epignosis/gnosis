import React from "react";
import { StoryFn } from "@storybook/react";
import { Button } from "../../";
import { WarningSVG } from "../../icons/";
import Result, { ResultProps } from "./Result";

export default {
  title: "Components/Result",
  component: Result,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
};

const Template: StoryFn<ResultProps> = (args) => <Result {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: WarningSVG,
  size: "md",
  title: "This course has no content",
  info: "This course is still under construction and will be ready soon",
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  ...Default.args,
  footer: <Button>Go back to dashboard</Button>,
};

export const WithImage = Template.bind({});

WithImage.args = {
  ...Default.args,
  icon: "https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png",
};

export const WithBorder = Template.bind({});

WithBorder.args = {
  ...Default.args,
  hasBorder: true,
};
