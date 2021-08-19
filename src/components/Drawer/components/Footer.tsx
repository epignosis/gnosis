import React, { FC } from "react";
import { footerContainer } from "./styles";

const Footer: FC = ({ children }) => (
  <footer data-testid="drawer-footer" css={footerContainer}>
    {children}
  </footer>
);

export default Footer;
