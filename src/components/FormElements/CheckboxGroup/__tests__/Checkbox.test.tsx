import React from "react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "../Checkbox.stories";
import { render, screen } from "@test-utils/render";

describe("<Checkbox />", () => {
  it("renders correctly", () => {
    render(<Checkbox {...Checkbox.args} />);

    const inputs = screen.getAllByRole("checkbox");

    expect(inputs).toHaveLength(4);
    expect(inputs[0]).toHaveAttribute("name", "all");
    expect(inputs[1]).toHaveAttribute("name", "progress");
    expect(inputs[2]).toHaveAttribute("name", "completed");
    expect(inputs[3]).toHaveAttribute("name", "failed");

    expect(inputs[0]).toHaveAttribute("id", "all");
    expect(inputs[1]).toHaveAttribute("id", "progress");
    expect(inputs[2]).toHaveAttribute("id", "completed");
    expect(inputs[3]).toHaveAttribute("id", "failed");

    expect(inputs[0]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();
    expect(inputs[3]).not.toBeChecked();

    expect(inputs[1]).toBeDisabled();
  });

  it("changes from un-checked to checked on click", () => {
    render(<Checkbox {...Checkbox.args} />);

    const label = screen.getByText("All");
    const input = screen.getByLabelText("All");

    expect(input).not.toBeChecked();

    userEvent.click(input);

    expect(input).toBeChecked();

    userEvent.click(label);

    expect(input).not.toBeChecked();
  });

  // it("is disabled", () => {
  //   render(<Checkbox {...Checkbox.args} />);

  //   const label = screen.getByText("In progress");
  //   const input = screen.getByLabelText("In progress");

  //   expect(input).not.toBeChecked();

  //   userEvent.click(label);

  //   expect(input).not.toBeChecked();
  // });

  // it("matches snapshot with `md` size", () => {
  //   const { container } = render(<Checkbox {...Checkbox.args} />);

  //   expect(container).toMatchSnapshot();
  // });

  // it("matches snapshot with `lg` size", () => {
  //   const { container } = render(
  //     <Checkbox size="lg" id="testId" label="Test label" name="testName" value="testValue" />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });

  // it("matches snapshot with `inline` = true", () => {
  //   const { container } = render(
  //     <Checkbox id="testId" label="Test label" name="testName" value="testValue" inline />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });
});
