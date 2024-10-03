import React from "react";
import { footerContainer } from "./styles";
import { FCWithChildren } from "types/common";

const Footer: FCWithChildren = ({ children }) => (
  <footer data-testid="drawer-footer" css={footerContainer}>
    {children}
  </footer>
);

export default Footer;
