import React from "react";
import { Label } from "./Label.stories";
import { render, screen } from "@test-utils/render";

describe("<Label />", () => {
  it("renders correctly", () => {
    render(<Label />);

    const label = screen.getByText("This is an input label");

    expect(label).toHaveTextContent("This is an input label");
  });

  it("matches snapshot", () => {
    const { container } = render(<Label />);

    expect(container).toMatchSnapshot();
  });
});
