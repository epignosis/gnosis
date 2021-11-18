import React from "react";
import faker from "faker";
import Badge from "./Badge";
import { render, screen } from "@test-utils/render";

describe("<Badge />", () => {
  it("renders correctly", () => {
    const badgeTxt = faker.lorem.word();
    render(<Badge>{badgeTxt}</Badge>);
    const content = screen.getByText(badgeTxt);

    expect(content).toHaveTextContent(badgeTxt);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Badge id="my-id" className="my-class" size="md" offset={{ top: "10px", right: "10px" }}>
        Messages
      </Badge>,
    );

    expect(container).toMatchSnapshot();
  });
});
