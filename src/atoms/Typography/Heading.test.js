import React from "react";
import Heading from "./Text";
import { render, screen } from "@test-utils/render";

describe("<Heading>", () => {
  it("renders correctly", () => {
    render(<Heading as="h1">My super title</Heading>);
    const h1 = screen.getByText(/my super title/i);

    expect(h1).toHaveTextContent("My super title");
  });
});
