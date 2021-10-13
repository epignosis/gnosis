import React from "react";
import faker from "faker";
import Error from "./FormError";
import { render, screen } from "@test-utils/render";

describe("Forms: <FormError />", () => {
  it("render correctly", () => {
    const txt = faker.lorem.sentence();
    render(<Error>{txt}</Error>);
    const errorContainer = screen.getByText(txt);

    expect(errorContainer).toHaveTextContent(txt);
  });

  it("matches snapshot", () => {
    const { container } = render(<Error>Something went wrong</Error>);

    expect(container).toMatchSnapshot();
  });
});
