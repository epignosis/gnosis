import React from "react";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import { render } from "@test-utils/render";

// Mock the ArrowRightChevronSVG component
jest.mock("../../icons", () => ({
  ArrowRightChevronSVG: () => <svg data-testid="arrow-icon" />,
}));

describe("Breadcrumbs Component", () => {
  const items: BreadcrumbItem[] = [
    { label: "Reports", href: "/reports" },
    { label: "Course reports", href: "/course" },
    { label: "Introduction to TLMS+" }, // Current page, no href
  ];

  it("renders the correct number of breadcrumb items", () => {
    const { getByText } = render(<Breadcrumbs items={items} />);

    expect(getByText("Reports")).toBeInTheDocument();
    expect(getByText("Course reports")).toBeInTheDocument();
    expect(getByText("Introduction to TLMS+")).toBeInTheDocument();
  });

  it("renders links with correct href attributes", () => {
    const { getByText } = render(<Breadcrumbs items={items} />);

    const reportsLink = getByText("Reports");
    const courseReportsLink = getByText("Course reports");

    expect(reportsLink).toHaveAttribute("href", "/reports");
    expect(courseReportsLink).toHaveAttribute("href", "/course");
  });

  it("renders the current item without a link", () => {
    const { getByText } = render(<Breadcrumbs items={items} />);

    const currentItem = getByText("Introduction to TLMS+");
    expect(currentItem).toHaveAttribute("aria-current", "page");
    expect(currentItem.closest("a")).toBeNull(); // Ensure it's not a link
  });

  it("renders the separator between items", () => {
    const { container } = render(<Breadcrumbs items={items} />);

    // Check for the arrow icons in the separators
    const separatorIcons = container.querySelectorAll(".breadcrumbs__separator");
    expect(separatorIcons.length).toBe(2); // There should be two separators

    // Check for the presence of the SVG using the test ID
    expect(container.querySelectorAll("[data-testid='arrow-icon']").length).toBe(2);
  });

  it("uses the default aria-label for the nav element", () => {
    const { container } = render(<Breadcrumbs items={items} />);

    const nav = container.querySelector("nav");
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb navigation");
  });

  it("uses custom aria-label for the nav element", () => {
    const { container } = render(
      <Breadcrumbs items={items} navAriaLabel="Custom navigation label" />,
    );

    const nav = container.querySelector("nav");
    expect(nav).toHaveAttribute("aria-label", "Custom navigation label");
  });

  it("uses the custom link aria-label function", () => {
    const customLinkAriaLabel = (label: string) => `Navigate to ${label}`;
    const { getByText } = render(<Breadcrumbs items={items} linkAriaLabel={customLinkAriaLabel} />);

    const reportsLink = getByText("Reports");
    expect(reportsLink).toHaveAttribute("aria-label", "Navigate to Reports");
  });
});
