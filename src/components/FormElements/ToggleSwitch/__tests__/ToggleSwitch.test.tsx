import React, { createRef } from "react";
import { act } from "@testing-library/react";
import ToggleSwitch, { type ToggleSwitchHandlers } from "../ToggleSwitch";
import { render, fireEvent, screen } from "@test-utils/render";

describe("<ToggleSwitch />", () => {
  const defaultProps = {
    id: "test-toggle",
  };

  describe("Basic Functionality", () => {
    it("renders with correct default state", () => {
      render(<ToggleSwitch {...defaultProps} />);

      const toggle = screen.getByTestId("switch");
      const container = screen.getByTestId("test-toggle");

      expect(toggle).toHaveAttribute("data-checked", "false");
      expect(container).toHaveAttribute("data-checked", "false");
      expect(toggle).toHaveAttribute("role", "switch");
      expect(toggle).toHaveAttribute("aria-checked", "false");
    });

    it("renders with defaultChecked=true", () => {
      render(<ToggleSwitch {...defaultProps} defaultChecked={true} />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("data-checked", "true");
      expect(toggle).toHaveAttribute("aria-checked", "true");
    });

    it("toggles state when clicked", () => {
      render(<ToggleSwitch {...defaultProps} />);

      const toggle = screen.getByTestId("switch");

      expect(toggle).toHaveAttribute("data-checked", "false");

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("data-checked", "true");

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("data-checked", "false");
    });

    it("toggles state when Enter key is pressed", () => {
      render(<ToggleSwitch {...defaultProps} />);

      const container = screen.getByTestId("test-toggle");
      const toggle = screen.getByTestId("switch");

      expect(toggle).toHaveAttribute("data-checked", "false");

      fireEvent.keyDown(container, { key: "Enter" });
      expect(toggle).toHaveAttribute("data-checked", "true");
    });

    it("calls onChange callback with correct value", () => {
      const mockOnChange = jest.fn();
      render(<ToggleSwitch {...defaultProps} onChange={mockOnChange} />);

      const toggle = screen.getByTestId("switch");

      fireEvent.click(toggle);
      expect(mockOnChange).toHaveBeenCalledWith(true);

      fireEvent.click(toggle);
      expect(mockOnChange).toHaveBeenCalledWith(false);
    });

    it("does not toggle when disabled", () => {
      const mockOnChange = jest.fn();
      render(<ToggleSwitch {...defaultProps} isDisabled={true} onChange={mockOnChange} />);

      const toggle = screen.getByTestId("switch");

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("data-checked", "false");
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it("does not change state when preventToggle is true", () => {
      const mockOnChange = jest.fn();
      render(<ToggleSwitch {...defaultProps} preventToggle={true} onChange={mockOnChange} />);

      const toggle = screen.getByTestId("switch");

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("data-checked", "false");
      expect(mockOnChange).toHaveBeenCalledWith(false);
    });
  });

  describe("Labels and Descriptions", () => {
    it("renders labelBefore correctly", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Enable feature"
          description="This enables the feature"
        />,
      );

      expect(screen.getByText("Enable feature")).toBeInTheDocument();
      expect(screen.getByText("This enables the feature")).toBeInTheDocument();
    });

    it("renders labelAfter correctly", () => {
      render(<ToggleSwitch {...defaultProps} labelAfter="Feature enabled" required={true} />);

      expect(screen.getByText("Feature enabled")).toBeInTheDocument();
    });

    it("renders subtitle correctly", () => {
      render(<ToggleSwitch {...defaultProps} subtitle="Additional info" />);

      expect(screen.getByText("Additional info")).toBeInTheDocument();
    });

    it("renders tooltip when provided", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Toggle"
          tooltip="This is helpful information"
        />,
      );

      const container = screen.getByTestId("test-toggle");
      expect(container).toHaveAttribute("aria-label", "This is helpful information");
    });
  });

  describe("Variants and Sizes", () => {
    it("applies primary variant correctly", () => {
      render(<ToggleSwitch {...defaultProps} variant="primary" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toBeInTheDocument();
    });

    it("applies success variant correctly", () => {
      render(<ToggleSwitch {...defaultProps} variant="success" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveClass("success");
    });

    it("applies small size correctly", () => {
      render(<ToggleSwitch {...defaultProps} size="sm" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).not.toHaveClass("md");
    });

    it("applies medium size correctly", () => {
      render(<ToggleSwitch {...defaultProps} size="md" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveClass("md");
    });

    it("renders inline text for medium size when enabled", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          size="md"
          hasInlineText={true}
          defaultChecked={true}
          inlineTextTranslations={{ enabled: "ON", disabled: "OFF" }}
        />,
      );

      expect(screen.getByText("ON")).toBeInTheDocument();
    });

    it("renders internal icon when provided", () => {
      const TestIcon = <span data-testid="test-icon">✓</span>;
      render(<ToggleSwitch {...defaultProps} InternalIcon={TestIcon} />);

      expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      render(<ToggleSwitch {...defaultProps} labelledById="external-label" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("role", "switch");
      expect(toggle).toHaveAttribute("aria-checked", "false");
      expect(toggle).toHaveAttribute("aria-labelledby", "external-label");
    });

    it("is keyboard accessible", () => {
      render(<ToggleSwitch {...defaultProps} />);

      const container = screen.getByTestId("test-toggle");
      expect(container).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Imperative API", () => {
    it("exposes toggle method via ref", () => {
      const ref = createRef<ToggleSwitchHandlers>();
      render(<ToggleSwitch {...defaultProps} ref={ref} />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("data-checked", "false");

      act(() => {
        ref.current?.toggle();
      });
      expect(toggle).toHaveAttribute("data-checked", "true");

      act(() => {
        ref.current?.toggle();
      });
      expect(toggle).toHaveAttribute("data-checked", "false");
    });
  });

  describe("Edge Cases", () => {
    it("handles missing inlineTextTranslations gracefully", () => {
      render(
        <ToggleSwitch {...defaultProps} size="md" hasInlineText={true} defaultChecked={true} />,
      );

      expect(screen.getByText("Enabled")).toBeInTheDocument();
    });

    it("stops event propagation on click", () => {
      const mockParentClick = jest.fn();
      render(
        <div onClick={mockParentClick}>
          <ToggleSwitch {...defaultProps} />
        </div>,
      );

      const toggle = screen.getByTestId("switch");
      fireEvent.click(toggle);

      expect(mockParentClick).not.toHaveBeenCalled();
    });

    it("updates state when defaultChecked prop changes", () => {
      const { rerender } = render(<ToggleSwitch {...defaultProps} defaultChecked={false} />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("data-checked", "false");

      rerender(<ToggleSwitch {...defaultProps} defaultChecked={true} />);
      expect(toggle).toHaveAttribute("data-checked", "true");
    });
  });

  describe("Snapshot", () => {
    it("matches snapshot with all props", () => {
      const { container } = render(
        <ToggleSwitch
          id="snapshot-toggle"
          labelBefore="Before Label"
          labelAfter="After Label"
          description="Test description"
          subtitle="Test subtitle"
          variant="success"
          size="md"
          hasInlineText={true}
          required={true}
          tooltip="Test tooltip"
          defaultChecked={true}
          showOutlineBorder={true}
          InternalIcon={<span>✓</span>}
        />,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
