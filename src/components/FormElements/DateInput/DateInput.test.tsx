import React from "react";
import { format } from "date-fns";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import DateInput from "./DateInput";
import { act, render, screen, waitFor } from "@test-utils/render";
import { resizeWindow } from "@test-utils/helpers/windowResize";

const mockFn = jest.fn();
const labelTxt = faker.random.words();
const date = faker.date.future();
const today = faker.date.recent();

describe("<DateInput />", () => {
  it("renders correctly", () => {
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

  it("changes date", async () => {
    render(
      <DateInput
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        value={date}
        onChange={mockFn}
      />,
    );
    const input = screen.getByLabelText(labelTxt);

    userEvent.clear(input);

    expect(input).toHaveValue("");

    userEvent.type(input, format(today, "MM/dd/yyyy"));

    await waitFor(() => expect(input).toHaveValue(format(today, "MM/dd/yyyy")));
  });

  it("matches snapshot", () => {
    const date = new Date("Thu Aug 19 2021 13:29:16 GMT+0300 (Eastern European Summer Time)");
    const { container } = render(
      <DateInput id="test-date-input" label="Some date" value={date} onChange={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});

describe("<DateInput/> on mobile", () => {
  it("renders correctly", async () => {
    render(
      <DateInput
        id={faker.random.alphaNumeric()}
        label={labelTxt}
        value={date}
        onChange={mockFn}
      />,
    );

    act(() => {
      resizeWindow(320, 500);
    });

    const input = screen.getByLabelText(labelTxt);

    expect(input).toHaveValue(format(date, "yyyy-MM-dd"));
  });
});
