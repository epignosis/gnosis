import React, { FC } from "react";
import NavItem from "./NavItem";
import { navHandleContainer } from "./styles";
import { HamburgerSVG } from "@icons/index";

export type NavHandleProps = {
  isExpanded: boolean;
  toggleMainNav: () => void;
};

const NavHandle: FC<NavHandleProps> = ({ isExpanded, toggleMainNav }) => {
  return (
    <button css={navHandleContainer} onClick={toggleMainNav}>
      <NavItem label="Menu" isExpanded={isExpanded} icon={<HamburgerSVG height={32} />} />
    </button>
  );
};

export default NavHandle;
