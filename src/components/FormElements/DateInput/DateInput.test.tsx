import React from "react";
import { format } from "date-fns";
import { DateInput } from "./DateInput.stories";
import { render, screen } from "@test-utils/render";

describe("<DateInput />", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    const date = new Date();
    render(<DateInput value={date} onChange={mockFn} {...DateInput.args} />);

    const label = screen.getByText("Date of birth");
    const input = screen.getByLabelText("Date of birth");

    expect(label).toHaveTextContent("Date of birth");
    expect(input).toHaveValue(format(date, "MM/dd/yyyy"));
    expect(mockFn).not.toHaveBeenCalled();
  });

  // it("matches snapshot", () => {
  //   const date = new Date("Thu Aug 19 2021 13:29:16 GMT+0300 (Eastern European Summer Time)");
  //   const { container } = render(
  //     <DateInput value={date} onChange={jest.fn()} {...DateInput.args} />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });
});
