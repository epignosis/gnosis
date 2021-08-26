import React from "react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea.stories";
import { screen, render } from "@test-utils/render";

describe("<Textarea />", () => {
  it("renders correctly", () => {
    render(<Textarea {...Textarea.args} />);

    const textarea = screen.getByLabelText("Description");

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("placeholder", "Type some description");
  });

  it("changes value", () => {
    render(<Textarea {...Textarea.args} />);

    const textarea = screen.getByLabelText("Description");

    expect(textarea).toHaveValue("");

    userEvent.type(textarea, "Test value");

    expect(textarea).toHaveValue("Test value");
  });

  it("matches snapshot", () => {
    const { container } = render(<Textarea {...Textarea.args} />);

    expect(container).toMatchSnapshot();
  });
});
