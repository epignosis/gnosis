import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import Select from "./Select";
import { render, fireEvent, screen } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.random.words(),
    value: faker.random.alphaNumeric(),
  },
  {
    label: faker.lorem.words(),
    value: faker.lorem.slug(),
  },
  {
    label: faker.git.commitMessage(),
    value: faker.git.shortSha(),
  },
];

describe("<Select />", () => {
  it("renders correctly with exactly 3 options", () => {
    const labelTxt = faker.commerce.department();
    const placeholder = faker.commerce.department();
    const { container, queryByTestId } = render(
      <Select id="my-select" label={labelTxt} placeholder={placeholder} options={OPTIONS} />,
    );

    const mySelectComponent = queryByTestId("my-select-select");
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    const selectInput = container.querySelector("input");
    fireEvent.focus(selectInput as HTMLElement);
    fireEvent.keyDown(selectInput as HTMLElement, { key: "ArrowDown", code: 40 });

    const options = container.getElementsByClassName("option-md");
    expect(options).toHaveLength(3);
  });

  it("matches snapshot", () => {
    const { container, queryByTestId } = render(
      <Select
        id="my-select"
        aria-label="My Select"
        label="Test select input"
        options={[
          {
            label: "name",
            value: "name",
          },
          {
            label: "surname",
            value: "surname",
          },
          {
            label: "age",
            value: "age",
          },
        ]}
      />,
    );

    const mySelectComponent = queryByTestId("my-select-select");
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();

    const selectInput = container.querySelector("input");
    fireEvent.focus(selectInput as HTMLElement);
    fireEvent.keyDown(selectInput as HTMLElement, { key: "ArrowDown", code: 40 });

    expect(container).toMatchSnapshot();
  });

  it("clears the selected value with the keyboard via the clear indicator", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        onChange={onChange}
        value={OPTIONS[0]}
      />,
    );

    const clearIndicator = screen.getByRole("button", { name: /clear selection/i });
    expect(clearIndicator).toHaveAttribute("tabIndex", "0");

    clearIndicator.focus();
    await user.keyboard("{Enter}");

    expect(onChange).toHaveBeenCalledWith(null, expect.objectContaining({ action: "clear" }));
  });

  it("clears all selected values with the keyboard for a multi select", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        isMulti
        onChange={onChange}
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    const clearIndicator = screen.getByRole("button", { name: /clear selection/i });

    clearIndicator.focus();
    await user.keyboard(" ");

    expect(onChange).toHaveBeenCalledWith([], expect.objectContaining({ action: "clear" }));
  });

  it("still clears the selected value on click", () => {
    const onChange = jest.fn();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        onChange={onChange}
        value={OPTIONS[0]}
      />,
    );

    const clearIndicator = screen.getByRole("button", { name: /clear selection/i });
    fireEvent.mouseDown(clearIndicator, { button: 0 });

    expect(onChange).toHaveBeenCalledWith(null, expect.objectContaining({ action: "clear" }));
  });
});
