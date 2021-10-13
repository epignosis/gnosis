import React from "react";
import { Story } from "@storybook/react";
import ErrorComponent from "./FormError";

export default {
  title: "components/Form Elements/Form Error",
  component: ErrorComponent,
};

export const FormError: Story = (args) => <ErrorComponent {...args} />;

FormError.args = {
  children: "You entered an incorrect email! Try again or contact your administrator",
};
