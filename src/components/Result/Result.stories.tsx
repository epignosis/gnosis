import React from "react";
import { StoryFn } from "@storybook/react";
import { Button } from "../../";
import { WarningSVG } from "../../icons/";
import Result, { ResultProps } from "./Result";
import { resultMeta, defaultArgs } from "./Result.meta";

export default { ...resultMeta, component: Result };

const Template: StoryFn<ResultProps> = (args) => <Result {...args} />;

export const Default = Template.bind({});

Default.args = { ...defaultArgs, icon: WarningSVG };

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

export const InfoAsString = Template.bind({});
InfoAsString.args = {
  ...Default.args,
  info: "This is a simple info string",
};

export const InfoAsJSX = Template.bind({});
InfoAsJSX.args = {
  ...Default.args,
  info: (
    <>
      <div>This is a JSX element used as info.</div>
      <div>This is a second JSX element used as info.</div>
    </>
  ),
};
