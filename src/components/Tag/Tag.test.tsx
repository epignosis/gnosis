import React from "react";
import { faker } from "@faker-js/faker";
import Tag from "./Tag";
import { render, screen } from "@test-utils/render";

describe("<Tag />", () => {
  it("renders", () => {
    const tagTxt = faker.lorem.word();
    render(<Tag>{tagTxt}</Tag>);

    const tag = screen.getByText(tagTxt);

    expect(tag).toHaveTextContent(tagTxt);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Tag id="tag-1" className="tag" style={{ backgroundColor: "purple", color: "white" }}>
        This is a tag
      </Tag>,
    );

    expect(container).toMatchSnapshot();
  });
});
