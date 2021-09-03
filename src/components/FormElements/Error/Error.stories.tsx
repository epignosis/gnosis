import React from "react";
import { Story } from "@storybook/react";
import ErrorComponent from "./Error";
import { Input } from "@components";

export default {
  title: "components/Form Elements/Error",
  component: ErrorComponent,
};

export const Error: Story = (args) => <ErrorComponent {...args} />;

Error.args = {
  children: "You entered an incorrect email! Try again or contact your administrator",
};

export const InputError: Story = (args) => (
  <div style={{ maxWidth: 500 }}>
    <Input
      id="inline-error-example"
      label="Attention"
      status="error"
      placeholder="Pay attention to the error below"
    />
    <ErrorComponent.InputError {...args} />
  </div>
);

InputError.args = {
  children: "Some error",
};
