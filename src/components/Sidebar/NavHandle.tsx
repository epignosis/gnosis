import React, { FC } from "react";
import { navHandleContainer } from "./styles";

export type NavHandleProps = {
  toggleMainNav: () => void;
};

const NavHandle: FC<NavHandleProps> = ({ toggleMainNav, children }) => {
  return (
    <button className="nav-handle" css={navHandleContainer} onClick={toggleMainNav}>
      {children}
    </button>
  );
};

export default NavHandle;
