import React from "react";
import faker from "faker";
import Avatar from "./Avatar";
import { render, screen } from "@test-utils/render";
import { CertificateSVG } from "@icons/core";

describe("<Avatar />", () => {
  it("renders with image", () => {
    const avatarData = {
      src: "https://pbs.twimg.com/profile_images/1170277252858372097/zj_tU1kT_400x400.jpg",
      alt: "John Tsevdos",
    };
    render(<Avatar {...avatarData} />);

    const avatar = screen.getByRole("img");
    const avatarChildren = screen.queryByTestId(/avatar-children-container/i);

    expect(avatar).toHaveAttribute("src", avatarData.src);
    expect(avatarChildren).toBe(null);
  });

  it("renders a string", () => {
    const useInitials = faker.name.firstName()[0];

    render(<Avatar>{useInitials}</Avatar>);

    const avatarChildren = screen.getByText(useInitials);
    const img = screen.queryByRole("img");

    expect(avatarChildren).toHaveTextContent(useInitials);
    expect(img).toBe(null);
  });

  it("renders an icon", () => {
    render(
      <Avatar>
        <CertificateSVG data-testid="icon" />
      </Avatar>,
    );

    const avatarChildren = screen.getByTestId(/avatar-children-container/i);
    const icon = screen.getByTestId(/icon/i);
    const img = screen.queryByRole("img");

    expect(avatarChildren).toContainElement(icon);
    expect(img).toBe(null);
  });

  it("matches snapshot", () => {
    const { container } = render(<Avatar>SP</Avatar>);

    expect(container).toMatchSnapshot();
  });
});
