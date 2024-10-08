import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Textarea from "./Textarea";
import { screen, render } from "@test-utils/render";

describe("<Textarea />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.random.words();
    render(
      <Textarea
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        name={faker.random.alphaNumeric()}
      />,
    );

    const textarea = screen.getByLabelText(labelTxt);

    expect(textarea).toBeInTheDocument();
  });

  it("renders disabled", async () => {
    const mockFn = jest.fn();
    const labelTxt = faker.random.words();
    render(
      <Textarea
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        name={faker.random.alphaNumeric()}
        disabled
      />,
    );

    const textarea = screen.getByLabelText(labelTxt);

    expect(textarea).toBeDisabled();

    await userEvent.click(textarea);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("changes value", async () => {
    const labelTxt = faker.random.words();
    render(
      <Textarea
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        name={faker.random.alphaNumeric()}
      />,
    );

    const textarea = screen.getByLabelText(labelTxt);

    expect(textarea).toHaveValue("");

    const newValue = faker.lorem.paragraph();
    await userEvent.type(textarea, newValue);

    expect(textarea).toHaveValue(newValue);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Textarea
        id="my-textarea-id"
        className="textarea-class"
        label="Test textarea"
        name="test"
        containerAttrs={{ id: "textarea-container-id", className: "textarea-container-class" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
