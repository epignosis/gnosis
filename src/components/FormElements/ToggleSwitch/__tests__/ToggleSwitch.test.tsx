import React from "react";
import ToggleSwitch from "../ToggleSwitch";
import { render, fireEvent, screen } from "@test-utils/render";

describe("<ToggleSwitch />", () => {
  it("Matches snapshot", () => {
    const { container } = render(<ToggleSwitch id="my-toggle" labelledById="text-id" />);
    expect(container).toMatchSnapshot();
  });

  it("Toggle is  on", () => {
    render(<ToggleSwitch id="my-toggle" />);
    const toggle = screen.getByTestId("switch");
    let toggleState = toggle.getAttribute("data-checked");

    expect(toggleState).toBe("false");
    fireEvent.click(toggle);
    toggleState = toggle.getAttribute("data-checked");
    expect(toggleState).toBe("true");
  });

  it("Toggle is on and off", () => {
    render(<ToggleSwitch id="my-toggle" />);
    const toggle = screen.getByTestId("switch");
    let toggleState = toggle.getAttribute("data-checked");

    fireEvent.click(toggle);
    toggleState = toggle.getAttribute("data-checked");
    expect(toggleState).toBe("true");
    fireEvent.click(toggle);
    toggleState = toggle.getAttribute("data-checked");
    expect(toggleState).toBe("false");
  });
});
