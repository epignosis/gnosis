import React from "react";
import { Story } from "@storybook/react";
import ErrorComponent from "./Error";

export default {
  title: "components/Form Elements/Error",
  component: ErrorComponent,
};

export const Error: Story = (args) => <ErrorComponent {...args} />;

Error.args = {
  children: "You entered an incorrect email! Try again or contact your administrator",
};
