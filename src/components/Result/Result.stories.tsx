import React from "react";
import { Story } from "@storybook/react";
import { Button } from "../../";
import Result, { ResultProps } from "./Result";
import { InfoSVG } from "@icons/core";

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

export const Default: Story<ResultProps> = (args) => <Result {...args} />;

Default.args = {
  icon: InfoSVG,
  size: "md",
  title: "This course has no content",
  info: "This course is still under construction and will be ready soon",
};

export const WithFooter: Story<ResultProps> = (args) => <Result {...args} />;

WithFooter.args = {
  ...Default.args,
  footer: <Button>Go back to dashboard</Button>,
};
