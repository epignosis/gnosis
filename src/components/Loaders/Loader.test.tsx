import React from "react";
import Loader from "./Loader";
import { render } from "@test-utils/render";

describe("<Loader>", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");

    expect(loader).toBeInTheDocument();
    expect(loader).toBeVisible();
  });

  it("matches snapshot", () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with fullscreen=`true`", () => {
    const { container } = render(<Loader fullScreen />);

    expect(container).toMatchSnapshot();
  });
});
