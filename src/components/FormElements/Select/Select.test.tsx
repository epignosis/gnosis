import React from "react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
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
  it("renders correctly with exactly 3 options", () => {
    const labelTxt = faker.commerce.department();
    const { container } = render(<Select id="my-select" label={labelTxt} options={OPTIONS} />);

    const select = screen.getByLabelText(labelTxt);
    expect(select).toBeInTheDocument();

    const options = container.getElementsByClassName("option");
    expect(options).toHaveLength(3);
  });

  it("renders disabled", () => {
    const mockFn = jest.fn();
    const labelTxt = faker.commerce.department();

    render(<Select id="my-select" label={labelTxt} isDisabled={true} options={OPTIONS} />);

    const select = screen.getByLabelText(labelTxt);
    expect(select).toBeDisabled();

    userEvent.click(select);
    expect(mockFn).not.toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Select
        id="select-id"
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

    expect(container).toMatchSnapshot();
  });
});
