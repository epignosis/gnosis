import React, { ReactNode } from "react";
import { footerContainer } from "./styles";
import StatusIndicator, { StatusIndicatorType } from "./StatusIndicator";
import { FCWithChildren } from "types/common";

export type FooterProps = {
  status?: {
    type: StatusIndicatorType;
    content: ReactNode;
  };
};

const Footer: FCWithChildren<FooterProps> = ({ children, status }) => (
  <footer data-testid="drawer-footer" css={footerContainer}>
    {status && (
      <>
        <StatusIndicator type={status.type} content={status.content} />
        <div className="drawer-footer__divider" />
      </>
    )}
    <div className="drawer-footer__content">{children}</div>
  </footer>
);

export default Footer;
