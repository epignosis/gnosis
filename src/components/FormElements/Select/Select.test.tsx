import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import { GroupBase, MultiValueProps, SingleValueProps } from "react-select";
import Select from "./Select";
import { resolveStyles } from "./styles";
import { CustomOption } from "./types";
import { render, fireEvent, screen } from "@test-utils/render";

const CLEAR_INDICATOR_TESTID = "my-select-clear";

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

  it("keeps focus on the select's input after clearing with the keyboard", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        value={OPTIONS[0]}
      />,
    );

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);
    clearIndicator.focus();
    await user.keyboard("{Enter}");

    const selectInput = container.querySelector("input");
    expect(selectInput).toHaveFocus();
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

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);

    clearIndicator.focus();
    await user.keyboard(" ");

    expect(onChange).toHaveBeenCalledWith([], expect.objectContaining({ action: "clear" }));
  });

  it("uses the option label for the multi-value remove button accessible name", () => {
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isMulti
        value={[OPTIONS[0]]}
      />,
    );

    expect(screen.getByRole("button", { name: `Remove ${OPTIONS[0].label}` })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Remove [object Object]" }),
    ).not.toBeInTheDocument();
  });

  it("does not reopen the menu when clearing with the keyboard", async () => {
    const user = userEvent.setup();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        value={OPTIONS[0]}
      />,
    );

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);
    clearIndicator.focus();
    await user.keyboard(" ");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not reopen the menu when clearing a multi select with the keyboard", async () => {
    const user = userEvent.setup();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        isMulti
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);
    clearIndicator.focus();
    await user.keyboard(" ");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("keeps focus on the select's input after clearing a multi select with the keyboard", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isClearable
        isMulti
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);
    clearIndicator.focus();
    await user.keyboard(" ");

    const selectInput = container.querySelector("input");
    expect(selectInput).toHaveFocus();
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

    const clearIndicator = screen.getByTestId(CLEAR_INDICATOR_TESTID);
    fireEvent.mouseDown(clearIndicator, { button: 0 });

    expect(onChange).toHaveBeenCalledWith(null, expect.objectContaining({ action: "clear" }));
  });

  it("does not render the multi-value remove buttons or clear indicator when disabled", () => {
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isMulti
        isClearable
        isDisabled
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    expect(screen.getByText(OPTIONS[0].label)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^Remove / })).not.toBeInTheDocument();
    expect(screen.queryByTestId(CLEAR_INDICATOR_TESTID)).not.toBeInTheDocument();
  });

  it("shows the values without remove buttons or clear indicator when read-only", () => {
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isMulti
        isClearable
        isReadOnly
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    expect(screen.getByText(OPTIONS[0].label)).toBeInTheDocument();
    expect(screen.getByText(OPTIONS[1].label)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^Remove / })).not.toBeInTheDocument();
    expect(screen.queryByTestId(CLEAR_INDICATOR_TESTID)).not.toBeInTheDocument();
  });

  it("shows the values without remove buttons or clear indicator when read-only and creatable", () => {
    render(
      <Select
        id="my-select"
        label="Test select input"
        type="creatable"
        options={OPTIONS}
        isMulti
        isClearable
        isReadOnly
        value={[OPTIONS[0], OPTIONS[1]]}
      />,
    );

    expect(screen.getByText(OPTIONS[0].label)).toBeInTheDocument();
    expect(screen.getByText(OPTIONS[1].label)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /^Remove / })).not.toBeInTheDocument();
    expect(screen.queryByTestId(CLEAR_INDICATOR_TESTID)).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("keeps a read-only select out of the tab order", async () => {
    const user = userEvent.setup();
    render(
      <Select
        id="my-select"
        label="Test select input"
        options={OPTIONS}
        isMulti
        isReadOnly
        value={[OPTIONS[0]]}
      />,
    );

    await user.tab();

    expect(document.body).toHaveFocus();
  });

  it("hides the dropdown indicator when read-only", () => {
    const indicatorSelector = '[class*="-indicatorContainer"]';
    const { container, rerender } = render(
      <Select id="my-select" label="Test select input" options={OPTIONS} isMulti />,
    );
    expect(container.querySelectorAll(indicatorSelector)).toHaveLength(1);

    rerender(
      <Select id="my-select" label="Test select input" options={OPTIONS} isMulti isReadOnly />,
    );
    expect(container.querySelectorAll(indicatorSelector)).toHaveLength(0);
  });
});

describe("resolveStyles", () => {
  const base = { label: "base", color: "faded" };
  const state = {
    isDisabled: true,
    theme: { colors: { neutral80: "full-contrast" } },
  } as unknown as SingleValueProps<CustomOption, boolean, GroupBase<CustomOption>>;

  it("keeps a read-only single value at full contrast", () => {
    const styles = resolveStyles({ size: "md", isReadOnly: true });

    expect(styles.singleValue?.(base, state)).toEqual(
      expect.objectContaining({ color: "full-contrast" }),
    );
  });

  it("keeps the faded single value when disabled", () => {
    const styles = resolveStyles({ size: "md" });

    expect(styles.singleValue?.(base, state)).toEqual(expect.objectContaining({ color: "faded" }));
  });

  it("rounds all chip label corners when there is no remove button", () => {
    const multiValueState = state as unknown as MultiValueProps<
      CustomOption,
      boolean,
      GroupBase<CustomOption>
    >;

    expect(resolveStyles({ size: "md" }).multiValueLabel?.(base, multiValueState)).toEqual(
      expect.objectContaining({ borderRadius: "2px" }),
    );
  });
});
