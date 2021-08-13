import React from "react";
import Loader from "../Loader";
import { render } from "@test-utils/render";

describe("<Loader>", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");

    expect(loader).toBeInTheDocument();
    expect(loader).toBeVisible();
  });
});
