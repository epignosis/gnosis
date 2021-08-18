import React from "react";
import faker from "faker";
import userEvent from "@testing-library/user-event";
import Alert from "./Alert";
import { render, screen } from "@test-utils/render";
import { Heading } from "@components";

describe("<Alert>", () => {
  const mockedOnClose = jest.fn();

  it("renders correctly", () => {
    const heading = faker.lorem.word();
    const paragraphTxt = faker.lorem.paragraph();

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

    expect(title).toHaveTextContent(heading);
    expect(paragraph).toHaveTextContent(paragraphTxt);
    userEvent.click(closeLink);
    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Alert type="info" onClose={mockedOnClose}>
        <Heading as="h3" size="md">
          Welcome
        </Heading>
        <p>My content!</p>
      </Alert>,
    );

    expect(container).toMatchSnapshot();
  });
});
