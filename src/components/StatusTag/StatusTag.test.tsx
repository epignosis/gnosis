import React from "react";
import { InfoIconSVG as MockIcon } from "../../icons";
import StatusTag, { statusTagSizes, statusTagVariants, StatusTagProps } from "./StatusTag";
import { render, screen } from "@test-utils/render";

describe("StatusTag component", () => {
  const defaultProps: StatusTagProps = {
    text: "Active",
  };

  it("renders the StatusTag with default size, variant, and text", () => {
    render(<StatusTag {...defaultProps} />);
    const tagElement = screen.getByTestId("status-tag-Active");

    expect(tagElement).toHaveClass("statusTag", "statusTag--lg", "statusTag--neutral");
    expect(tagElement).toHaveTextContent("Active");
  });

  it("renders the StatusTag with a custom testId", () => {
    render(<StatusTag {...defaultProps} testId="custom-test-id" />);
    const tagElement = screen.getByTestId("custom-test-id");

    expect(tagElement).toBeInTheDocument();
  });

  it("renders the StatusTag with a custom size and variant", () => {
    render(
      <StatusTag {...defaultProps} size={statusTagSizes.SM} variant={statusTagVariants.POSITIVE} />,
    );
    const tagElement = screen.getByTestId("status-tag-Active");

    expect(tagElement).toHaveClass("statusTag--sm", "statusTag--positive");
  });

  it("renders the StatusTag without text when text is not provided", () => {
    render(<StatusTag size={statusTagSizes.MD} variant={statusTagVariants.POSITIVE} />);
    const tagElement = screen.getByTestId("status-tag-undefined");
    const textElement = tagElement.querySelector(".statusTag__text");

    expect(textElement).not.toBeInTheDocument();
  });

  it("renders the icon when icon is provided", () => {
    render(<StatusTag {...defaultProps} icon={MockIcon} />);
    const iconElement = screen.getByTestId("status-tag-Active").querySelector(".statusTag__icon");

    expect(iconElement).toBeInTheDocument();
  });

  it("does not render the icon when icon is not provided", () => {
    render(<StatusTag {...defaultProps} />);
    const iconElement = screen.getByTestId("status-tag-Active").querySelector(".statusTag__icon");

    expect(iconElement).not.toBeInTheDocument();
  });

  it("renders an accessible role and label when text is provided", () => {
    render(<StatusTag {...defaultProps} />);
    const tagElement = screen.getByTestId("status-tag-Active");

    expect(tagElement).toHaveAttribute("role", "status");
    expect(tagElement).toHaveAttribute("aria-label", "Active");
  });

  it("applies aria-hidden to the icon when present", () => {
    render(<StatusTag {...defaultProps} icon={MockIcon} />);
    const iconElement = screen.getByTestId("status-tag-Active").querySelector(".statusTag__icon");

    expect(iconElement).toHaveAttribute("aria-hidden", "true");
  });
});
