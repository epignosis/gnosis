import React, { SVGProps } from "react";
import userEvent from "@testing-library/user-event";
import SegmentedButtons from "../SegmentedButtons";
import { render, screen } from "@test-utils/render";

const MockSvgIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => <svg {...props} />;

const OPTIONS = [
  { label: "Item first", value: "first" },
  { label: "Item second", value: "second" },
];

describe("<SegmentedButtons />", () => {
  it("renders all options as buttons", () => {
    render(<SegmentedButtons options={OPTIONS} value="first" onChange={jest.fn()} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Item first");
    expect(buttons[1]).toHaveTextContent("Item second");
  });

  it("marks the selected option with aria-pressed and is-selected", () => {
    render(<SegmentedButtons options={OPTIONS} value="second" onChange={jest.fn()} />);

    const [first, second] = screen.getAllByRole("button");

    expect(first).toHaveAttribute("aria-pressed", "false");
    expect(second).toHaveAttribute("aria-pressed", "true");
    expect(second).toHaveClass("segmented-buttons__button--selected");
  });

  it("calls onChange with the option value when clicked", async () => {
    const onChange = jest.fn();
    render(<SegmentedButtons options={OPTIONS} value="first" onChange={onChange} />);

    await userEvent.click(screen.getByText("Item second"));

    expect(onChange).toHaveBeenCalledWith("second");
  });

  it("does not call onChange when a disabled option is clicked", async () => {
    const onChange = jest.fn();
    render(
      <SegmentedButtons
        options={[
          { label: "Item first", value: "first" },
          { label: "Item second", value: "second", disabled: true },
        ]}
        value="first"
        onChange={onChange}
      />,
    );

    const second = screen.getByText("Item second").closest("button");
    expect(second).toBeDisabled();

    await userEvent.click(second!);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders icon when provided", () => {
    render(
      <SegmentedButtons
        options={[
          { value: "first", icon: MockSvgIcon },
          { value: "second", icon: MockSvgIcon },
        ]}
        value="first"
        onChange={jest.fn()}
      />,
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveClass("segmented-buttons__button--icon-only");
    expect(buttons[0].querySelector("svg")).toBeInTheDocument();
  });

  it("exposes group role with aria-label", () => {
    render(
      <SegmentedButtons
        options={OPTIONS}
        value="first"
        onChange={jest.fn()}
        ariaLabel="View mode"
      />,
    );

    expect(screen.getByRole("group", { name: "View mode" })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <SegmentedButtons options={OPTIONS} value="first" onChange={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
