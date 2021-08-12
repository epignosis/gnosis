import React from "react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { render, screen } from "@test-utils/render";

const props = {
  color: "danger",
  size: "md",
  className: "text-right",
  type: "submit",
};

describe("<Button />", () => {
  it("renders correctly", () => {
    render(<Button {...props}>Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Button");
    expect(button).toHaveAttribute("type");
    expect(button).not.toBeDisabled();
  });

  it("calls a function onClick", () => {
    const mockFn = jest.fn();
    render(
      <Button onClick={mockFn} {...props}>
        Button
      </Button>,
    );
    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled", () => {
    const mockFn = jest.fn();
    render(
      <Button disabled onClick={mockFn} {...props}>
        Button
      </Button>,
    );
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

    userEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("is loading", () => {
    const mockFn = jest.fn();
    render(
      <Button isLoading onClick={mockFn} {...props}>
        Button
      </Button>,
    );
    const button = screen.getByRole("button");
    const loadingIcon = screen.getByLabelText("loading");

    expect(loadingIcon).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("act as Link button", () => {
    render(
      <Button as={"a"} href="/">
        Course Details
      </Button>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveTextContent("Course Details");
    expect(link).toHaveAttribute("href");
  });

  it("is an anchor tag", () => {
    render(
      <Button as="a" href="/">
        Go to knowledge base
      </Button>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveTextContent("Go to knowledge base");
    expect(link).toHaveAttribute("href");
  });
});
