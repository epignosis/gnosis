import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { CalendarSVG } from "../../../icons";
import Input from "./Input";
import { screen, render } from "@test-utils/render";

describe("<Input />", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const placeholder = faker.internet.exampleEmail();
    const labelTxt = faker.lorem.word();
    render(
      <Input
        id="test-input"
        name="test-input"
        label={labelTxt}
        placeholder={placeholder}
        value="test"
        onChange={mockFn}
      />,
    );
    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(label).toHaveTextContent(labelTxt);
    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveAttribute("placeholder", placeholder);
    expect(input).toHaveValue("test");
  });

  it("changes the input's value", () => {
    const labelTxt = faker.lorem.word();
    render(<Input id="test-input" name="test-input" label={labelTxt} />);
    const input = screen.getByLabelText(labelTxt);

    userEvent.type(input, "new value");

    expect(input).toHaveValue("new value");

    userEvent.clear(input);

    expect(input).toHaveValue("");
  });

  it("renders icon before", () => {
    const labelTxt = faker.lorem.word();
    render(<Input id="test-input" name="test-input" label={labelTxt} iconBefore={CalendarSVG} />);

    const iconBefore = screen.getByTestId("input-icon-before");

    expect(iconBefore).toBeInTheDocument();
  });

  it("renders icon after", () => {
    const labelTxt = faker.lorem.word();
    render(<Input id="test-input" name="test-input" label={labelTxt} iconAfter={CalendarSVG} />);

    const iconAfter = screen.getByTestId("input-icon-after");

    expect(iconAfter).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Input
        id="my-input-id"
        className="input"
        containerAttrs={{
          id: "container-id",
          className: "container-classname",
        }}
        name="test-input"
        label="Test label"
        iconAfter={CalendarSVG}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
