import React from "react";
import { faker } from "@faker-js/faker";
import Breadcrumb from "./Breadcrumb";
import { render, screen } from "@test-utils/render";

const getBreadcrumbProps = () => ({
  item1: faker.unique(faker.lorem.word),
  item2: faker.unique(faker.lorem.word),
  item3: faker.unique(faker.lorem.word),
  item1Url: faker.unique(faker.internet.url),
  item2Url: faker.unique(faker.internet.url),
});

describe("<Breadcrumb> and <Breadcrumb.Item>", () => {
  const { item1, item2, item3, item1Url, item2Url } = getBreadcrumbProps();

  it("renders correctly", () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <a href={item1Url}>{item1}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href={item2Url}>{item2}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item current> {item3}</Breadcrumb.Item>
      </Breadcrumb>,
    );

    const firstBreadcrumbLink = screen.getByText(item1);
    const secondBreadcrumbLink = screen.getByText(item2);
    const currentBreadcrumb = screen.getByText(item3);

    expect(firstBreadcrumbLink).toHaveTextContent(item1);
    expect(secondBreadcrumbLink).toHaveTextContent(item2);
    expect(currentBreadcrumb).toHaveTextContent(item3);
    expect(firstBreadcrumbLink).toHaveAttribute("href", item1Url);
    expect(secondBreadcrumbLink).toHaveAttribute("href", item2Url);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Breadcrumb id="main-nav" className="navigation" separator="/">
        <Breadcrumb.Item>
          <a href="#/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#/my-courses">My courses</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item current> My super course</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly in portal", () => {
    const breadcrumbContainer = document.createElement("div");
    breadcrumbContainer.setAttribute("id", "breadcrumb");
    document.body.appendChild(breadcrumbContainer);

    render(
      <Breadcrumb breadcrumbEl={breadcrumbContainer} separator="/">
        <Breadcrumb.Item>
          <a href="#/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#/my-courses">My courses</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item current> My super course</Breadcrumb.Item>
      </Breadcrumb>,
    );
    const breadcrumbs = screen.getByLabelText("breadcrumbs");

    expect(breadcrumbs).toMatchSnapshot();
  });
});
