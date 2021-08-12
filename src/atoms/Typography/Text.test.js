import React from "react";
import Text from "./Text";
import { render, screen } from "@test-utils/render";

describe("<Text>", () => {
  it("renders correctly", () => {
    render(<Text>My content.</Text>);
    const textEl = screen.getByText(/my content/i);

    expect(textEl).toHaveTextContent("My content.");
  });
});
