import React from "react";
import { Error, InputError } from "./Error.stories";
import { render, screen } from "@test-utils/render";

describe("Forms: <Error />", () => {
  it("render correctly", () => {
    render(<Error />);
    const errorContainer = screen.getByText("Something went wrong!");

    expect(errorContainer).toHaveTextContent("Something went wrong!");
  });

  it("matches snapshot", () => {
    const { container } = render(<Error />);

    expect(container).toMatchSnapshot();
  });
});

describe("Forms: <Error.InputError />", () => {
  it("renders correctly", () => {
    render(<InputError />);
    const errorSpan = screen.getByText("Some error");

    expect(errorSpan).toHaveTextContent("Some error");
  });

  it("matches snapshot", () => {
    const { container } = render(<InputError />);

    expect(container).toMatchSnapshot();
  });
});
