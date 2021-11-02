import React from "react";
import { Story } from "@storybook/react";
import { toast } from "react-toastify";
import { Heading, Button } from "../../";
import Toaster from "./Toaster";
import { InfoSVG, DangerSVG, SuccessSVG, WarningSVG } from "@icons/index";

export default {
  component: Toaster,
  title: "Components/Toaster",
};

const ICONS = {
  info: <InfoSVG height={56} />,
  error: <DangerSVG height={56} />,
  success: <SuccessSVG height={56} />,
  warning: <WarningSVG height={56} />,
};

const publishToast = (type: string): void => {
  toast[type](
    <>
      {ICONS[type]}
      <div>
        <Heading size="md">Test</Heading>
        <span>Feature not available</span>
      </div>
    </>,
    { hideProgressBar: true },
  );
};

const Template: Story = () => (
  <>
    <Toaster />
    <div style={{ margin: "0 0 1rem" }}>
      <Button onClick={(): void => publishToast("info")}>Info toast</Button>
    </div>
    <div style={{ margin: "0 0 1rem" }}>
      <Button onClick={(): void => publishToast("success")}>Success toast</Button>
    </div>
    <div style={{ margin: "0 0 1rem" }}>
      <Button onClick={(): void => publishToast("warning")}>Warning toast</Button>
    </div>
    <div style={{ margin: "0 0 1rem" }}>
      <Button onClick={(): void => publishToast("error")}>Error toast</Button>
    </div>
  </>
);

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
