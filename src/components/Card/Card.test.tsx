import React from "react";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import { screen, render, waitFor } from "@test-utils/render";

describe("<Card/>", () => {
  it("renders correctly", () => {
    const alt = faker.lorem.word();
    const src = faker.image.imageUrl();
    const bodyTxt = faker.lorem.paragraph();

    render(
      <Card>
        <Card.Header>
          <Card.Thumbnail src={src} alt={alt} />
        </Card.Header>
        <Card.Body>{bodyTxt}</Card.Body>
      </Card>,
    );

    const img = screen.getByAltText(alt);
    const body = screen.getByText(bodyTxt);

    expect(img).toHaveAttribute("src", src);
    expect(body).toHaveTextContent(bodyTxt);
  });

  xit("displays hover div", async () => {
    const alt = faker.lorem.word();
    const src = faker.image.imageUrl();
    const hoverTxt = faker.lorem.word();

    render(
      <Card>
        <Card.Header>
          <Card.Thumbnail src={src} alt={alt} />
          <Card.Hover>{hoverTxt}</Card.Hover>
        </Card.Header>
      </Card>,
    );

    const card = screen.getByTestId("card");
    const hover = screen.getByText(hoverTxt);

    expect(hover).not.toBeVisible();

    screen.debug(card);

    userEvent.hover(card);

    screen.debug(card);

    await waitFor(() => screen.getByTestId("card-hover"));

    expect(screen.getByText("card-hover")).toBeVisible();
  });

  it("has overlay", () => {
    const alt = faker.lorem.word();
    const src = faker.image.imageUrl();
    const overlayTxt = faker.lorem.word();

    render(
      <Card>
        <Card.Overlay>{overlayTxt}</Card.Overlay>
        <Card.Header>
          <Card.Thumbnail src={src} alt={alt} />
        </Card.Header>
      </Card>,
    );

    const overlay = screen.getByText(overlayTxt);

    expect(overlay).toHaveTextContent(overlayTxt);
  });

  it("has drawer", () => {
    const bodyTxt = faker.lorem.paragraph();
    const titleTxt = faker.lorem.word();
    const footerTxt = faker.lorem.words();
    const mockFn = jest.fn();

    render(
      <Card>
        <Card.Drawer isOpen title={titleTxt} onClose={mockFn} footer={footerTxt}>
          {bodyTxt}
        </Card.Drawer>
      </Card>,
    );

    const title = screen.getByText(titleTxt);
    const body = screen.getByText(bodyTxt);
    const footer = screen.getByText(footerTxt);
    const closeBtn = screen.getByRole("button");

    expect(title).toHaveTextContent(titleTxt);
    expect(body).toHaveTextContent(bodyTxt);
    expect(footer).toHaveTextContent(footerTxt);

    userEvent.click(closeBtn);

    expect(mockFn).toHaveBeenCalledTimes(1);

    userEvent.click(document.body);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Card id="my-card" className="main-card">
        <Card.Header>
          <Card.Thumbnail
            src="https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png"
            alt="An image"
          />
        </Card.Header>
        <Card.Body>
          <a>Something</a>
          <span>Details</span>
        </Card.Body>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with hover", () => {
    const { container } = render(
      <Card>
        <Card.Header>
          <Card.Thumbnail
            src="https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png"
            alt="An image"
          />
          <Card.Hover>Hover text</Card.Hover>
        </Card.Header>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with transparent hover", () => {
    const { container } = render(
      <Card>
        <Card.Header>
          <Card.Thumbnail
            src="https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png"
            alt="An image"
          />
          <Card.Hover transparent>Hover text</Card.Hover>
        </Card.Header>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with overlay", () => {
    const { container } = render(
      <Card>
        <Card.Overlay>Hello Overlay</Card.Overlay>

        <Card.Header>
          <Card.Thumbnail
            src="https://talentlms-prod-frontend-static.s3.us-east-1.amazonaws.com/images/default-course.png"
            alt="An image"
          />
        </Card.Header>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with drawer", () => {
    const mockFn = jest.fn();

    const { container } = render(
      <Card>
        <Card.Drawer isOpen title="Drawer title" onClose={mockFn} footer="Drawer footer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam labore ratione error
          adipisci dolorem corporis voluptatibus quia nihil quaerat ipsa tempora, in neque facere
          doloremque aut tempore ullam molestias necessitatibus!
        </Card.Drawer>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });

  it("does not apply hover effects when isHoverActive is false", async () => {
    const hoverTxt = faker.lorem.word();
    const src = faker.image.imageUrl();

    render(
      <Card isHoverActive={false}>
        <Card.Header>
          <Card.Thumbnail src={src} alt="No hover" />
          <Card.Hover>{hoverTxt}</Card.Hover>
        </Card.Header>
      </Card>,
    );

    const card = screen.getByTestId("card");
    userEvent.hover(card);

    await screen.findByTestId("card");
    expect(card).not.toHaveStyle({ transform: "scale(1.1)" });

    expect(screen.queryByText(hoverTxt)).not.toBeVisible();
  });
});
