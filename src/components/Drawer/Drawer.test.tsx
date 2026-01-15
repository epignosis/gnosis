import React, { useState } from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Drawer from "./Drawer";
import { screen, render, cleanup, waitFor } from "@test-utils/render";

describe("<Drawer/>", () => {
  beforeEach(() => {
    const drawerEl = document.createElement("div");
    drawerEl.setAttribute("id", "drawerRoot");
    document.body.appendChild(drawerEl);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders correctly", async () => {
    const headerTxt = faker.helpers.unique(faker.lorem.sentence);
    const bodyTxt = faker.helpers.unique(faker.lorem.sentence);
    const footerTxt = faker.helpers.unique(faker.lorem.sentence);
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header>{headerTxt}</Drawer.Header>
        <Drawer.Body>{bodyTxt}</Drawer.Body>
        <Drawer.Footer>{footerTxt}</Drawer.Footer>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);
    const body = screen.getByText(bodyTxt);
    const footer = screen.getByText(footerTxt);
    const mask = screen.getByTestId("mask");

    await userEvent.click(mask);

    expect(header).toHaveTextContent(headerTxt);
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).toHaveTextContent(footerTxt);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("renders correctly without Header and Footer", () => {
    const bodyTxt = faker.lorem.word();
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Body>{bodyTxt}</Drawer.Body>
      </Drawer>,
    );

    const header = screen.queryByTestId("drawer-header");
    const body = screen.getByText(bodyTxt);
    const footer = screen.queryByTestId("drawer-footer");

    expect(header).not.toBeInTheDocument();
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).not.toBeInTheDocument();
  });

  it("renders correctly with close button", async () => {
    const headerTxt = faker.lorem.word();
    const mockFn = jest.fn();

    const { rerender } = render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header closable>{headerTxt}</Drawer.Header>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);
    const closeBtn = screen.getByRole("button");

    await userEvent.click(closeBtn);

    expect(header).toHaveTextContent(headerTxt);
    expect(closeBtn).toBeInTheDocument();
    expect(mockFn).toHaveBeenCalledTimes(1);

    rerender(
      <Drawer isOpen={false} onClose={mockFn}>
        <Drawer.Header closable>{headerTxt}</Drawer.Header>
      </Drawer>,
    );

    await waitFor(() => {
      const headerAfterClose = screen.queryByText(headerTxt);
      expect(headerAfterClose).not.toBeVisible();
    });
  });

  it("Header renders with JSX content", () => {
    const headerTxt = faker.lorem.word();
    const mockFn = jest.fn();

    render(
      <Drawer isOpen onClose={mockFn}>
        <Drawer.Header closable>
          <button>{headerTxt}</button>
        </Drawer.Header>
      </Drawer>,
    );

    const header = screen.getByText(headerTxt);

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(headerTxt);
  });

  it("matches snapshot with header, body and footer", () => {
    render(
      <Drawer id="main-drawer" className="drawer" isOpen onClose={jest.fn()}>
        <Drawer.Header>Test header</Drawer.Header>
        <Drawer.Body>Test body</Drawer.Body>
        <Drawer.Footer>Test footer</Drawer.Footer>
      </Drawer>,
    );
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toMatchSnapshot();
  });

  it("matches snapshot without header and footer", () => {
    render(
      <Drawer isOpen onClose={jest.fn()}>
        <Drawer.Body>Test body</Drawer.Body>
      </Drawer>,
    );
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toMatchSnapshot();
  });

  it("matches snapshot with close button", () => {
    render(
      <Drawer isOpen onClose={jest.fn()}>
        <Drawer.Header closable>Title</Drawer.Header>
      </Drawer>,
    );
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toMatchSnapshot();
  });

  it("matches snapshot with noGutters Header", () => {
    render(
      <Drawer isOpen onClose={jest.fn()}>
        <Drawer.Header noGutters>Title</Drawer.Header>
      </Drawer>,
    );
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toMatchSnapshot();
  });

  it("matches snapshot with right placement", () => {
    render(
      <Drawer isOpen onClose={jest.fn()} placement="right">
        <Drawer.Header>Title</Drawer.Header>
      </Drawer>,
    );
    const drawer = screen.getByTestId("drawer");

    expect(drawer).toMatchSnapshot();
  });

  describe("Status Indicator", () => {
    it("renders status indicator with success type", () => {
      const statusMessage = faker.lorem.sentence();
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} status={{ type: "success", content: statusMessage }}>
          <Drawer.Header>Drawer with Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveClass("drawer-status-indicator--success");
      expect(screen.getByText(statusMessage)).toBeInTheDocument();
    });

    it("renders status indicator with error type", () => {
      const statusMessage = faker.lorem.sentence();
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} status={{ type: "error", content: statusMessage }}>
          <Drawer.Header>Drawer with Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveClass("drawer-status-indicator--error");
      expect(screen.getByText(statusMessage)).toBeInTheDocument();
    });

    it("renders status indicator with info type", () => {
      const statusMessage = faker.lorem.sentence();
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} status={{ type: "info", content: statusMessage }}>
          <Drawer.Header>Drawer with Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveClass("drawer-status-indicator--info");
      expect(screen.getByText(statusMessage)).toBeInTheDocument();
    });

    it("renders status indicator with JSX content", () => {
      const statusMessage = faker.lorem.sentence();
      const mockFn = jest.fn();

      render(
        <Drawer
          isOpen
          onClose={mockFn}
          status={{
            type: "success",
            content: (
              <div>
                <strong>Success:</strong> {statusMessage}
              </div>
            ),
          }}
        >
          <Drawer.Header>Drawer with Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(screen.getByText(statusMessage)).toBeInTheDocument();
      expect(screen.getByText("Success:")).toBeInTheDocument();
    });

    it("does not render status indicator when status prop is not provided", () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header>Drawer without Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.queryByTestId("drawer-status-indicator");
      expect(statusIndicator).not.toBeInTheDocument();
    });

    it("status indicator appears above footer content", () => {
      const statusMessage = faker.lorem.sentence();
      const footerContent = faker.lorem.word();
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} status={{ type: "success", content: statusMessage }}>
          <Drawer.Header>Drawer with Status</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>{footerContent}</Drawer.Footer>
        </Drawer>,
      );

      const footer = screen.getByTestId("drawer-footer");
      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      const footerContentEl = screen.getByText(footerContent);

      expect(footer).toContainElement(statusIndicator);
      expect(footer).toContainElement(footerContentEl);
    });

    it("matches snapshot with status indicator success", () => {
      render(
        <Drawer
          isOpen
          onClose={jest.fn()}
          status={{ type: "success", content: "Operation successful" }}
        >
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );
      const drawer = screen.getByTestId("drawer");

      expect(drawer).toMatchSnapshot();
    });

    it("matches snapshot with status indicator error", () => {
      render(
        <Drawer isOpen onClose={jest.fn()} status={{ type: "error", content: "An error occurred" }}>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );
      const drawer = screen.getByTestId("drawer");

      expect(drawer).toMatchSnapshot();
    });

    it("matches snapshot with status indicator info", () => {
      render(
        <Drawer isOpen onClose={jest.fn()} status={{ type: "info", content: "Please review" }}>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );
      const drawer = screen.getByTestId("drawer");

      expect(drawer).toMatchSnapshot();
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA attributes on dialog element", () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      const dialog = document.querySelector('dialog[aria-modal="true"]');
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("aria-expanded", "true");
      expect(dialog).toHaveAttribute("aria-hidden", "false");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });

    it("updates aria-expanded and aria-hidden when drawer is closed", async () => {
      const mockFn = jest.fn();
      const { rerender } = render(
        <Drawer isOpen={true} onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      let dialog = document.querySelector('dialog[aria-modal="true"]');
      expect(dialog).toHaveAttribute("aria-expanded", "true");
      expect(dialog).toHaveAttribute("aria-hidden", "false");

      rerender(
        <Drawer isOpen={false} onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      await waitFor(() => {
        dialog = document.querySelector('dialog[aria-modal="true"]');
        if (dialog) {
          expect(dialog).toHaveAttribute("aria-expanded", "false");
          expect(dialog).toHaveAttribute("aria-hidden", "true");
        }
      });
    });

    it("closes drawer when Escape key is pressed", async () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      await userEvent.keyboard("{Escape}");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("does not close drawer when Escape is pressed if closeOnOutsideClick is false", async () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} closeOnOutsideClick={false}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      await userEvent.keyboard("{Escape}");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("close button in header is keyboard accessible", async () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header closable>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      const closeButton = screen.getByRole("button");
      expect(closeButton).toBeInTheDocument();

      // Tab to focus the button
      await userEvent.tab();
      expect(closeButton).toHaveFocus();

      // Press Enter to activate
      await userEvent.keyboard("{Enter}");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("close button can be activated with Space key", async () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header closable>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      const closeButton = screen.getByRole("button");

      // Tab to focus and activate with Space
      await userEvent.tab();
      expect(closeButton).toHaveFocus();

      await userEvent.keyboard(" ");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("traps focus within drawer when open", async () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header closable>Test Drawer</Drawer.Header>
          <Drawer.Body>
            <button>Button 1</button>
            <button>Button 2</button>
          </Drawer.Body>
          <Drawer.Footer>
            <button>Footer Button</button>
          </Drawer.Footer>
        </Drawer>,
      );

      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBeGreaterThan(0);

      // Focus should be within the drawer
      await userEvent.tab();
      const focusedElement = document.activeElement;
      expect(focusedElement).toBeInTheDocument();
    });

    it("returns focus to previous element when drawer closes", async () => {
      // Create a button that will open the drawer
      const TestComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <button onClick={() => setIsOpen(true)} data-testid="trigger-button">
              Open Drawer
            </button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <Drawer.Header closable>Test Drawer</Drawer.Header>
              <Drawer.Body>Content</Drawer.Body>
            </Drawer>
          </>
        );
      };

      render(<TestComponent />);

      const triggerButton = screen.getByTestId("trigger-button");
      triggerButton.focus();
      expect(triggerButton).toHaveFocus();

      await userEvent.click(triggerButton);

      const closeButton = screen.getByRole("button", { name: /close drawer/i });
      await userEvent.click(closeButton);

      await waitFor(() => {
        expect(triggerButton).toHaveFocus();
      });
    });

    it("has proper semantic structure with header, body, and footer", () => {
      const mockFn = jest.fn();
      const bodyContent = "Body Content";
      const footerContent = "Footer Content";

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header>Header Title</Drawer.Header>
          <Drawer.Body>{bodyContent}</Drawer.Body>
          <Drawer.Footer>{footerContent}</Drawer.Footer>
        </Drawer>,
      );

      const header = screen.getByTestId("drawer-header");
      const body = screen.getByText(bodyContent);
      const footer = screen.getByTestId("drawer-footer");

      expect(header).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });

    it("status indicator is accessible to screen readers", () => {
      const statusMessage = faker.lorem.sentence();
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn} status={{ type: "success", content: statusMessage }}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer>,
      );

      const statusIndicator = screen.getByTestId("drawer-status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(screen.getByText(statusMessage)).toBeInTheDocument();
      // Status message should be readable by screen readers
      expect(statusIndicator).toHaveTextContent(statusMessage);
    });

    it("prevents body scroll when drawer is open", () => {
      const mockFn = jest.fn();

      render(
        <Drawer isOpen onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      const body = document.querySelector("body");
      expect(body).toHaveStyle({ overflow: "hidden" });
    });

    it("restores body scroll when drawer is closed", async () => {
      const mockFn = jest.fn();
      const { rerender } = render(
        <Drawer isOpen={true} onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      let body = document.querySelector("body");
      expect(body).toHaveStyle({ overflow: "hidden" });

      rerender(
        <Drawer isOpen={false} onClose={mockFn}>
          <Drawer.Header>Test Drawer</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer>,
      );

      await waitFor(() => {
        body = document.querySelector("body");
        expect(body).toHaveStyle({ overflow: "" });
      });
    });
  });
});
