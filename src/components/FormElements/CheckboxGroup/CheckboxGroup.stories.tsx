import React from "react";
import { Story } from "@storybook/react";
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";

export default {
  title: "components/Form Elements/Checkbox/Group",
  component: CheckboxGroup,
  args: {
    size: "md",
    inline: false,
    initialValues: [],
    groupname: "Hobbies",
    options: [
      {
        label: "Writing",
        value: "writing",
        name: "writing",
      },
      {
        label: "Reading",
        value: "reading",
        name: "reading",
      },
      {
        label: "Playing basketball",
        value: "playingBasketball",
        name: "playingBasketball",
      },
      {
        label: "Watching documentaries",
        value: "watchingDocumentaries",
        name: "watchingDocumentaries",
      },
      {
        label: "Coding",
        value: "coding",
        name: "coding",
      },
      {
        label: "Video games",
        value: "videoGames",
        name: "videoGames",
      },
    ],
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
    initialValues: {
      control: {
        type: "multi-select",
        options: [
          "writing",
          "coding",
          "videoGames",
          "reading",
          "playingBasketball",
          "watchingDocumentaries",
        ],
      },
    },
  },
};

export const Group: Story<CheckboxGroupProps> = (args) => <CheckboxGroup {...args} />;
