import React from "react";
import { render, screen } from "@test-utils/render";
import { Button } from "@atoms";

describe("<Button />", () => {
  it("renders correclty", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");

    // console.log(button);

    expect(button).toHaveTextContent("Button");
    // expect(button).toHaveAttribute("type");
    expect(button).not.toBeDisabled();
  });
});
