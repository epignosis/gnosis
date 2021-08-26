import React from "react";
import { Story } from "@storybook/react";
import ErrorComponent from "./Error";
import { Input } from "@components";

export default {
  title: "components/Form Elements/Error",
  component: ErrorComponent,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Error: Story = () => (
  <ErrorComponent>
    <p>Something went wrong!</p>
  </ErrorComponent>
);

export const InputError: Story = () => (
  <div style={{ maxWidth: 500 }}>
    <Input
      id="inline-error-example"
      label="Attention"
      status="error"
      placeholder="Pay attention to the error below"
    />
    <ErrorComponent.InputError>Some error</ErrorComponent.InputError>
  </div>
);
