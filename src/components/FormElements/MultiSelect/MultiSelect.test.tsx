import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { MultiSelect } from "./MultiSelect.stories";
import { screen, render } from "@test-utils/render";

describe("<MultiSelect />", () => {
  it("renders correctly", () => {
    render(<MultiSelect {...MultiSelect.args} />);

    const label = screen.getByText("Choose multiple values");
    const input = screen.getByText("Multi select");
    const list = screen.queryByTestId(/list-container/i);

    expect(label).toHaveTextContent("Choose multiple values");
    expect(input).toBeInTheDocument();
    expect(list).not.toBeVisible();
  });

  // it("opens and chooses a value", () => {
  //   const mockOnChange = jest.fn();
  //   const labelTxt = faker.company.catchPhrase();
  //   const placeholderTxt = faker.company.catchPhraseDescriptor();
  //   render(
  //     <MultiSelect
  //       label={labelTxt}
  //       placeholder={placeholderTxt}
  //       options={OPTIONS}
  //       onChange={mockOnChange}
  //     />,
  //   );

  //   const input = screen.getByText(placeholderTxt);
  //   const list = screen.queryByTestId(/list-container/i);

  //   userEvent.click(input);

  //   expect(list).toBeVisible();

  //   const options = screen.getAllByRole("option");
  //   const firstOption = options[1];

  //   expect(options).toHaveLength(OPTIONS.length);
  //   expect(firstOption).toHaveAttribute("aria-selected", "false");
  // });

  // it("matches snapshot", () => {
  //   const mockOnChange = jest.fn();
  //   const { container } = render(
  //     <MultiSelect
  //       label="Test Multi-select"
  //       placeholder="Test placeholder"
  //       options={OPTIONS}
  //       onChange={mockOnChange}
  //     />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });

  // it("matches snapshot with `block = false`", () => {
  //   const mockOnChange = jest.fn();
  //   const { container } = render(
  //     <MultiSelect
  //       label="Test Multi-select"
  //       placeholder="Test placeholder"
  //       options={OPTIONS}
  //       onChange={mockOnChange}
  //       block
  //     />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });

  // it("matches snapshot with `altLabel = true`", () => {
  //   const mockOnChange = jest.fn();
  //   const { container } = render(
  //     <MultiSelect
  //       label="Test Multi-select"
  //       placeholder="Test placeholder"
  //       options={OPTIONS}
  //       onChange={mockOnChange}
  //       altLabel
  //     />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });
});
