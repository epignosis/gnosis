import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
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

  it("changes value", () => {
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
    userEvent.type(textarea, newValue);

    expect(textarea).toHaveValue(newValue);
  });

  it("matches snapshot", () => {
    const { container } = render(<Textarea id="test-textarea" label="Test textarea" name="test" />);

    expect(container).toMatchSnapshot();
  });
});
