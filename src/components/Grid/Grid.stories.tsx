import { Story } from "@storybook/react";
import React from "react";
import Grid from "./Grid";

export default {
  component: Grid,
  title: "Components/Grid",
};

export const Simple: Story = () => (
  <Grid templateColumns={[1, 2, 3, 4, 5]} gap={2}>
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

Simple.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const WithCustomGridItems: Story = () => (
  <Grid templateColumns={[1, 2, 3, 4, 5]} gap={2}>
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

WithCustomGridItems.parameters = {
  controls: { hideNoControlsWarning: true },
};
