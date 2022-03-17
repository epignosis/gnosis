import React from "react";
import { faker } from "@faker-js/faker";
import Grid from "./Grid";
import { render, screen } from "@test-utils/render";

describe("<Grid />", () => {
  it("renders correctly", () => {
    const paragraph = faker.lorem.paragraph();
    const { container } = render(
      <Grid templateColumns={5}>
        <Grid.Item>{paragraph}</Grid.Item>
        <Grid.Item>{paragraph}</Grid.Item>
        <Grid.Item>{paragraph}</Grid.Item>
        <Grid.Item>{paragraph}</Grid.Item>
        <Grid.Item>{paragraph}</Grid.Item>
      </Grid>,
    );

    const paragraphElements = screen.getAllByText(paragraph);

    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
    expect(paragraphElements).toHaveLength(5);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Grid id="grid-container-1" className="container" templateColumns={5}>
        <Grid.Item id="grid-item-1" className="grid-item">
          Test element
        </Grid.Item>
        <Grid.Item id="grid-item-2" className="grid-item">
          Test element
        </Grid.Item>
        <Grid.Item id="grid-item-3" className="grid-item">
          Test element
        </Grid.Item>
        <Grid.Item id="grid-item-4" className="grid-item">
          Test element
        </Grid.Item>
        <Grid.Item id="grid-item-5" className="grid-item">
          Test element
        </Grid.Item>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });
});
