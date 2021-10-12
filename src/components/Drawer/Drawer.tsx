import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import Root, { DRAWER_ROOT } from "./components/Root";
import Dialog, { DrawerProps } from "./components/Dialog";
import Header, { HeaderProps } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { DrawerProvider } from "./drawer-context";
// import { useTrap } from "@hooks";

type DrawerCompoundProps = {
  Header: FC<Omit<HeaderProps, "onClose"> & { closable?: boolean }>;
  Body: FC;
  Footer: FC;
  Root: () => JSX.Element;
};

const Drawer: FC<DrawerProps> & DrawerCompoundProps = (props) => {
  const drawerEl = document.getElementById(DRAWER_ROOT);

  useEffect(() => {
    if (props.isOpen) {
      (document.querySelector("body") as HTMLBodyElement).style.overflow = "hidden";
    } else {
      (document.querySelector("body") as HTMLBodyElement).style.overflow = "";
    }
  }, [props.isOpen]);

  return (
    drawerEl &&
    createPortal(
      <DrawerProvider>
        <Dialog {...props} />
      </DrawerProvider>,
      drawerEl,
    )
  );
};

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;
Drawer.Root = Root;

export default Drawer;
