import React from "react";
import { InfoIconSVG as MockIcon } from "../../icons";
import StatusTag, { statusTagSizes, statusTagColors, StatusTagProps } from "./StatusTag";
import { render, screen } from "@test-utils/render";

describe("StatusTag component", () => {
  const defaultProps: StatusTagProps = {
    text: "Active",
  };

  it("renders the StatusTag with default size and color", () => {
    render(<StatusTag {...defaultProps} />);
    const tagElement = screen.getByTestId("status-tag");

    expect(tagElement).toHaveClass("statusTag", "statusTag--lg", "statusTag--neutral");
    expect(tagElement).toHaveTextContent("Active");
  });

  it("renders the StatusTag with a custom size and color", () => {
    render(
      <StatusTag {...defaultProps} size={statusTagSizes.MD} color={statusTagColors.POSITIVE} />,
    );
    const tagElement = screen.getByTestId("status-tag");

    expect(tagElement).toHaveClass("statusTag--md", "statusTag--positive");
  });

  it("shows the icon when showIcon is true", () => {
    render(<StatusTag {...defaultProps} showIcon={true} icon={MockIcon} />);
    const iconElement = screen.getByTestId("status-tag").querySelector(".statusTag__icon");

    expect(iconElement).toBeInTheDocument();
  });

  it("does not show the icon when showIcon is false", () => {
    render(<StatusTag {...defaultProps} showIcon={false} icon={MockIcon} />);
    const iconElement = screen.getByTestId("status-tag").querySelector(".statusTag__icon");

    expect(iconElement).not.toBeInTheDocument();
  });

  it("renders an accessible role and label", () => {
    render(<StatusTag {...defaultProps} />);
    const tagElement = screen.getByTestId("status-tag");

    expect(tagElement).toHaveAttribute("role", "status");
    expect(tagElement).toHaveAttribute("aria-label", "Active");
  });

  it("applies aria-hidden to the icon", () => {
    render(<StatusTag {...defaultProps} showIcon={true} icon={MockIcon} />);
    const iconElement = screen.getByTestId("status-tag").querySelector(".statusTag__icon");

    expect(iconElement).toHaveAttribute("aria-hidden", "true");
  });
});
