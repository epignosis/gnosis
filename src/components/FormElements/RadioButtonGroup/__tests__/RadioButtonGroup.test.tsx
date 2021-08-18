import React from "react";
import faker from "faker";
import RadioButtonGroup from "../RadioButtonGroup";
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

describe("<RadioButtonGroup />", () => {
  it("should render correctly", () => {
    const mockOnChange = jest.fn();
    render(<RadioButtonGroup options={OPTIONS} value="" onChange={mockOnChange} />);

    const options = screen.getAllByRole("button");

    expect(options).toHaveLength(4);
    expect(options[0]).toHaveTextContent(OPTIONS[0].label);
    expect(options[1]).toHaveTextContent(OPTIONS[1].label);
    expect(options[2]).toHaveTextContent(OPTIONS[2].label);
    expect(options[3]).toHaveTextContent(OPTIONS[3].label);
  });

  it("should render with a selected value", () => {
    const mockOnChange = jest.fn();
    render(<RadioButtonGroup options={OPTIONS} value={OPTIONS[0].value} onChange={mockOnChange} />);

    const options = screen.getAllByRole("button");

    expect(options).toHaveLength(4);
    expect(options[0]).toHaveAttribute("aria-selected", "true");
  });

  it("matches snapshot", () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtonGroup
        options={[{ label: "Test label", value: "testValue" }]}
        value=""
        onChange={mockOnChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
