import React, { Children, cloneElement, ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import ReactFocusLock from "react-focus-lock";
import { SerializedStyles } from "@emotion/react";
import { AnimatePresence, m, Variants, MotionStyle, domAnimation, LazyMotion } from "framer-motion";
import classNames from "classnames";
import { drawerContainer } from "./styles";
import Header, { HeaderProps } from "./components/Header";
import Body from "./components/Body";
import Mask from "./components/Mask";
import Footer from "./components/Footer";
import { FCWithChildren } from "types/common";

type DialogVariants = {
  placement: "left" | "right";
  width: string;
};

const dialogVariants: Variants = {
  initial: ({ placement, width }: DialogVariants) => ({
    opacity: 0,
    x: placement === "right" ? "100%" : `-${width}`,
    transition: {
      type: "tween",
    },
  }),
  expanded: () => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  }),
};

const DRAWER_ROOT = "drawerRoot";

const DrawerRoot: FCWithChildren = () => <div id={DRAWER_ROOT} />;

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  showMask?: boolean;
  placement?: "left" | "right";
  width?: string;
  dialogStyles?: MotionStyle;
  dialogClassName?: string;
  disableFocusLock?: boolean;
  onClose: () => void;
};

type DrawerCompoundProps = {
  Header: FCWithChildren<Omit<HeaderProps, "onClose"> & { closable?: boolean }>;
  Body: FCWithChildren;
  Footer: FCWithChildren;
  Root: FCWithChildren;
};

const Drawer: FCWithChildren<DrawerProps> & DrawerCompoundProps = (props) => {
  const {
    isOpen,
    placement = "left",
    showMask = true,
    width = "31.5rem",
    dialogStyles,
    dialogClassName,
    disableFocusLock = false,
    children,
    onClose,
    ...rest
  } = props;
  const clonedChildren = Children.map(children, (child) => {
    return (
      child &&
      cloneElement(child as ReactElement, {
        onClose: (child as ReactElement).props?.closable && onClose,
      })
    );
  });
  const drawerEl = document.getElementById(DRAWER_ROOT);
  const dialogClassNames = classNames({
    dialog: true,
    "placement-left": placement === "left",
    "placement-right": placement === "right",
    [dialogClassName ?? ""]: dialogClassName,
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const drawer = (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <div
            css={(theme): SerializedStyles => drawerContainer(theme, width)}
            data-testid="drawer"
            {...rest}
          >
            {showMask && <Mask onClose={onClose} />}
            <ReactFocusLock returnFocus disabled={!isOpen || disableFocusLock}>
              <m.dialog
                id="drawer-dialog"
                style={dialogStyles}
                className={dialogClassNames}
                aria-expanded={isOpen}
                aria-hidden={!isOpen}
                aria-modal="true"
                initial="initial"
                animate="expanded"
                exit="initial"
                variants={dialogVariants}
                custom={{ placement, width }}
              >
                {clonedChildren}
              </m.dialog>
            </ReactFocusLock>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );

  useEffect(() => {
    if (isOpen) {
      (document.querySelector("body") as HTMLBodyElement).style.overflow = "hidden";
    } else {
      (document.querySelector("body") as HTMLBodyElement).style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      (document.querySelector("body") as HTMLBodyElement).style.overflow = "";
    };
  }, []);

  return drawerEl && createPortal(drawer, drawerEl);
};

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;
Drawer.Root = DrawerRoot;

export default Drawer;
