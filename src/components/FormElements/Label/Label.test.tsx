import React from "react";
import faker from "faker";
import Label from "./Label";
import { render, screen } from "@test-utils/render";

describe("<Label />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.random.alpha();
    render(<Label>{labelTxt}</Label>);

    const label = screen.getByText(labelTxt);

    expect(label).toHaveTextContent(labelTxt);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Label id="my-label" className="horizontal-label">
        Test label
      </Label>,
    );

    expect(container).toMatchSnapshot();
  });
});
