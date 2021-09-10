import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import MultiSelect from "./MultiSelect";
import { screen, render } from "@test-utils/render";

const OPTIONS = [
  {
    label: faker.company.companyName(),
    value: faker.company.companySuffix(),
    name: faker.company.bsNoun(),
  },
  {
    label: faker.commerce.department(),
    value: faker.commerce.productAdjective(),
    name: faker.commerce.product(),
  },
  {
    label: faker.git.commitMessage(),
    value: faker.git.commitSha(),
    name: faker.git.branch(),
  },
  {
    label: faker.hacker.phrase(),
    value: faker.hacker.abbreviation(),
    name: faker.hacker.verb(),
  },
];

describe("<MultiSelect />", () => {
  it("renders correctly", () => {
    const mockOnChange = jest.fn();
    const labelTxt = faker.company.catchPhrase();
    const placeholderTxt = faker.company.catchPhraseDescriptor();
    render(
      <MultiSelect
        id={faker.hacker.abbreviation()}
        label={labelTxt}
        placeholder={placeholderTxt}
        options={OPTIONS}
        onChange={mockOnChange}
      />,
    );

    const label = screen.getByText(labelTxt);
    const input = screen.getByText(placeholderTxt);
    const list = screen.queryByTestId(/list-container/i);

    expect(label).toHaveTextContent(labelTxt);
    expect(input).toBeInTheDocument();
    expect(list).not.toBeVisible();
  });

  it("opens and chooses a value", () => {
    const mockOnChange = jest.fn();
    const labelTxt = faker.company.catchPhrase();
    const placeholderTxt = faker.company.catchPhraseDescriptor();
    render(
      <MultiSelect
        id={faker.hacker.abbreviation()}
        label={labelTxt}
        placeholder={placeholderTxt}
        options={OPTIONS}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByText(placeholderTxt);
    const list = screen.queryByTestId(/list-container/i);

    userEvent.click(input);

    expect(list).toBeVisible();

    const options = screen.getAllByRole("option");
    const firstOption = options[1];

    expect(options).toHaveLength(OPTIONS.length);
    expect(firstOption).toHaveAttribute("aria-selected", "false");
  });

  it("closes when close button is pressed", () => {
    const mockOnChange = jest.fn();
    const labelTxt = faker.company.catchPhrase();
    const placeholderTxt = faker.company.catchPhraseDescriptor();
    render(
      <MultiSelect
        id={faker.hacker.abbreviation()}
        label={labelTxt}
        placeholder={placeholderTxt}
        options={OPTIONS}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByText(placeholderTxt);
    const list = screen.queryByTestId(/list-container/i);

    userEvent.click(input);

    expect(list).toBeVisible();

    const closeBtn = screen.getByTestId("close-btn");

    userEvent.click(closeBtn);

    expect(list).not.toBeVisible();
  });

  it("matches snapshot", () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <MultiSelect
        id="testMultiSelect"
        label="Test Multi-select"
        placeholder="Test placeholder"
        options={[
          {
            label: "All",
            value: "all",
            name: "all",
          },
          {
            label: "In progress",
            value: "progress",
            name: "progress",
          },
        ]}
        onChange={mockOnChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with `inline = true`", () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <MultiSelect
        id="testMultiSelect"
        label="Test Multi-select"
        placeholder="Test placeholder"
        options={[
          {
            label: "All",
            value: "all",
            name: "all",
          },
          {
            label: "In progress",
            value: "progress",
            name: "progress",
          },
        ]}
        onChange={mockOnChange}
        inline
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
