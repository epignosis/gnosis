import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import RadioButton from "../RadioButton";
import { screen, render } from "@test-utils/render";

describe("<RadioButton />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.lorem.words();
    render(
      <RadioButton
        label={labelTxt}
        index={0}
        size="md"
        value={faker.random.alphaNumeric()}
        selectedValue=""
        onClick={jest.fn()}
      />,
    );

    const button = screen.getByText(labelTxt);

    expect(button).toHaveTextContent(labelTxt);
  });

  it("fires the onClick handler", () => {
    const mockOnClick = jest.fn();
    const labelTxt = faker.lorem.words();
    const value = faker.random.alphaNumeric();
    render(
      <RadioButton
        label={labelTxt}
        index={0}
        size="md"
        value={value}
        selectedValue=""
        onClick={mockOnClick}
      />,
    );

    const button = screen.getByText(labelTxt);

    userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenLastCalledWith(value);
  });

  it("matches snapshot with `size = md`", () => {
    const { container } = render(
      <RadioButton
        id="my-radio-id"
        className="my-radio-class"
        label="Test label"
        index={0}
        size="md"
        value="testValue"
        selectedValue=""
        onClick={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `size = lg`", () => {
    const { container } = render(
      <RadioButton
        label="Test label"
        index={0}
        size="lg"
        value="testValue"
        selectedValue=""
        onClick={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
