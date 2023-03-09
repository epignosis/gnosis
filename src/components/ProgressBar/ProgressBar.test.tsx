import React from "react";
import { faker } from "@faker-js/faker";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@test-utils/render";

describe("<ProgressBar />", () => {
  it("renders correctly", () => {
    const progressPercentage = faker.datatype.number(100);

    render(<ProgressBar percent={progressPercentage} />);
    const percentage = screen.getByTestId("percentage");

    expect(percentage).toHaveTextContent(`${progressPercentage}`);
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
});
