import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Checkbox from "../Checkbox";
import { render, screen } from "@test-utils/render";

describe("<Checkbox />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.lorem.word();
    const id = faker.random.alphaNumeric();
    const name = faker.random.alphaNumeric();
    render(<Checkbox id={id} label={labelTxt} name={name} value="testValue" />);

    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(label).toHaveTextContent(labelTxt);
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("id", id);
    expect(input).not.toBeChecked();
  });

  it("changes from un-checked to checked on click", () => {
    const labelTxt = faker.lorem.word();
    const id = faker.random.alphaNumeric();
    const name = faker.random.alphaNumeric();
    render(
      <Checkbox id={id} label={labelTxt} name={name} value="testValue" onChange={jest.fn()} />,
    );

    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(input).not.toBeChecked();

    userEvent.click(input);

    expect(input).toBeChecked();

    userEvent.click(label);

    expect(input).not.toBeChecked();
  });

  it("is disabled", () => {
    const labelTxt = faker.lorem.word();
    const id = faker.random.alphaNumeric();
    const name = faker.random.alphaNumeric();
    render(<Checkbox id={id} label={labelTxt} name={name} value="testValue" disabled />);

    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(input).not.toBeChecked();

    userEvent.click(label);

    expect(input).not.toBeChecked();
  });

  it("matches snapshot with `md` size", () => {
    const { container } = render(
      <Checkbox
        id="my-id"
        className="checkbox"
        label="Test label"
        name="testName"
        value="testValue"
        containerAttrs={{
          id: "my-container-id",
          className: "container-class",
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `lg` size", () => {
    const { container } = render(
      <Checkbox size="lg" id="testId" label="Test label" name="testName" value="testValue" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline` = true", () => {
    const { container } = render(
      <Checkbox id="testId" label="Test label" name="testName" value="testValue" inline />,
    );

    expect(container).toMatchSnapshot();
  });
});
