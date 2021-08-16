import React from "react";
import Avatar from "./Avatar";
import { render, screen } from "@test-utils/render";
// import { CertificateSVG } from "@icons/core";

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
    render(<Avatar>SP</Avatar>);

    const avatarChildren = screen.getByText("SP");
    const img = screen.queryByRole("img");

    expect(avatarChildren).toHaveTextContent("SP");
    expect(img).toBe(null);
  });

  // it("renders an icon", () => {
  //   render(
  //     <Avatar>
  //       <CertificateSVG data-testid="icon" />
  //     </Avatar>,
  //   );

  //   const avatarChildren = screen.getByTestId(/avatar-children-container/i);
  //   const icon = screen.getByTestId(/icon/i);
  //   const img = screen.queryByRole("img");

  //   expect(avatarChildren).toContainElement(icon);
  //   expect(img).toBe(null);
  // });
});
