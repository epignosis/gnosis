import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Chip from "./Chip";
import { render, screen } from "@test-utils/render";

describe("<Chip />", () => {
  it("renders without close button", () => {
    const chipTxt = faker.lorem.word();

    render(<Chip>{chipTxt}</Chip>);
    const tag = screen.getByText(chipTxt);

    expect(tag).toHaveTextContent(chipTxt);
  });

  it("renders with close button", () => {
    const chipTxt = faker.lorem.word();
    const mockFn = jest.fn();

    render(<Chip onClose={mockFn}>{chipTxt}</Chip>);

    const tag = screen.getByText(chipTxt);
    const closeBtn = screen.getByLabelText(`Remove ${chipTxt}`);

    userEvent.click(closeBtn);

    expect(tag).toHaveTextContent(chipTxt);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Chip
        size="md"
        className="my-class"
        style={{ backgroundColor: "purple", color: "white" }}
        onClose={jest.fn()}
      >
        This is a chip
      </Chip>,
    );

    expect(container).toMatchSnapshot();
  });
});
