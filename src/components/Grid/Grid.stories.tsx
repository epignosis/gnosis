import { Story } from "@storybook/react";
import React from "react";
import Grid, { GridProps } from "./Grid";

export default {
  component: Grid,
  title: "Components/Grid",
  argTypes: {
    as: {
      control: {
        type: "select",
        options: ["div", "article", "section"],
      },
    },
  },
  args: {
    templateColumns: [1, 2, 3, 4, 5, 6, 7],
    gap: 2,
    as: "div",
    rowGap: 1,
    columnGap: 0,
    className: "gridStory",
  },
};

export const Simple: Story<GridProps> = (args) => (
  <Grid {...args}>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 1</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 2</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 3</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 4</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 5</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 6</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 7</div>
    <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 8</div>
  </Grid>
);

export const WithCustomGridItems: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Grid.Item colSpan={[1, 2, 1]}>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 1</div>
    </Grid.Item>
    <Grid.Item colSpan={[1, 2, null, null, 1]}>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 2</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 3</div>
    </Grid.Item>
    <Grid.Item rowSpan={[1, 2, null, null, 1]}>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 4</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 5</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 6</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 7</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 8</div>
    </Grid.Item>
    <Grid.Item>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 9</div>
    </Grid.Item>
    <Grid.Item colSpan={[1, 2, 1]}>
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>Item 10</div>
    </Grid.Item>
  </Grid>
);
