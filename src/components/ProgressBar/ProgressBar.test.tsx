import React from "react";
import faker from "faker";
import ProgressBar from "./ProgressBar";
import { render, screen } from "@test-utils/render";

describe("<ProgressBar />", () => {
  it("renders correctly", () => {
    const progressPercentage = faker.datatype.number(100);

    render(<ProgressBar percent={progressPercentage} />);
    const percentage = screen.getByText(`${progressPercentage}%`);

    expect(percentage).toHaveTextContent(`${progressPercentage}%`);
  });

  it("matches snapshot", () => {
    const { container } = render(<ProgressBar percent={75} />);

    expect(container).toMatchSnapshot();
  });
});
