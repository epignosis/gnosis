import React from "react";
import Result from "./Result";
import { screen, render } from "@test-utils/render";
import { InfoSVG } from "@icons/core";

describe("<Result/>", () => {
  it("renders correctly", () => {
    render(<Result title="Test title" />);

    const title = screen.getByText("Test title");

    expect(title).toHaveTextContent("Test title");
  });

  it("renders with icon", () => {
    render(<Result title="Test title" icon={InfoSVG} />);

    const icon = screen.getByTestId(/result-icon/i);

    expect(icon).toBeInTheDocument();
  });

  it("renders info paragraph", () => {
    render(<Result title="Test title" info="Test info" />);

    const info = screen.getByText(/test info/i);

    expect(info).toHaveTextContent("Test info");
  });

  it("renders with footer", () => {
    render(<Result title="Test title" footer={<button>test action</button>} />);

    const footerBtn = screen.getByText(/test action/i);

    expect(footerBtn).toHaveTextContent("test action");
  });

  it("renders with all props provided", () => {
    render(
      <Result
        icon={InfoSVG}
        title="Test title"
        info="Test info"
        footer={<button>test action</button>}
      />,
    );

    const icon = screen.getByTestId("result-icon");
    const title = screen.getByText("Test title");
    const info = screen.getByText("Test info");
    const footerBtn = screen.getByText(/test action/i);

    expect(icon).toBeInTheDocument();
    expect(title).toHaveTextContent("Test title");
    expect(info).toHaveTextContent("Test info");
    expect(footerBtn).toHaveTextContent("test action");
  });
});
