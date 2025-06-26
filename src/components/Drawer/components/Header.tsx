import React from "react";
import { SerializedStyles } from "@emotion/react";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import { CloseSVG } from "../../../icons/";
import { drawerHeader } from "./styles";
import { FCWithChildren } from "types/common";

export type HeaderProps = {
  onClose?: () => void;
  noGutters?: boolean;
};

const Header: FCWithChildren<HeaderProps> = ({ onClose, noGutters = false, children }) => {
  const title = typeof children === "string" ? <Heading>{children}</Heading> : children;
  const showCloseButton = Boolean(onClose);

  return (
    <header
      id="drawer-title"
      data-testid="drawer-header"
      css={(): SerializedStyles => drawerHeader({ noGutters })}
    >
      {title}
      {showCloseButton && (
        <Button
          type="button"
          variant="link"
          color="secondary"
          noGutters
          aria-label="Close drawer"
          onClick={onClose}
        >
          <CloseSVG height={24} />
        </Button>
      )}
    </header>
  );
};

export default Header;
