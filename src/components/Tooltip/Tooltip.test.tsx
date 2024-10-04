import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import Tooltip from "./Tooltip";
import { screen, render } from "@test-utils/render";

describe("<Tooltip/>", () => {
  it("renders correctly", async () => {
    const contentTxt = faker.lorem.word();

    render(
      <Tooltip content={contentTxt}>
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByText("Hover me");

    await userEvent.hover(button);

    const content = screen.getByText(contentTxt);
    const arrow = screen.getByTestId("tooltip-arrow");

    expect(content).toHaveTextContent(contentTxt);
    expect(arrow).toBeInTheDocument();
  });
});
