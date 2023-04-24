import React from "react";
import Statistics from "./Statistics";
import { render, screen } from "@test-utils/render";

const mockStat = {
  statNumber: "100",
  title: "Courses not started",
};

describe("<Statistics />", () => {
  it("renders correctly", () => {
    render(<Statistics {...mockStat} />);
    const statNumber = screen.getByText("100");
    const title = screen.getByText(mockStat.title);

    expect(statNumber).toHaveTextContent("100");
    expect(title).toHaveTextContent(mockStat.title);
  });

  it("renders correctly with subtitle", () => {
    const mockWithSubtitle = {
      ...mockStat,
      subtitle: "Subtitle",
    };

    render(<Statistics {...mockWithSubtitle} />);
    const subtitle = screen.getByText("Subtitle");

    expect(subtitle).toHaveTextContent("Subtitle");
  });
});
