import React, { createRef } from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { inputHeight } from "../styles";
import DateInput from "./DateInput";
import { fireEvent, screen, render } from "@test-utils/render";

describe("<DateInput />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.random.words();
    render(<DateInput id={faker.random.alphaNumeric()} label={labelTxt} />);

    const input = screen.getByLabelText(labelTxt);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "date");
  });

  it("renders disabled", () => {
    const labelTxt = faker.random.words();
    render(<DateInput id={faker.random.alphaNumeric()} label={labelTxt} disabled />);

    expect(screen.getByLabelText(labelTxt)).toBeDisabled();
  });

  it("renders required", () => {
    const labelTxt = faker.random.words();
    render(<DateInput id={faker.random.alphaNumeric()} label={labelTxt} required />);

    expect(screen.getByLabelText(labelTxt)).toBeRequired();
  });

  it("changes value", async () => {
    const labelTxt = faker.random.words();
    render(<DateInput id={faker.random.alphaNumeric()} label={labelTxt} />);

    const input = screen.getByLabelText(labelTxt);

    expect(input).toHaveValue("");

    await userEvent.type(input, "2026-10-21");

    expect(input).toHaveValue("2026-10-21");
  });

  it("calls onChange with the new value", () => {
    const onChange = jest.fn();
    render(<DateInput id="date" label="Date" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText("Date"), { target: { value: "2026-10-21" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Date")).toHaveValue("2026-10-21");
  });

  it("passes min and max to the input", () => {
    render(<DateInput id="date" label="Date" min="2026-01-01" max="2026-12-31" />);

    const input = screen.getByLabelText("Date");

    expect(input).toHaveAttribute("min", "2026-01-01");
    expect(input).toHaveAttribute("max", "2026-12-31");
  });

  it("forwards its ref to the input", () => {
    const ref = createRef<HTMLInputElement>();
    render(<DateInput id="date" label="Date" ref={ref} />);

    expect(ref.current).toBe(screen.getByLabelText("Date"));
  });

  it("marks the label when required", () => {
    render(<DateInput id="date" label="Date" required />);

    expect(screen.getByText("Date")).toHaveClass("required");
  });

  it("applies the error status to its container", () => {
    render(<DateInput id="date" label="Date" status="error" />);

    expect(screen.getByLabelText("Date").parentElement).toHaveClass("error");
  });

  it("is inline only when it has a label", () => {
    const { rerender } = render(<DateInput id="date" label="Date" inline />);

    expect(screen.getByLabelText("Date").parentElement).toHaveClass("inline");

    rerender(<DateInput id="date" aria-label="Date" inline />);

    expect(screen.getByLabelText("Date").parentElement).not.toHaveClass("inline");
  });

  it.each(["sm", "md", "lg"] as const)("applies the %s size", (size) => {
    render(<DateInput id="date" label="Date" size={size} />);

    expect(screen.getByLabelText("Date")).toHaveStyle({ height: inputHeight[size] });
  });

  it("matches snapshot", () => {
    const { container } = render(
      <DateInput
        id="my-date-input-id"
        className="date-input-class"
        label="Test date input"
        name="test"
        containerAttrs={{ id: "date-input-container-id", className: "date-input-container-class" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
