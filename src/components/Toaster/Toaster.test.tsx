import React from "react";
import { toast } from "react-toastify";
import faker from "faker";
import userEvent from "@testing-library/user-event";
import Toaster from "./Toaster";
import { screen, render, waitFor } from "@test-utils/render";

describe("<Toaster/>", () => {
  it("renders correctly", () => {
    const toastTxt = faker.lorem.sentence();
    const publishToast = () => {
      toast(toastTxt);
    };

    render(
      <>
        <Toaster />
        <button onClick={publishToast}>Click me</button>
      </>,
    );

    userEvent.click(screen.getByRole("button"));

    waitFor(() => {
      expect(screen.getByText(toastTxt)).toHaveTextContent(toastTxt);
    });
  });
});
