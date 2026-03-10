import { StoryFn } from "@storybook/react";
import React from "react";
import Grid, { GridProps } from "./Grid";
import { gridMeta } from "./Grid.meta";

export default { ...gridMeta, component: Grid };

export const Simple: StoryFn<GridProps> = (args) => (
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

export const WithCustomGridItems: StoryFn<GridProps> = (args) => (
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
