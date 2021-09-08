import React from "react";
import faker from "faker";
import Avatar from "./Avatar";
import { render, screen } from "@test-utils/render";
import { CertificateSVG } from "@icons/core";

describe("<Avatar />", () => {
  it("renders with image", () => {
    const alt = faker.lorem.word();
    const src = faker.image.imageUrl();
    const avatarData = { src, alt };
    render(<Avatar {...avatarData} />);

    const avatar = screen.getByRole("img");
    const avatarChildren = screen.queryByTestId("avatar-children-container");

    expect(avatar).toHaveAttribute("src", avatarData.src);
    expect(avatarChildren).not.toBeInTheDocument();
  });

  it("renders a string", () => {
    const initials = faker.name.firstName()[0];
    render(<Avatar>{initials}</Avatar>);

    const avatarChildren = screen.getByText(initials);
    const img = screen.queryByRole("img");

    expect(avatarChildren).toHaveTextContent(initials);
    expect(img).not.toBeInTheDocument();
  });

  it("renders an icon", () => {
    render(
      <Avatar>
        <CertificateSVG data-testid="icon" />
      </Avatar>,
    );

    const avatarChildren = screen.getByTestId("avatar-children-container");
    const icon = screen.getByTestId("icon");
    const img = screen.queryByRole("img");

    expect(avatarChildren).toContainElement(icon);
    expect(img).not.toBeInTheDocument();
  });

  it("matches image avatar snapshot", () => {
    const { container } = render(
      <Avatar size="md" className="my-image-avatar" src="path/to/image.png" alt="My avatar" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("matches children avatar snapshot", () => {
    const { container } = render(
      <Avatar size="lg" className="my-text-avatar" bgColor="#ffffff">
        AB
      </Avatar>,
    );

    expect(container).toMatchSnapshot();
  });
});
