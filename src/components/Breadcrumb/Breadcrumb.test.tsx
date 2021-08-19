import React from "react";
import faker from "faker";
import Breadcrumb from "./Breadcrumb";
import { render, screen } from "@test-utils/render";

describe("<Breadcrumb> and <Breadcrumb.Item>", () => {
  const breadcrumbPortal = document.createElement("div");
  breadcrumbPortal.setAttribute("id", "breadcrumb");
  document.body.appendChild(breadcrumbPortal);

  const item1 = faker.lorem.word();
  const item2 = faker.lorem.word();
  const item3 = faker.lorem.word();
  const item1Url = faker.internet.url();
  const item2Url = faker.internet.url();

  it("renders correctly", () => {
    render(
      <Breadcrumb breadcrumbEl={breadcrumbPortal} separator="/">
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
    const { container } = render(
      <Breadcrumb breadcrumbEl={breadcrumbPortal} separator="/">
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
});
