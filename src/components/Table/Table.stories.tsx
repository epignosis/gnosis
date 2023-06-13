import React from "react";
import { Story } from "@storybook/react";
import { IconEmptyStateSVG } from "../../icons/";
import Table, { Props } from "./Table";

export default {
  component: Table,
  title: "Components/Table",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    columns: [
      { accessor: "id", cell: "Code", classNames: ["id"] },
      { accessor: "description", cell: "Description", classNames: ["description"] },
      { accessor: "name", cell: "Name", classNames: ["name"] },
      { accessor: "category", cell: "Category", classNames: ["category"] },
    ],
    rows: [
      {
        id: 271,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Test",
        category: "Test",
        code: "Test",
      },
      { id: 272, description: "Test", name: "Test", category: "Test", code: "Test" },
      { id: 273, description: "Test", name: "Test", category: "Test", code: "Test" },
      { id: 274, description: "Test", name: "Test", category: "Test", code: "Test" },
    ],
    emptyState: {
      title: "No results found with these criteria",
      info: "Please try again or",
      callbackInfo: "Restore to default",
      icon: IconEmptyStateSVG,
      callbackFn: () => window.alert("Hello"),
    },
  },
};

const Template: Story<Props> = (args) => (
  <>
    <Table {...args} />
  </>
);

export const Default = Template.bind({});

export const WithSorting = Template.bind({});

WithSorting.args = {
  sortable: true,
  sorting: { column: "id", isDescending: true },
};

export const WithRowSelection = Template.bind({});

WithRowSelection.args = {
  selectable: true,
};

export const WithoutData = Template.bind({});

WithoutData.args = {
  rows: [],
};
