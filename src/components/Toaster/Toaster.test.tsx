import React from "react";
import { toast } from "react-toastify";
import faker from "faker";
import userEvent from "@testing-library/user-event";
import Toaster from "./Toaster";
import { screen, render, waitFor } from "@test-utils/render";

describe("<Toaster/>", () => {
  it("renders correctly", () => {
    const toastTxt = faker.lorem.sentence();
    const btnTxt = faker.lorem.word();
    const publishToast = () => {
      toast(toastTxt);
    };

    render(
      <>
        <Toaster />
        <button onClick={publishToast}>{btnTxt}</button>
      </>,
    );

    userEvent.click(screen.getByRole("button"));

    waitFor(() => expect(screen.getByText(toastTxt)).toHaveTextContent(toastTxt));
  });

  it("matches snapshot", () => {
    const publishToast = () => {
      toast("test toast");
    };

    const { container } = render(
      <>
        <Toaster />
        <button onClick={publishToast}>test click</button>
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
