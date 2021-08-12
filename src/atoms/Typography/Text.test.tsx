import React from "react";
import faker from "faker";
import Text from "./Text";
import { render, screen } from "@test-utils/render";

describe("<Text>", () => {
  it("renders correctly", () => {
    const text = faker.lorem.text();
    render(<Text fontSize="md">{text}</Text>);
    const textEl = screen.getByText(text);

    expect(textEl).toHaveTextContent(text);
  });

  it("snapshot", () => {
    const { container } = render(<Text fontSize="md">My content.</Text>);

    expect(container).toMatchSnapshot();
  });
});
