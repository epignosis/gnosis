import React from "react";
import { Beacon } from "./Beacon";
import { render, screen } from "@test-utils/render";

describe("<Beacon />", () => {
  it("renders children and beacon", () => {
    render(
      <Beacon>
        <span data-testid="child">Test Child</span>
      </Beacon>,
    );
    const child = screen.getByTestId("child");
    const beacon = document.querySelector(".beacon-content .beacon");
    expect(child).toHaveTextContent("Test Child");
    expect(beacon).toBeInTheDocument();
  });

  it("renders with left placement and custom offsets", () => {
    render(
      <Beacon placement="left" offsetX={0.25} offsetY={0.25}>
        <span>Left Child</span>
      </Beacon>,
    );
    const child = screen.getByText("Left Child");
    expect(child).toBeInTheDocument();
    // Style assertions can be added with jest-emotion or snapshot
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Beacon>
        <span>Snapshot Child</span>
      </Beacon>,
    );
    expect(container).toMatchSnapshot();
  });

  it("does not render beacon when isBeaconVisible is false", () => {
    render(
      <Beacon isBeaconVisible={false}>
        <span>No Beacon</span>
      </Beacon>,
    );
    const beacon = document.querySelector(".beacon-content .beacon");
    expect(beacon).not.toBeInTheDocument();
  });

  it("applies correct styles for right placement and default offset", () => {
    render(
      <Beacon placement="right" offsetX={0} offsetY={0}>
        <span>Styled Child</span>
      </Beacon>,
    );
    const beacon = document.querySelector(".beacon-content .beacon") as HTMLElement;
    const computed = window.getComputedStyle(beacon);
    //Beacon size
    expect(computed.height).toBe("1rem");
    expect(computed.width).toBe("1rem");

    //Beacon starting position
    expect(computed.right).toBe("0px");
    expect(computed.top).toBe("0px");

    // Check transform contains expected translate for right placement
    expect(computed.transform).toContain("translate(0rem, calc(-1 * 0rem)) translate(50%, -50%)");
  });

  it("applies correct styles for left placement and custom offset", () => {
    render(
      <Beacon placement="left" offsetX={0.25} offsetY={0.25}>
        <span>Styled Left Child</span>
      </Beacon>,
    );
    const beacon = document.querySelector(".beacon-content .beacon") as HTMLElement;
    const computed = window.getComputedStyle(beacon);
    //Beacon size
    expect(computed.height).toBe("1rem");
    expect(computed.width).toBe("1rem");

    //Beacon starting position
    expect(computed.left).toBe("0px");
    expect(computed.top).toBe("0px");

    // Check transform contains expected translate for left placement with custom offset
    expect(computed.transform).toContain(
      "translate(calc(-1 * 0.25rem), calc(-1 * 0.25rem)) translate(-50%, -50%)",
    );
  });
});
