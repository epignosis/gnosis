import React from "react";
import faker from "faker";
import Result from "./Result";
import { screen, render, act } from "@test-utils/render";
import { InfoSVG } from "@icons/core";
import { resizeWindow } from "@test-utils/helpers/windowResize";

describe("<Result/>", () => {
  const titleTxt = faker.lorem.sentence();
  const infoTxt = faker.lorem.paragraph();
  const footerTxt = faker.lorem.sentence();

  it("renders correctly", () => {
    render(<Result title={titleTxt} />);

    const title = screen.getByText(titleTxt);

    expect(title).toHaveTextContent(titleTxt);
  });

  it("renders with icon", () => {
    render(<Result title={titleTxt} icon={InfoSVG} />);

    const icon = screen.getByTestId(/result-icon/i);

    expect(icon).toBeInTheDocument();
  });

  it("renders info paragraph", () => {
    render(<Result title={titleTxt} info={infoTxt} />);

    const info = screen.getByText(infoTxt);

    expect(info).toHaveTextContent(infoTxt);
  });

  it("renders with footer", () => {
    render(<Result title={titleTxt} footer={<button>{footerTxt}</button>} />);

    const footerBtn = screen.getByText(footerTxt);

    expect(footerBtn).toHaveTextContent(footerTxt);
  });

  it("renders with all props provided", () => {
    render(
      <Result
        icon={InfoSVG}
        title={titleTxt}
        info={infoTxt}
        footer={<button>{footerTxt}</button>}
      />,
    );

    const icon = screen.getByTestId("result-icon");
    const title = screen.getByText(titleTxt);
    const info = screen.getByText(infoTxt);
    const footerBtn = screen.getByText(footerTxt);

    expect(icon).toBeInTheDocument();
    expect(title).toHaveTextContent(titleTxt);
    expect(info).toHaveTextContent(infoTxt);
    expect(footerBtn).toHaveTextContent(footerTxt);
  });

  it("matches snapshot with size=`md`", () => {
    const { container } = render(<Result title="Test title" size="md" />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with title", () => {
    const { container } = render(<Result title="Test title" />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with icon", () => {
    const { container } = render(<Result title="Test title" icon={InfoSVG} />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with info", () => {
    const { container } = render(<Result title="Test title" info="Test info" />);

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with footer", () => {
    const { container } = render(
      <Result title="Test title" footer={<button>Test footer</button>} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with all props provided", () => {
    const { container } = render(
      <Result
        icon={InfoSVG}
        title="Test title"
        info="Test info"
        footer={<button>Test footer</button>}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot on small screens", () => {
    const { container } = render(
      <Result
        icon={InfoSVG}
        title="Test title"
        info="Test info"
        footer={<button>Test footer</button>}
      />,
    );

    act(() => {
      resizeWindow(300, 500);
    });

    expect(container).toMatchSnapshot();
  });
});
