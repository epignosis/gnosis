import React from "react";
import faker from "faker";
import Heading from "./Heading";
import { render, screen } from "@test-utils/render";

describe("<Heading>", () => {
  it("renders correctly", () => {
    const title = faker.lorem.sentence();
    render(<Heading as="h1">{title}</Heading>);
    const h1 = screen.getByText(title);

    expect(h1).toHaveTextContent(title);
  });

  it("snapshot", () => {
    const { container } = render(<Heading as="h1">My title</Heading>);

    expect(container).toMatchSnapshot();
  });
});
