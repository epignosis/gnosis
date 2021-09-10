import React from "react";
import faker from "faker";
import AspectRatio from "./AspectRatio";
import { render, screen } from "@test-utils/render";

describe("<AspectRatio />", () => {
  it("renders correctly", () => {
    const alt = faker.lorem.word();
    const src = faker.image.imageUrl();

    render(
      <AspectRatio ratio={[4, 3]}>
        <img src={src} alt={alt} height="100%" width="100%" />
      </AspectRatio>,
    );
    const img = screen.getByAltText(alt);

    expect(img).toHaveAttribute("src", src);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AspectRatio ratio={[4, 3]}>
        <img
          src="https://d3j0t7vrtr92dk.cloudfront.net/test/1616506869_Def_Course.png"
          alt="An image"
          height="100%"
          width="100%"
        />
      </AspectRatio>,
    );

    expect(container).toMatchSnapshot();
  });
});
