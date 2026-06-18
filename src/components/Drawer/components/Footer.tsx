import React from "react";
import { footerContainer } from "./styles";
import { FCWithChildren } from "types/common";

const Footer: FCWithChildren = ({ children }) => (
  <div data-testid="drawer-footer" css={footerContainer} className="drawer-footer">
    {children}
  </div>
);

export default Footer;
