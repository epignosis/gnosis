import React from "react";
import faker from "faker";
import Breadcrumb from "./Breadcrumb";
import { render, screen } from "@test-utils/render";

describe("<Breadcrumb> and <Breadcrumb.Item>", () => {
  beforeEach(() => {
    const breadcrumbContainer = document.createElement("div");
    breadcrumbContainer.setAttribute("id", "breadcrumb");
    document.body.appendChild(breadcrumbContainer);
  });

  afterEach(() => {
    const breadcrumbContainer = document.querySelector("#breadcrumb") as HTMLElement;
    breadcrumbContainer.remove();
  });

  it("renders correctly", () => {
    const item1 = faker.unique(faker.lorem.word);
    const item2 = faker.unique(faker.lorem.word);
    const item3 = faker.unique(faker.lorem.word);
    const item1Url = faker.unique(faker.internet.url);
    const item2Url = faker.unique(faker.internet.url);
    const breadcrumbContainer = document.body.querySelector("#breadcrumb");

    render(
      <Breadcrumb breadcrumbEl={breadcrumbContainer as HTMLElement} separator="/">
        <Breadcrumb.Item>
          <a href={item1Url}>{item1}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href={item2Url}>{item2}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item current> {item3}</Breadcrumb.Item>
      </Breadcrumb>,
    );

    const breadcrumb = screen.getByLabelText(/breadcrumbs/i);

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toBeVisible();
    expect(breadcrumb).toHaveTextContent(item1);
    expect(breadcrumb).toHaveTextContent(item2);
    expect(breadcrumb).toHaveTextContent(item3);
    expect(screen.getByText(item1)).toHaveAttribute("href", item1Url);
    expect(screen.getByText(item2)).toHaveAttribute("href", item2Url);
  });

  it("matches snapshot", () => {
    const breadcrumbContainer = document.body.querySelector("#breadcrumb");
    render(
      <Breadcrumb breadcrumbEl={breadcrumbContainer as HTMLElement} separator="/">
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
