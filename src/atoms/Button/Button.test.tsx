import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Button from "./Button";
import { render, screen } from "@test-utils/render";

describe("<Button />", () => {
  it("renders correctly", () => {
    const btnText = faker.lorem.word();
    render(<Button type="submit">{btnText}</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(btnText);
    expect(button).toHaveAttribute("type");
    expect(button).not.toBeDisabled();
  });

  it("calls a function onClick", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>{faker.lorem.word()}</Button>);
    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled", () => {
    const mockFn = jest.fn();
    render(
      <Button disabled onClick={mockFn}>
        {faker.lorem.word()}
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
      <Button isLoading onClick={mockFn}>
        {faker.lorem.word()}
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
    const linkText = faker.random.words();
    render(
      <Button as={"a"} href="/">
        {linkText}
      </Button>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(linkText);
    expect(link).toHaveAttribute("href");
  });

  it("is an anchor tag", () => {
    const linkText = faker.random.words();
    render(
      <Button as="a" href="/">
        {linkText}
      </Button>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(linkText);
    expect(link).toHaveAttribute("href");
  });
});
