import React from "react";
import faker from "faker";
import Result from "./Result";
import { screen, render } from "@test-utils/render";
import { InfoSVG } from "@icons/core";

describe("<Result/>", () => {
  it("renders correctly", () => {
    const { titleTxt, infoTxt, footerTxt } = {
      titleTxt: faker.lorem.sentence(),
      infoTxt: faker.lorem.paragraph(),
      footerTxt: faker.lorem.sentence(),
    };
    render(
      <Result
        title={titleTxt}
        icon={InfoSVG}
        info={infoTxt}
        footer={<button>{footerTxt}</button>}
      />,
    );

    const title = screen.getByText(titleTxt);
    const icon = screen.getByTestId(/result-icon/i);
    const info = screen.getByText(infoTxt);
    const footerBtn = screen.getByText(footerTxt);

    expect(title).toHaveTextContent(titleTxt);
    expect(icon).toBeInTheDocument();
    expect(info).toHaveTextContent(infoTxt);
    expect(footerBtn).toHaveTextContent(footerTxt);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Result
        title="My title"
        icon={InfoSVG}
        info="My info."
        footer={<button>Action button</button>}
        size="md"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
