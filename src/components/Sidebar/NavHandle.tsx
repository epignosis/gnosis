import React, { FC } from "react";
import { HamburgerSVG } from "../../icons/";
import NavItem from "./NavItem";
import { navHandleContainer } from "./styles";

export type NavHandleProps = {
  isExpanded: boolean;
  navItemLabel?: string;
  toggleMainNav: () => void;
};

const NavHandle: FC<NavHandleProps> = ({ isExpanded, toggleMainNav, navItemLabel = "" }) => {
  return (
    <button className="nav-handle" css={navHandleContainer} onClick={toggleMainNav}>
      <NavItem label={navItemLabel} isExpanded={isExpanded} icon={<HamburgerSVG height={32} />} />
    </button>
  );
};

export default NavHandle;
