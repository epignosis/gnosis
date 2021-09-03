import React, { useState } from "react";
import { Story } from "@storybook/react";
import DateInputComponent, { DateInputProps } from "./DateInput";

export default {
  title: "components/Form Elements/Date Input",
  component: DateInputComponent,
  args: {
    id: "dateInput",
    label: "Date of birth",
    size: "md",
    inline: false,
    className: "dateInputStory",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    value: {
      control: {
        type: "date",
      },
    },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const DateInput: Story<DateInputProps> = (args) => {
  const [date, setDate] = useState(new Date());

  return <DateInputComponent {...args} value={date} onChange={setDate} />;
};
