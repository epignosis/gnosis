import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Select from "./Select";
import { screen, render } from "@test-utils/render";

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
  it("renders correctly", () => {
    const labelTxt = faker.commerce.department();
    render(
      <Select id="my-select" label={labelTxt}>
        {OPTIONS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>,
    );

    const select = screen.getByLabelText(labelTxt);
    const options = screen.getAllByRole("option");

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(3);
  });

  it("selects a value", () => {
    const labelTxt = faker.commerce.department();
    const mockFn = jest.fn();

    render(
      <Select id="my-select" label={labelTxt} onChange={mockFn}>
        {OPTIONS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>,
    );

    const select = screen.getByLabelText(labelTxt);

    expect(select).toHaveValue(OPTIONS[0].value);

    userEvent.selectOptions(select, OPTIONS[1].value);

    expect(select).toHaveValue(OPTIONS[1].value);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Select
        id="select-id"
        className="normal-select"
        label="Test select input"
        containerAttrs={{
          id: "container-id",
          className: "container-class",
        }}
      >
        <option value="rs">Rust</option>
        <option value="js">JavaScript</option>
        <option value="ts">TypeScript</option>
      </Select>,
    );

    expect(container).toMatchSnapshot();
  });
});
