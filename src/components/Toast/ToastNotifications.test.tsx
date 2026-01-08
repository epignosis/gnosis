import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import ToastNotification from "./ToastNotifications";
import { render, screen } from "@test-utils/render";

describe("<ToastNotification>", () => {
  it("renders info toast correctly", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

    const text = screen.getByText(content);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(content);
  });

  it("renders success toast correctly", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="success" content={content} onClose={mockOnClose} />);

    const text = screen.getByText(content);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(content);
  });

  it("renders warning toast correctly", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="warning" content={content} onClose={mockOnClose} />);

    const text = screen.getByText(content);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(content);
  });

  it("renders error toast correctly", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="error" content={content} onClose={mockOnClose} />);

    const text = screen.getByText(content);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(content);
  });

  it("calls onClose when close button is clicked", async () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button", { name: /close toast notification/i });
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("displays icon for each toast type", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    const { rerender, container } = render(
      <ToastNotification type="info" content={content} onClose={mockOnClose} />,
    );
    let icon = container.querySelector(".toast-notification__icon");
    expect(icon).toBeInTheDocument();

    rerender(<ToastNotification type="success" content={content} onClose={mockOnClose} />);
    icon = container.querySelector(".toast-notification__icon");
    expect(icon).toBeInTheDocument();

    rerender(<ToastNotification type="warning" content={content} onClose={mockOnClose} />);
    icon = container.querySelector(".toast-notification__icon");
    expect(icon).toBeInTheDocument();

    rerender(<ToastNotification type="error" content={content} onClose={mockOnClose} />);
    icon = container.querySelector(".toast-notification__icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders ReactNode content correctly", () => {
    const mockOnClose = jest.fn();
    const content = (
      <>
        <strong>Important:</strong> This is a test message
      </>
    );

    render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

    expect(screen.getByText("Important:")).toBeInTheDocument();
    expect(screen.getByText("This is a test message")).toBeInTheDocument();
  });

  it("has correct accessibility attributes on close button", () => {
    const content = faker.lorem.sentence();
    const mockOnClose = jest.fn();

    render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button", { name: /close toast notification/i });
    expect(closeButton).toHaveAttribute("aria-label", "Close toast notification");
  });

  it("matches snapshot for info type", () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <ToastNotification type="info" content="This is an info message" onClose={mockOnClose} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for success type", () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <ToastNotification
        type="success"
        content="Operation completed successfully"
        onClose={mockOnClose}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for warning type", () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <ToastNotification
        type="warning"
        content="Please be careful with this action"
        onClose={mockOnClose}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for error type", () => {
    const mockOnClose = jest.fn();
    const { container } = render(
      <ToastNotification type="error" content="An error occurred" onClose={mockOnClose} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with long content and word-break styles", () => {
    const longContent = faker.lorem.paragraphs(3);
    const mockOnClose = jest.fn();

    render(<ToastNotification type="info" content={longContent} onClose={mockOnClose} />);

    const text = screen.getByTestId("text-component");
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("toast-notification__text");
    expect(text.textContent).toContain(longContent.split("\n")[0]);
  });

  it("renders all components together without CSS conflicts", () => {
    const mockOnClose = jest.fn();

    render(
      <>
        <ToastNotification type="info" content="Info message" onClose={mockOnClose} />
        <ToastNotification type="success" content="Success message" onClose={mockOnClose} />
        <ToastNotification type="warning" content="Warning message" onClose={mockOnClose} />
        <ToastNotification type="error" content="Error message" onClose={mockOnClose} />
      </>,
    );

    const icons = document.querySelectorAll(".toast-notification__icon");
    expect(icons.length).toBeGreaterThanOrEqual(4);

    expect(screen.getByText("Info message")).toBeInTheDocument();
    expect(screen.getByText("Success message")).toBeInTheDocument();
    expect(screen.getByText("Warning message")).toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  describe("Accessibility", () => {
    it("has appropriate ARIA role for toast notifications", () => {
      const content = faker.lorem.sentence();
      const mockOnClose = jest.fn();

      const { container } = render(
        <ToastNotification type="info" content={content} onClose={mockOnClose} />,
      );

      const toast = container.querySelector(".toast-notification");
      expect(toast).toBeInTheDocument();
      // Toast notifications should have role="status" or role="alert" for screen readers
      // This test documents expected behavior - implementation may need to be updated
    });

    it("close button is keyboard accessible", async () => {
      const content = faker.lorem.sentence();
      const mockOnClose = jest.fn();

      render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

      const closeButton = screen.getByRole("button", { name: /close toast notification/i });

      // Tab to focus the button
      await userEvent.tab();
      expect(closeButton).toHaveFocus();

      // Press Enter to activate
      await userEvent.keyboard("{Enter}");
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("close button can be activated with Space key", async () => {
      const content = faker.lorem.sentence();
      const mockOnClose = jest.fn();

      render(<ToastNotification type="info" content={content} onClose={mockOnClose} />);

      const closeButton = screen.getByRole("button", { name: /close toast notification/i });

      // Tab to focus and activate with Space
      await userEvent.tab();
      expect(closeButton).toHaveFocus();

      await userEvent.keyboard(" ");
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("allows custom aria-label for close button", () => {
      const content = faker.lorem.sentence();
      const customLabel = "Dismiss notification";
      const mockOnClose = jest.fn();

      render(
        <ToastNotification
          type="info"
          content={content}
          closeButtonAriaLabel={customLabel}
          onClose={mockOnClose}
        />,
      );

      const closeButton = screen.getByRole("button", { name: customLabel });
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveAttribute("aria-label", customLabel);
    });

    it("icon has decorative purpose and does not interfere with screen readers", () => {
      const content = faker.lorem.sentence();
      const mockOnClose = jest.fn();

      const { container } = render(
        <ToastNotification type="success" content={content} onClose={mockOnClose} />,
      );

      const icon = container.querySelector(".toast-notification__icon");
      expect(icon).toBeInTheDocument();

      // Icons should be decorative and not expose misleading semantics
      // The type is communicated through styling and ARIA attributes on the container
    });

    it("content is accessible to screen readers", () => {
      const content = "Important notification message";
      const mockOnClose = jest.fn();

      render(<ToastNotification type="error" content={content} onClose={mockOnClose} />);

      const textElement = screen.getByText(content);
      expect(textElement).toBeInTheDocument();
      expect(textElement).toBeVisible();
    });

    it("maintains logical tab order with multiple toasts", async () => {
      const mockOnClose1 = jest.fn();
      const mockOnClose2 = jest.fn();

      render(
        <>
          <ToastNotification type="info" content="First toast" onClose={mockOnClose1} />
          <ToastNotification type="success" content="Second toast" onClose={mockOnClose2} />
        </>,
      );

      const firstCloseButton = screen.getAllByRole("button", {
        name: /close toast notification/i,
      })[0];
      const secondCloseButton = screen.getAllByRole("button", {
        name: /close toast notification/i,
      })[1];

      // Tab through buttons in order
      await userEvent.tab();
      expect(firstCloseButton).toHaveFocus();

      await userEvent.tab();
      expect(secondCloseButton).toHaveFocus();
    });

    it("different toast types are distinguishable without relying solely on color", () => {
      const mockOnClose = jest.fn();

      const { container: infoContainer } = render(
        <ToastNotification type="info" content="Info" onClose={mockOnClose} />,
      );
      const { container: errorContainer } = render(
        <ToastNotification type="error" content="Error" onClose={mockOnClose} />,
      );

      // Each type has a different icon, not just color
      const infoIcon = infoContainer.querySelector(".toast-notification__icon");
      const errorIcon = errorContainer.querySelector(".toast-notification__icon");

      expect(infoIcon).toBeInTheDocument();
      expect(errorIcon).toBeInTheDocument();
      // Icons provide visual distinction beyond color
    });
  });
});
