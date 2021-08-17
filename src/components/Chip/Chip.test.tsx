import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Chip from "./Chip";
import { render, screen } from "@test-utils/render";

describe("<Chip />", () => {
  const chipTxt = faker.lorem.word();

  it("renders without close button", () => {
    render(<Chip>{chipTxt}</Chip>);
    const tag = screen.getByText(chipTxt);

    expect(tag).toHaveTextContent(chipTxt);
  });

  it("renders with close button", () => {
    const mockFn = jest.fn();
    render(<Chip onClose={mockFn}>{chipTxt}</Chip>);

    const tag = screen.getByText(chipTxt);
    const closeBtn = screen.getByLabelText(`Remove ${chipTxt}`);

    userEvent.click(closeBtn);

    expect(tag).toHaveTextContent(chipTxt);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(<Chip>This is a chip</Chip>);

    expect(container).toMatchSnapshot();
  });
});
