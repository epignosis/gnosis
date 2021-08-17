import React from "react";
import faker from "faker";
import Error from "./Error";
import { render, screen } from "@test-utils/render";

describe("Forms: <Error />", () => {
  it("render correctly", () => {
    const txt = faker.lorem.sentence();
    render(<Error>{txt}</Error>);
    const errorContainer = screen.getByText(txt);

    expect(errorContainer).toHaveTextContent(txt);
  });

  it("matches snapshot", () => {
    const { container } = render(<Error>Something went wrong</Error>);

    expect(container).toMatchSnapshot();
  });
});

describe("Forms: <Error.InputError />", () => {
  it("renders correctly", () => {
    const txt = faker.lorem.sentence();
    render(<Error.InputError>{txt}</Error.InputError>);
    const errorSpan = screen.getByText(txt);

    expect(errorSpan).toHaveTextContent(txt);
  });

  it("matches snapshot", () => {
    const { container } = render(<Error.InputError>Something went wrong</Error.InputError>);

    expect(container).toMatchSnapshot();
  });
});
