import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { CalendarSVG } from "../../icons/";
import Button from "./Button";
import { render, screen } from "@test-utils/render";

describe("<Button />", () => {
  it("renders correctly", () => {
    const btnText = faker.lorem.word();
    render(<Button type="submit">{btnText}</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(btnText);
    expect(button).toHaveAttribute("type", "submit");
    expect(button).not.toBeDisabled();
  });

  it("calls the onClick callback", async () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>{faker.lorem.word()}</Button>);
    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();

    await userEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("disabled button", async () => {
    const mockFn = jest.fn();
    render(
      <Button disabled onClick={mockFn}>
        Disabled button
      </Button>,
    );
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

    await userEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("is loading button", async () => {
    const mockFn = jest.fn();
    render(
      <Button isLoading onClick={mockFn}>
        Loading button
      </Button>,
    );
    const button = screen.getByRole("button");
    const loadingIcon = screen.getByLabelText("loading");

    expect(loadingIcon).toBeInTheDocument();
    expect(button).toBeDisabled();

    await userEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it("act as Link button", () => {
    const linkText = faker.random.words();
    const href = faker.internet.url();

    render(
      <Button as="a" href={href}>
        {linkText}
      </Button>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveTextContent(linkText);
    expect(link).toHaveAttribute("href", href);
  });

  it("with prefix icon", () => {
    render(<Button iconBefore={CalendarSVG}>With prefix icon</Button>);
    const icon = screen.getByTestId("prefix-icon");

    expect(icon).toBeInTheDocument();
  });

  it("with suffix icon", () => {
    render(<Button iconAfter={CalendarSVG}>With suffix icon</Button>);

    const icon = screen.getByTestId("suffix-icon");
    expect(icon).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Button>Test button</Button>);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with all props", () => {
    const { container } = render(
      <Button
        id="my-button"
        className="my-class"
        color="primary"
        variant="solid"
        size="lg"
        noGutters
        block
        rounded
      >
        Test button
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });
});
