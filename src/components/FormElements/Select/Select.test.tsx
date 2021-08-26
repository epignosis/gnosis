import React from "react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select.stories";
import { screen, render } from "@test-utils/render";

describe("<Select />", () => {
  it("renders correctly", () => {
    render(<Select {...Select.args} />);

    const select = screen.getByLabelText("Choose a programming language");
    const options = screen.getAllByRole("option");

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(6);
    expect(options[0]).toHaveTextContent("Rust");
    expect(options[1]).toHaveTextContent("JavaScript");
    expect(options[2]).toHaveTextContent("TypeScript");
    expect(options[3]).toHaveTextContent("GoLang");
    expect(options[4]).toHaveTextContent("Python");
    expect(options[5]).toHaveTextContent("PHP");
  });

  it("selects a value", () => {
    render(<Select {...Select.args} />);

    const select = screen.getByLabelText("Choose a programming language");
    const options = screen.getAllByRole("option");

    expect(select).toHaveValue("rs");

    userEvent.selectOptions(select, options[1]);

    expect(select).toHaveValue("js");
  });

  it("matches snapshot", () => {
    const { container } = render(<Select {...Select.args} />);

    expect(container).toMatchSnapshot();
  });
});
