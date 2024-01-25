import React from "react";
import { faker } from "@faker-js/faker";
import Select from "./Select";
import { render, fireEvent } from "@test-utils/render";

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
});
