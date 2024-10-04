import React from "react";
import { SerializedStyles } from "@emotion/react";
import Heading from "../../Heading/Heading";
import { CloseSVG } from "../../../icons/";
import { drawerHeader } from "./styles";
import { FCWithChildren } from "types/common";

export type HeaderProps = {
  onClose?: () => void;
  noGutters?: boolean;
};

const Header: FCWithChildren<HeaderProps> = ({ onClose, noGutters = false, children }) => {
  const title = typeof children === "string" ? <Heading>{children}</Heading> : children;

  return (
    <header
      id="drawer-title"
      data-testid="drawer-header"
      css={(theme): SerializedStyles => drawerHeader(theme, { noGutters })}
    >
      {title}
      {Boolean(onClose) && (
        <button type="button" aria-label="Close drawer" onClick={onClose}>
          <CloseSVG height={24} />
        </button>
      )}
    </header>
  );
};

export default Header;
