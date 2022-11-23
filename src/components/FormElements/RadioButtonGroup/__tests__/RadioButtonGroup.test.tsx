import React from "react";
import { faker } from "@faker-js/faker";
import RadioButtonGroup from "../RadioButtonGroup";
import { screen, render } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.company.name(),
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

describe("<RadioButtonGroup />", () => {
  it("should render correctly", () => {
    render(
      <RadioButtonGroup
        id={faker.hacker.abbreviation()}
        options={OPTIONS}
        value=""
        onChange={jest.fn()}
      />,
    );

    const options = screen.getAllByRole("button");

    expect(options).toHaveLength(4);
    expect(options[0]).toHaveTextContent(OPTIONS[0].label);
    expect(options[1]).toHaveTextContent(OPTIONS[1].label);
    expect(options[2]).toHaveTextContent(OPTIONS[2].label);
    expect(options[3]).toHaveTextContent(OPTIONS[3].label);
  });

  it("should render with a selected value", () => {
    render(
      <RadioButtonGroup
        id={faker.hacker.abbreviation()}
        options={OPTIONS}
        value={OPTIONS[0].value}
        onChange={jest.fn()}
      />,
    );

    const options = screen.getAllByRole("button");

    expect(options).toHaveLength(4);
    expect(options[0]).toHaveAttribute("aria-selected", "true");
  });

  it("matches snapshot", () => {
    const { container } = render(
      <RadioButtonGroup
        id="radio-group-1"
        className="radio-group"
        options={[{ label: "Test label", value: "testValue" }]}
        value=""
        onChange={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with selected value", () => {
    const { container } = render(
      <RadioButtonGroup
        id="testRadioButtonGroup"
        options={[{ label: "Test label", value: "testValue" }]}
        value="testValue"
        onChange={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
