import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { Button } from "../../index";
import ToastNotification from "./ToastNotifications";
import { toastMeta, infoArgs, successArgs, warningArgs, errorArgs } from "./Toast.meta";

export default { ...toastMeta, component: ToastNotification };

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
Info.args = infoArgs;

export const Success = Template.bind({});
Success.args = successArgs;

export const Warning = Template.bind({});
Warning.args = warningArgs;

export const Error = Template.bind({});
Error.args = errorArgs;
