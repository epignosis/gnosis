import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Radio from "../Radio";
import { screen, render } from "@test-utils/render";

describe("<Radio />", () => {
  it("renders properly", () => {
    const labelTxt = faker.random.words();
    const value = faker.random.alphaNumeric();
    render(<Radio id={value} label={labelTxt} value={value} />);

    const radio = screen.getByLabelText(labelTxt);
    const label = screen.getByText(labelTxt);

    expect(radio).toBeInTheDocument();
    expect(label).toHaveTextContent(labelTxt);
  });

  it("renders disabled", () => {
    const labelTxt = faker.random.words();
    const value = faker.random.alphaNumeric();
    render(<Radio id={value} label={labelTxt} value={value} disabled />);

    const radio = screen.getByLabelText(labelTxt);

    expect(radio).toBeDisabled();
  });

  it("gets checked", () => {
    const labelTxt = faker.random.words();
    const value = faker.random.alphaNumeric();
    render(<Radio id={value} label={labelTxt} value={value} />);

    const radio = screen.getByLabelText(labelTxt);

    expect(radio).not.toBeChecked();

    userEvent.click(radio);

    expect(radio).toBeChecked();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Radio
        id="radio-id"
        className="radio-class"
        label="Test label"
        value="testValue"
        containerAttrs={{ id: "container-id", className: "container-class" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline = true`", () => {
    const { container } = render(<Radio id="testId" label="Test label" value="testValue" inline />);

    expect(container).toMatchSnapshot();
  });
});
