import React from "react";
import { faker } from "@faker-js/faker";
import { userEvent } from "@testing-library/user-event";
import { Heading } from "../../";
import { ScrollRegularSVG } from "../../icons/";
import Alert from "./Alert";
import { render, screen } from "@test-utils/render";

describe("<Alert>", () => {
  it("renders correctly", async () => {
    const heading = faker.lorem.word();
    const paragraphTxt = faker.lorem.paragraph();
    const mockedOnClose = jest.fn();
    render(
      <Alert type="info" onClose={mockedOnClose}>
        <Heading as="h3" size="md">
          {heading}
        </Heading>
        <p>{paragraphTxt}</p>
      </Alert>,
    );
    const title = screen.getByText(heading);
    const paragraph = screen.getByText(paragraphTxt);
    const closeLink = screen.getByRole("button");
    const icon = screen.getByTestId("icon");

    expect(title).toHaveTextContent(heading);
    expect(paragraph).toHaveTextContent(paragraphTxt);
    expect(icon).toBeInTheDocument();
    await userEvent.click(closeLink);
    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders correctly with custom icon", () => {
    render(
      <Alert type="info" icon={ScrollRegularSVG}>
        {faker.lorem.paragraph()}
      </Alert>,
    );
    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Alert id="alert" className="my-class" type="info">
        <Heading as="h3" size="md">
          Welcome
        </Heading>
        <p>My content!</p>
      </Alert>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with custom icon", () => {
    const { container } = render(
      <Alert type="info" icon={ScrollRegularSVG}>
        <p>My content!</p>
      </Alert>,
    );

    expect(container).toMatchSnapshot();
  });
});
