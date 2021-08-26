import React from "react";
import userEvent from "@testing-library/user-event";
import { Default as Input, WithIconBefore, WithIconAfter } from "./Input.stories";
import { screen, render } from "@test-utils/render";

describe("<Input />", () => {
  it("renders correctly", () => {
    render(<Input {...Input.args} />);

    const label = screen.getByText("Username");
    const input = screen.getByLabelText("Username");

    expect(label).toHaveTextContent("Username");
    expect(input).toHaveAttribute("placeholder", "Your LMS username");
  });

  it("changes the input's value", () => {
    render(<Input {...Input.args} />);
    const input = screen.getByLabelText("Username");

    userEvent.type(input, "new value");

    expect(input).toHaveValue("new value");

    userEvent.clear(input);

    expect(input).toHaveValue("");
  });

  it("renders with icon before", () => {
    render(<WithIconBefore {...WithIconBefore.args} />);

    const iconBefore = screen.getByTestId(/input-icon-before/i);

    expect(iconBefore).toBeInTheDocument();
  });

  it("renders with icon after", () => {
    render(<WithIconAfter {...WithIconAfter.args} />);

    const iconAfter = screen.getByTestId(/input-icon-after/i);

    expect(iconAfter).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });
});
