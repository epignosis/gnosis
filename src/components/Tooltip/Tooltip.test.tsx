import React from "react";
import faker from "faker";
import userEvent from "@testing-library/user-event";
import Tooltip from "./Tooltip";
import { screen, render, act } from "@test-utils/render";

describe("<Tooltip/>", () => {
  it("renders correctly", async () => {
    const btnTxt = faker.lorem.word();
    const contentTxt = faker.lorem.word();

    render(
      <Tooltip content={contentTxt}>
        <button>{btnTxt}</button>
      </Tooltip>,
    );

    await act(async () => {
      userEvent.hover(screen.getByText(btnTxt));
    });

    const buttonText = screen.getByText(btnTxt);
    const content = screen.getByText(contentTxt);
    const arrow = screen.getByTestId("tooltip-arrow");

    expect(buttonText).toHaveTextContent(btnTxt);
    expect(content).toHaveTextContent(contentTxt);
    expect(arrow).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Tooltip content="Test content">
        <button>test hover</button>
      </Tooltip>,
    );

    expect(container).toMatchSnapshot();
  });
});
