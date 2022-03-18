import React from "react";
import { faker } from "@faker-js/faker";
import Badge from "./Badge";
import { render, screen } from "@test-utils/render";

describe("<Badge />", () => {
  it("renders correctly with badge content", () => {
    const badgeTxt = faker.lorem.word();

    render(<Badge badgeContent="5">{badgeTxt}</Badge>);
    const content = screen.getByText(badgeTxt);
    const badgeContent = screen.getByText("5");

    expect(content).toHaveTextContent(badgeTxt);
    expect(badgeContent).toHaveTextContent("5");
  });

  it("renders correctly without badge content", () => {
    const badgeTxt = faker.lorem.word();

    render(<Badge>{badgeTxt}</Badge>);
    const content = screen.getByText(badgeTxt);

    expect(content).toHaveTextContent(badgeTxt);
  });

  it("matches snapshot with badge content", () => {
    const { container } = render(
      <Badge
        id="my-id"
        className="my-class"
        size="md"
        offset={{ top: "10px", right: "10px" }}
        badgeContent="5"
      >
        Messages
      </Badge>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot without badge content", () => {
    const { container } = render(
      <Badge id="my-id" className="my-class" size="md" offset={{ top: "10px", right: "10px" }}>
        Messages
      </Badge>,
    );

    expect(container).toMatchSnapshot();
  });
});
