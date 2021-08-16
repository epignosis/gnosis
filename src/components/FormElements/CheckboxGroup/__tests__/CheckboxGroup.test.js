import React from "react";
import userEvent from "@testing-library/user-event";
import CheckBoxGroup from "../CheckboxGroup";
import { render, screen } from "@test-utils/render";

const OPTIONS = [
  {
    label: "Writing",
    value: "writing",
    name: "writing",
  },
  {
    label: "Reading",
    value: "reading",
    name: "reading",
  },
  {
    label: "Playing basketball",
    value: "playingBasketball",
    name: "playingBasketball",
  },
];

describe("<CheckBoxGroup />", () => {
  it("renders correctly", () => {
    render(<CheckBoxGroup groupname="Test group" options={OPTIONS} />);

    const inputs = screen.getAllByRole("checkbox");
    const legendCheck = inputs[0];

    expect(inputs).toHaveLength(4); // 3 options and 1 the parent option
    expect(legendCheck).toHaveProperty("name", "Test group");
    expect(inputs[1]).toHaveProperty("name", "writing");
    expect(inputs[2]).toHaveProperty("name", "reading");
    expect(inputs[3]).toHaveProperty("name", "playingBasketball");
    expect(legendCheck).not.toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();
    expect(inputs[3]).not.toBeChecked();
  });

  it("renders with checked initial values", () => {
    render(
      <CheckBoxGroup
        groupname="Test group"
        options={OPTIONS}
        initialValues={["writing", "reading"]}
      />,
    );

    const writingInput = screen.getByLabelText(/writing/i);
    const readingInput = screen.getByLabelText(/reading/i);
    const basketballInput = screen.getByLabelText(/playing basketball/i);

    expect(writingInput).toBeChecked();
    expect(readingInput).toBeChecked();
    expect(basketballInput).not.toBeChecked();
  });

  it("renders with a disabled checkbox", () => {
    render(
      <CheckBoxGroup
        groupname="Test group"
        options={[
          ...OPTIONS,
          {
            label: "Disabled checkbox",
            name: "disabled-check",
            value: "disabledCheck",
            disabled: true,
          },
        ]}
      />,
    );

    const disabledCheck = screen.getByLabelText(/disabled checkbox/i);
    const disabledCheckLabel = screen.getByText(/disabled checkbox/i);

    expect(disabledCheck).not.toBeChecked();

    userEvent.click(disabledCheckLabel);

    expect(disabledCheck).not.toBeChecked();
  });

  it("renders with mixed checked", () => {
    render(<CheckBoxGroup groupname="Test group" options={OPTIONS} initialValues={["writing"]} />);

    const legendCheck = screen.getByLabelText(/test group/i);
    const writingInput = screen.getByLabelText(/writing/i);
    const readingInput = screen.getByLabelText(/reading/i);
    const basketballInput = screen.getByLabelText(/playing basketball/i);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "mixed");
    expect(writingInput).toBeChecked();
    expect(readingInput).not.toBeChecked();
    expect(basketballInput).not.toBeChecked();
  });

  it("checks one input and then un-checks it", () => {
    render(<CheckBoxGroup groupname="Test group" options={OPTIONS} />);

    const legendCheck = screen.getByLabelText(/test group/i);
    const writingInput = screen.getByLabelText(/writing/i);

    expect(legendCheck).not.toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "false");
    expect(writingInput).not.toBeChecked();

    userEvent.click(writingInput);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "mixed");
    expect(writingInput).toBeChecked();
  });

  it("checks all inputs at once and then un-checks them", () => {
    render(<CheckBoxGroup groupname="Test group" options={OPTIONS} />);

    const legendCheck = screen.getByLabelText(/test group/i);
    const inputs = screen.getAllByRole("checkbox");

    expect(legendCheck).not.toBeChecked();

    userEvent.click(legendCheck);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "true");
    expect(inputs[1]).toBeChecked();
    expect(inputs[2]).toBeChecked();
    expect(inputs[3]).toBeChecked();

    userEvent.click(legendCheck);

    expect(legendCheck).not.toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "false");
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();
    expect(inputs[3]).not.toBeChecked();
  });
});
