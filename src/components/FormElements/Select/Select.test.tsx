import React from "react";
import { faker } from "@faker-js/faker";
import Select from "./Select";
import { render } from "@test-utils/render";

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
    const { container } = render(
      <Select id="my-select" label={labelTxt} placeholder={placeholder} options={OPTIONS} />,
    );

    const select = container.getElementsByClassName("control-md");
    expect(select[0]).toBeInTheDocument();

    const options = container.getElementsByClassName("option-md");
    expect(options).toHaveLength(3);
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
