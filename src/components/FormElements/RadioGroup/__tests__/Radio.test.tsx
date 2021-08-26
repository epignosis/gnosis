import React from "react";
import userEvent from "@testing-library/user-event";
import { Radio } from "../Radio.stories";
import { screen, render } from "@test-utils/render";

describe("<Radio />", () => {
  it("renders properly", () => {
    render(<Radio {...Radio.args} />);

    const radio = screen.getByLabelText("All");
    const label = screen.getByText("All");

    expect(radio).toBeInTheDocument();
    expect(label).toHaveTextContent("All");
  });

  it("renders disabled", () => {
    render(<Radio disabled {...Radio.args} />);

    const radio = screen.getByLabelText("All");

    expect(radio).toBeDisabled();
  });

  it("gets checked", () => {
    render(<Radio {...Radio.args} />);

    const radio = screen.getByLabelText("All");

    expect(radio).not.toBeChecked();

    userEvent.click(radio);

    expect(radio).toBeChecked();
  });

  it("matches snapshot", () => {
    const { container } = render(<Radio {...Radio.args} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline = true`", () => {
    const { container } = render(<Radio {...Radio.args} inline />);

    expect(container).toMatchSnapshot();
  });
});
