import React from "react";
import { navHandleContainer } from "./styles";
import { FCWithChildren } from "types/common";

export type NavHandleProps = {
  toggleMainNav: () => void;
};

const NavHandle: FCWithChildren<NavHandleProps> = ({ toggleMainNav, children }) => {
  return (
    <button className="nav-handle" css={navHandleContainer} onClick={toggleMainNav}>
      {children}
    </button>
  );
};

export default NavHandle;
