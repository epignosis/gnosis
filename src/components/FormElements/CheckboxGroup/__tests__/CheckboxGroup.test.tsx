import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import CheckBoxGroup from "../CheckboxGroup";
import { render, screen } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.commerce.department(),
    value: faker.lorem.slug(),
    name: faker.lorem.sentence(),
  },
  {
    label: faker.company.catchPhrase(),
    value: faker.company.bsAdjective(),
    name: faker.company.catchPhraseAdjective(),
  },
  {
    label: faker.git.commitMessage(),
    value: faker.git.branch(),
    name: faker.git.commitSha(),
  },
];

describe("<CheckBoxGroup />", () => {
  it("renders correctly", () => {
    const groupname = faker.lorem.slug();
    render(<CheckBoxGroup groupname={groupname} options={OPTIONS} />);

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
      label: faker.commerce.department(),
      value: faker.lorem.slug(),
      name: faker.lorem.slug(),
    };
    render(
      <CheckBoxGroup
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
    const groupname = faker.lorem.slug();
    render(
      <CheckBoxGroup groupname={groupname} options={OPTIONS} initialValues={[OPTIONS[0].value]} />,
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
    render(<CheckBoxGroup groupname={groupname} options={OPTIONS} />);

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
    const groupname = faker.lorem.slug();
    render(<CheckBoxGroup groupname={groupname} options={OPTIONS} />);

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
