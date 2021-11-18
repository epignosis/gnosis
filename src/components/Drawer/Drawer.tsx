import React, { Children, cloneElement, FC, ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m, Variants, MotionStyle, domAnimation, LazyMotion } from "framer-motion";
import classNames from "classnames";
import { drawerContainer } from "./styles";
import Header, { HeaderProps } from "./components/Header";
import Body from "./components/Body";
import Mask from "./components/Mask";
import Footer from "./components/Footer";

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

const DrawerRoot: FC = () => <div id={DRAWER_ROOT} />;

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  showMask?: boolean;
  placement?: "left" | "right";
  width?: string;
  dialogStyles?: MotionStyle;
  dialogClassName?: string;
};

type DrawerCompoundProps = {
  Header: FC<Omit<HeaderProps, "onClose"> & { closable?: boolean }>;
  Body: FC;
  Footer: FC;
  Root: FC;
};

const Drawer: FC<DrawerProps> & DrawerCompoundProps = (props) => {
  const {
    isOpen,
    onClose,
    placement = "left",
    showMask = true,
    width = "31.5rem",
    dialogStyles,
    dialogClassName,
    children,
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
  const drawer = (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <div css={drawerContainer(width)} data-testid="drawer" {...rest}>
            {showMask && <Mask onClose={onClose} />}
            <m.div
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
            </m.div>
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

  return drawerEl && createPortal(drawer, drawerEl);
};

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;
Drawer.Root = DrawerRoot;

export default Drawer;
