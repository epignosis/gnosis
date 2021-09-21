import React from "react";
import { Story } from "@storybook/react";
import { WithBothBtns } from "../Pagination/Pagination.stories";
import { PaginationProps } from "../Pagination/Pagination";
import Table, { TableProps } from "./Table";

export default {
  title: "components/Table",
  component: Table,
};

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      Header: "Language",
      accessor: "language",
      // eslint-disable-next-line react/display-name
      Cell: ({ value }): JSX.Element => <span>~ {value} ~</span>,
    },
    {
      Header: "Love level",
      accessor: "love_level",
    },
    {
      Header: "Awesomeness",
      accessor: "awesomeness",
    },
    {
      Header: "Favorite framework",
      accessor: "favorite_framework",
    },
    {
      accessor: "action",
      disableSortBy: true,
    },
  ],
  data: [
    {
      language: "Rust",
      love_level: "To infinity and beyond!",
      awesomeness: "Super awesome",
      favorite_framework: (
        <a href="https://github.com/tokio-rs/tokio" target="_blank" rel="noreferrer">
          tokio-rs/tokio
        </a>
      ),
      action: <button>&hearts;&hearts;&hearts;</button>,
    },
    {
      language: "Typescript",
      love_level: "Much love",
      awesomeness: "Such maze",
      favorite_framework: (
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
      ),
      action: <button>&hearts;&hearts;&hearts;</button>,
    },
    {
      language: "PHP",
      love_level: "You'll find no such thing here",
      awesomeness: "Dino awesome",
      favorite_framework: "None",
      action: "No action...",
    },
    {
      language: "Rust",
      love_level: "To infinity and beyond!",
      awesomeness: "Super awesome",
      favorite_framework: (
        <a href="https://github.com/tokio-rs/tokio" target="_blank" rel="noreferrer">
          tokio-rs/tokio
        </a>
      ),
      action: <button>&hearts;&hearts;&hearts;</button>,
    },
    {
      language: "Typescript",
      love_level: "Much love",
      awesomeness: "Such maze",
      favorite_framework: (
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
      ),
      action: <button>&hearts;&hearts;&hearts;</button>,
    },
    {
      language: "PHP",
      love_level: "You'll find no such thing here",
      awesomeness: "Dino awesome",
      favorite_framework: "None",
      action: "No action...",
    },
  ],
};

Default.argTypes = {
  footer: {
    control: false,
  },
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  ...Default.args,
  footer: <WithBothBtns {...(WithBothBtns.args as PaginationProps)} />,
};
