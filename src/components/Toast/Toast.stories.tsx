import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../../index";
import ToastNotification from "./ToastNotifications";

export default {
  title: "Components/Toast Notifications",
  component: ToastNotification,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
    },
    onClose: { action: "closed" },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

interface ToastStoryArgs {
  content: string;
  type: "info" | "success" | "warning" | "error";
  onClose?: () => void;
}

const Template: StoryFn<ToastStoryArgs> = (args: ToastStoryArgs) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {!isVisible && <Button onClick={() => setIsVisible(true)}>Show Toast</Button>}
      {isVisible && <ToastNotification {...args} onClose={() => setIsVisible(false)} />}
    </div>
  );
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  content: "This is an informational message",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  content: "Operation completed successfully!",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  content: "Please be careful with this action",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  content: "An error occurred while processing your request",
};
