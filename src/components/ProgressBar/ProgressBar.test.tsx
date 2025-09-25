import React from "react";
import { faker } from "@faker-js/faker";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@test-utils/render";

describe("<ProgressBar />", () => {
  it("renders correctly", () => {
    const progressPercentage = faker.datatype.number(100);

    render(<ProgressBar percent={progressPercentage} />);
    const percentage = screen.getByTestId("percentage");

    // Remove RTL mark for comparison
    const text = percentage.textContent?.replace(/\u200f/g, "");
    expect(text).toBe(`${progressPercentage}%`);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <ProgressBar id="my-progress-1" className="progress" percent={75} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with zero percent", () => {
    const { container } = render(<ProgressBar percent={0} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom radius", () => {
    const { container } = render(<ProgressBar percent={75} borderRadius="0 6px 6px 0" />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom text", () => {
    const progressPercentage = faker.datatype.number(75);

    render(<ProgressBar percent={progressPercentage} customText="3/4" />);
    const percentage = screen.getByTestId("percentage");

    expect(percentage).toHaveTextContent("3/4");
  });

  it("renders correctly with percentage after", () => {
    const progressPercentage = faker.datatype.number(100);

    render(<ProgressBar percent={progressPercentage} percentageAfter />);
    const percentage = screen.getByTestId("percentage");

    // Remove RTL mark for comparison
    const text = percentage.textContent?.replace(/\u200f/g, "");
    expect(text).toBe(`${progressPercentage}%`);
  });

  it("renders correctly with custom text and percentage after", () => {
    const progressPercentage = faker.datatype.number(75);

    render(<ProgressBar percent={progressPercentage} customText="3/4" percentageAfter />);
    const percentage = screen.getByTestId("percentage");

    expect(percentage).toHaveTextContent("3/4");
  });

  it("does not render percentage for percent < 0", () => {
    render(<ProgressBar percent={-10} />);
    expect(screen.queryByTestId("percentage")).toBeNull();
  });

  it("does not render percentage for percent > 100", () => {
    render(<ProgressBar percent={150} />);
    expect(screen.queryByTestId("percentage")).toBeNull();
  });

  it("renders percentage as float", () => {
    render(<ProgressBar percent={33.3} />);
    const text = screen.getByTestId("percentage").textContent?.replace(/\u200f/g, "");
    expect(text).toBe("33.3%");
  });

  it("renders labelBefore and labelAfter", () => {
    render(<ProgressBar percent={50} labelBefore="Start" labelAfter="End" />);
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  it("applies custom className and id", () => {
    const { container } = render(<ProgressBar percent={50} className="my-class" id="my-id" />);
    const root = container.querySelector("#my-id");
    expect(root).toHaveClass("my-class");
  });

  it("does not render percentage for size 'sm'", () => {
    render(<ProgressBar percent={50} size="sm" />);
    expect(screen.queryByTestId("percentage")).toBeNull();
  });

  it("does not render percentage for size 'xs'", () => {
    render(<ProgressBar percent={50} size="xs" />);
    expect(screen.queryByTestId("percentage")).toBeNull();
  });

  it("renders with custom numeric size", () => {
    render(<ProgressBar percent={50} size={42} />);
    expect(screen.queryByTestId("percentage")).toBeNull();
  });

  it.each(["primary", "success", "white", "darkgreen"] as const)(
    "renders with color %s",
    (color) => {
      render(<ProgressBar percent={50} color={color} />);
      const percentage = screen.getByTestId("percentage");
      expect(percentage).toBeInTheDocument();
    },
  );
});
