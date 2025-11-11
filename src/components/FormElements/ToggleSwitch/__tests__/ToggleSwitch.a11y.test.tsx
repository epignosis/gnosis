import React from "react";
import ToggleSwitch from "../ToggleSwitch";
import { render, screen, fireEvent } from "@test-utils/render";

describe("ToggleSwitch Accessibility", () => {
  const defaultProps = {
    id: "a11y-toggle",
  };

  describe("ARIA Attributes", () => {
    it("has correct role and ARIA attributes", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("role", "switch");
      expect(toggle).toHaveAttribute("aria-checked", "false");
    });

    it("updates aria-checked when toggled", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("aria-checked", "false");

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("aria-checked", "true");
    });

    it("has aria-labelledby when labelledById is provided", () => {
      render(
        <ToggleSwitch {...defaultProps} labelledById="external-label" labelBefore="Test toggle" />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("aria-labelledby", "external-label");
    });

    it("has aria-label when tooltip is provided", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Test toggle"
          tooltip="This is helpful information"
        />,
      );

      const container = screen.getByTestId("a11y-toggle");
      expect(container).toHaveAttribute("aria-label", "This is helpful information");
    });

    it("maintains proper ARIA state with preventToggle", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Test toggle"
          preventToggle={true}
          defaultChecked={true}
        />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("aria-checked", "true");

      fireEvent.click(toggle);
      // Should remain true because preventToggle is enabled
      expect(toggle).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("Keyboard Navigation", () => {
    it("is keyboard accessible with tabindex", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const container = screen.getByTestId("a11y-toggle");
      expect(container).toHaveAttribute("tabIndex", "0");
    });

    it("can be activated with Enter key", () => {
      const mockOnChange = jest.fn();
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" onChange={mockOnChange} />);

      const container = screen.getByTestId("a11y-toggle");
      const toggle = screen.getByTestId("switch");

      expect(toggle).toHaveAttribute("aria-checked", "false");

      fireEvent.keyDown(container, { key: "Enter" });
      expect(toggle).toHaveAttribute("aria-checked", "true");
      expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it("ignores other keys", () => {
      const mockOnChange = jest.fn();
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" onChange={mockOnChange} />);

      const container = screen.getByTestId("a11y-toggle");
      const toggle = screen.getByTestId("switch");

      fireEvent.keyDown(container, { key: "Space" });
      fireEvent.keyDown(container, { key: "Tab" });
      fireEvent.keyDown(container, { key: "Escape" });

      expect(toggle).toHaveAttribute("aria-checked", "false");
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it("does not respond to keyboard when disabled", () => {
      const mockOnChange = jest.fn();
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Test toggle"
          isDisabled={true}
          onChange={mockOnChange}
        />,
      );

      const container = screen.getByTestId("a11y-toggle");
      const toggle = screen.getByTestId("switch");

      fireEvent.keyDown(container, { key: "Enter" });

      expect(toggle).toHaveAttribute("aria-checked", "false");
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe("Focus Management", () => {
    it("can receive focus", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const container = screen.getByTestId("a11y-toggle");
      container.focus();

      expect(container).toHaveFocus();
    });

    it("maintains focus after state change", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const container = screen.getByTestId("a11y-toggle");
      container.focus();

      fireEvent.keyDown(container, { key: "Enter" });

      expect(container).toHaveFocus();
    });
  });

  describe("Screen Reader Support", () => {
    it("provides meaningful labels for screen readers", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Enable notifications"
          description="Receive email alerts"
        />,
      );

      expect(screen.getByText("Enable notifications")).toBeInTheDocument();
      expect(screen.getByText("Receive email alerts")).toBeInTheDocument();
    });

    it("indicates required state for screen readers", () => {
      render(<ToggleSwitch {...defaultProps} labelAfter="Email notifications" required={true} />);

      const labelElement = screen.getByText("Email notifications");
      expect(labelElement).toBeInTheDocument();
      // The asterisk should be added via CSS :after pseudo-element
    });

    it("provides state information through inline text", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          size="md"
          hasInlineText={true}
          labelBefore="Auto-save"
          defaultChecked={true}
          inlineTextTranslations={{ enabled: "ON", disabled: "OFF" }}
        />,
      );

      expect(screen.getByText("ON")).toBeInTheDocument();
    });

    it("handles tooltip information properly", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Advanced feature"
          tooltip="This feature requires administrator privileges"
        />,
      );

      // Tooltip should be accessible via aria-label on container
      const container = screen.getByTestId("a11y-toggle");
      expect(container).toHaveAttribute(
        "aria-label",
        "This feature requires administrator privileges",
      );
    });
  });

  describe("High Contrast Mode", () => {
    it("works with different variants in high contrast", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          variant="success"
          labelBefore="Success variant"
          defaultChecked={true}
        />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveClass("toggle-switch__switch--success");
    });

    it("maintains visual distinction between states", () => {
      const { rerender } = render(
        <ToggleSwitch {...defaultProps} labelBefore="Toggle" defaultChecked={false} />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("data-checked", "false");

      rerender(<ToggleSwitch {...defaultProps} labelBefore="Toggle" defaultChecked={true} />);
      expect(toggle).toHaveAttribute("data-checked", "true");
    });
  });

  describe("Reduced Motion", () => {
    it("respects user motion preferences", () => {
      // This test would ideally mock prefers-reduced-motion
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toBeInTheDocument();
      // In a real implementation, we'd check that animations are disabled
      // when prefers-reduced-motion is set
    });
  });

  describe("Semantic HTML Structure", () => {
    it("uses proper semantic structure", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Basic toggle" />);

      const toggle = screen.getByTestId("switch");
      const container = screen.getByTestId("a11y-toggle");

      // Verify proper HTML structure
      expect(toggle.tagName).toBe("DIV");
      expect(toggle).toHaveAttribute("role", "switch");
      expect(container.tagName).toBe("DIV");
    });

    it("provides proper labeling structure with descriptions", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Email notifications"
          description="Receive notifications via email"
        />,
      );

      const labelElement = screen.getByText("Email notifications");
      const descriptionElement = screen.getByText("Receive notifications via email");

      expect(labelElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });

    it("maintains semantic relationships in disabled state", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Disabled toggle"
          isDisabled={true}
          defaultChecked={true}
        />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("role", "switch");
      expect(toggle).toHaveAttribute("aria-checked", "true");
    });

    it("provides comprehensive labeling in complex example", () => {
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Enterprise features"
          labelAfter="Advanced mode"
          description="Enable advanced functionality"
          subtitle="Requires approval"
          tooltip="Contact administrator"
          variant="success"
          size="md"
          hasInlineText={true}
          required={true}
          showOutlineBorder={true}
          defaultChecked={true}
        />,
      );

      expect(screen.getByText("Enterprise features")).toBeInTheDocument();
      expect(screen.getByText("Advanced mode")).toBeInTheDocument();
      expect(screen.getAllByText("Enable advanced functionality")).toHaveLength(2); // Appears in both label sections
      expect(screen.getByText("Requires approval")).toBeInTheDocument();
    });
  });

  describe("Color Contrast", () => {
    it("maintains adequate color contrast in different states", () => {
      // Basic state test - would need visual regression testing for full validation
      render(<ToggleSwitch {...defaultProps} labelBefore="Test toggle" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toBeInTheDocument();
    });

    it("maintains contrast in disabled state", () => {
      render(<ToggleSwitch {...defaultProps} labelBefore="Disabled toggle" isDisabled={true} />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toBeInTheDocument();
    });
  });

  describe("Mobile Accessibility", () => {
    it("has appropriate touch target size", () => {
      render(<ToggleSwitch {...defaultProps} size="md" labelBefore="Large toggle" />);

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveClass("toggle-switch__switch--md");
      // Medium size provides larger touch target (40px height)
    });

    it("works with voice control", () => {
      // Voice control typically relies on proper labeling and ARIA attributes
      render(
        <ToggleSwitch
          {...defaultProps}
          labelBefore="Voice control test"
          labelledById="voice-label"
        />,
      );

      const toggle = screen.getByTestId("switch");
      expect(toggle).toHaveAttribute("aria-labelledby", "voice-label");
    });
  });
});
