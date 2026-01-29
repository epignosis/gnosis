import React from "react";
import { SerializedStyles } from "@emotion/react";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import { CloseModalSVG } from "../../../icons/";
import { drawerHeader } from "./styles";
import { FCWithChildren } from "types/common";

export type HeaderProps = {
  onClose?: () => void;
  noGutters?: boolean;
};

const Header: FCWithChildren<HeaderProps> = ({ onClose, noGutters = false, children }) => {
  const title = typeof children === "string" ? <Heading size="md">{children}</Heading> : children;

  return (
    <header
      id="drawer-title"
      data-testid="drawer-header"
      css={(): SerializedStyles => drawerHeader({ noGutters })}
    >
      {title}
      <Button
        type="button"
        variant="link"
        color="secondary"
        noGutters
        aria-label="Close drawer"
        onClick={onClose}
      >
        <CloseModalSVG height={32} />
      </Button>
    </header>
  );
};

export default Header;
