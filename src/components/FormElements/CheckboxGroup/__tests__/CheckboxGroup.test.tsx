import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import CheckBoxGroup from "../CheckboxGroup";
import { render, screen } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.helpers.unique(faker.lorem.words),
    value: faker.helpers.unique(faker.lorem.word),
    name: faker.helpers.unique(faker.lorem.word),
  },
  {
    label: faker.helpers.unique(faker.lorem.words),
    value: faker.helpers.unique(faker.lorem.word),
    name: faker.helpers.unique(faker.lorem.word),
  },
  {
    label: faker.helpers.unique(faker.lorem.words),
    value: faker.helpers.unique(faker.lorem.word),
    name: faker.helpers.unique(faker.lorem.word),
  },
];

describe("<CheckBoxGroup />", () => {
  it("renders correctly", () => {
    const groupname = faker.helpers.unique(faker.lorem.word);
    render(
      <CheckBoxGroup id={faker.hacker.abbreviation()} groupname={groupname} options={OPTIONS} />,
    );

    const inputs = screen.getAllByRole("checkbox");
    const legendCheck = inputs[0];

    expect(inputs).toHaveLength(4); // 3 options and 1 the parent option
    expect(legendCheck).toHaveProperty("name", groupname);
    expect(inputs[1]).toHaveProperty("name", OPTIONS[0].name);
    expect(inputs[2]).toHaveProperty("name", OPTIONS[1].name);
    expect(inputs[3]).toHaveProperty("name", OPTIONS[2].name);
    expect(legendCheck).not.toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();
    expect(inputs[3]).not.toBeChecked();
  });

  it("renders with checked initial values", () => {
    render(
      <CheckBoxGroup
        id={faker.hacker.abbreviation()}
        groupname={faker.lorem.slug()}
        options={OPTIONS}
        initialValues={[OPTIONS[0].value, OPTIONS[1].value]}
      />,
    );

    const firstValue = screen.getByLabelText(OPTIONS[0].label);
    const secondValue = screen.getByLabelText(OPTIONS[1].label);
    const thirdValue = screen.getByLabelText(OPTIONS[2].label);

    expect(firstValue).toBeChecked();
    expect(secondValue).toBeChecked();
    expect(thirdValue).not.toBeChecked();
  });

  it("renders with a disabled checkbox", () => {
    const disabledCheckbox = {
      label: faker.helpers.unique(faker.lorem.words),
      value: faker.helpers.unique(faker.lorem.word),
      name: faker.helpers.unique(faker.lorem.word),
    };
    render(
      <CheckBoxGroup
        id={faker.hacker.abbreviation()}
        groupname={faker.lorem.slug()}
        options={[
          ...OPTIONS,
          {
            ...disabledCheckbox,
            disabled: true,
          },
        ]}
      />,
    );

    const disabledCheck = screen.getByLabelText(disabledCheckbox.label);
    const disabledCheckLabel = screen.getByText(disabledCheckbox.label);

    expect(disabledCheck).not.toBeChecked();

    userEvent.click(disabledCheckLabel);

    expect(disabledCheck).not.toBeChecked();
  });

  it("renders with mixed checked", () => {
    const groupname = faker.helpers.unique(faker.lorem.word);
    render(
      <CheckBoxGroup
        id={faker.helpers.unique(faker.lorem.word)}
        groupname={groupname}
        options={OPTIONS}
        initialValues={[OPTIONS[0].value]}
      />,
    );

    const legendCheck = screen.getByLabelText(groupname);
    const firstInput = screen.getByLabelText(OPTIONS[0].label);
    const secondInput = screen.getByLabelText(OPTIONS[1].label);
    const thirdInput = screen.getByLabelText(OPTIONS[2].label);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "mixed");
    expect(firstInput).toBeChecked();
    expect(secondInput).not.toBeChecked();
    expect(thirdInput).not.toBeChecked();
  });

  it("checks one input and then un-checks it", () => {
    const groupname = faker.lorem.slug();
    render(
      <CheckBoxGroup
        id={faker.helpers.unique(faker.lorem.word)}
        groupname={groupname}
        options={OPTIONS}
      />,
    );

    const legendCheck = screen.getByLabelText(groupname);
    const firstInput = screen.getByLabelText(OPTIONS[0].label);

    expect(legendCheck).not.toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "false");
    expect(firstInput).not.toBeChecked();

    userEvent.click(firstInput);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "mixed");
    expect(firstInput).toBeChecked();
  });

  it("checks all inputs at once and then un-checks them", () => {
    const groupname = faker.helpers.unique(faker.lorem.word);
    render(
      <CheckBoxGroup id={faker.hacker.abbreviation()} groupname={groupname} options={OPTIONS} />,
    );

    const legendCheck = screen.getByLabelText(groupname);
    const inputs = screen.getAllByRole("checkbox");

    expect(legendCheck).not.toBeChecked();

    userEvent.click(legendCheck);

    expect(legendCheck).toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "true");
    expect(inputs[1]).toBeChecked();
    expect(inputs[2]).toBeChecked();
    expect(inputs[3]).toBeChecked();

    userEvent.click(legendCheck);

    expect(legendCheck).not.toBeChecked();
    expect(legendCheck).toHaveAttribute("aria-checked", "false");
    expect(inputs[1]).not.toBeChecked();
    expect(inputs[2]).not.toBeChecked();
    expect(inputs[3]).not.toBeChecked();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <CheckBoxGroup
        id="checkbox-group-1"
        className="checkboxes"
        groupname="Test groupname"
        options={[
          {
            label: "Test label",
            name: "testName",
            value: "testValue",
          },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline = true`", () => {
    const { container } = render(
      <CheckBoxGroup
        id="testCheckboxGroup"
        groupname="Test groupname"
        options={[
          {
            label: "Test label",
            name: "testName",
            value: "testValue",
          },
        ]}
        inline
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
