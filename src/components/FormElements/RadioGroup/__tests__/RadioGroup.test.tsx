import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import RadioGroup from "../RadioGroup";
import { screen, render } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.company.companyName(),
    value: faker.company.companySuffix(),
  },
  {
    label: faker.commerce.department(),
    value: faker.commerce.productAdjective(),
  },
  {
    label: faker.git.commitMessage(),
    value: faker.git.commitSha(),
  },
  {
    label: faker.hacker.phrase(),
    value: faker.hacker.abbreviation(),
  },
];

describe("<RadioGroup />", () => {
  it("renders properly", () => {
    render(<RadioGroup groupname={faker.random.words()} options={OPTIONS} />);

    const radios = screen.getAllByRole("radio");

    expect(radios).toHaveLength(4);
  });

  it("renders with initial value selected", () => {
    render(
      <RadioGroup
        groupname={faker.random.words()}
        options={OPTIONS}
        initialValue={OPTIONS[2].value}
      />,
    );

    const thirdOption = screen.getByLabelText(OPTIONS[2].label);

    expect(thirdOption).toBeChecked();
  });

  it("changes selected value", () => {
    const mockFn = jest.fn();

    render(<RadioGroup groupname={faker.random.words()} options={OPTIONS} onChange={mockFn} />);

    const radios = screen.getAllByRole("radio");

    userEvent.click(radios[0]);

    expect(radios[0]).toBeChecked();

    userEvent.click(radios[2]);

    expect(radios[0]).not.toBeChecked();
    expect(radios[2]).toBeChecked();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("doesn't select a disabled option", () => {
    render(<RadioGroup groupname={faker.random.words()} options={OPTIONS} />);

    const firstOption = screen.getByText(OPTIONS[1].label);
    const firstOptionLabel = screen.getByLabelText(OPTIONS[1].label);

    expect(firstOption).not.toBeChecked();

    userEvent.click(firstOptionLabel);

    expect(firstOption).not.toBeChecked();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <RadioGroup
        groupname="Test groupname"
        options={[{ label: "Test option label", value: "testOptionValue" }]}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline = true`", () => {
    const { container } = render(
      <RadioGroup
        groupname="Test groupname"
        options={[{ label: "Test option label", value: "testOptionValue" }]}
        inline
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
