import React from "react";
import { format } from "date-fns";
import faker from "faker";
import DateInput from "./DateInput";
import { render, screen } from "@test-utils/render";

describe("<DateInput />", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const labelTxt = faker.random.words();
    const date = faker.date.future();

    render(
      <DateInput
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        value={date}
        onChange={mockFn}
      />,
    );

    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(label).toHaveTextContent(labelTxt);
    expect(input).toHaveValue(format(date, "MM/dd/yyyy"));
    expect(mockFn).not.toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const date = new Date("Thu Aug 19 2021 13:29:16 GMT+0300 (Eastern European Summer Time)");
    const { container } = render(
      <DateInput id="test-date-input" label="Some date" value={date} onChange={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
