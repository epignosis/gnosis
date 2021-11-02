import React, { FC, ReactNode } from "react";
import { m, AnimatePresence, Variants, Transition } from "framer-motion";
import { useClickAway } from "@umijs/hooks";
import { drawerContainer } from "./styles";
import { CloseSVG } from "@icons/index";

export type DrawerProps = FC<{
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
}>;

const transition: Transition = {
  duration: 0.25,
  ease: "easeInOut",
};

const drawerContainerVariants: Variants = {
  open: {
    width: "100%",
    transition: {
      ...transition,
      when: "beforeChildren",
    },
    transitionEnd: {
      overflowY: "auto",
    },
  },
  closed: {
    width: "0%",
    overflowY: "hidden",
    transition: {
      ...transition,
      when: "afterChildren",
    },
  },
};

const drawerContentVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const Drawer: DrawerProps = ({ isOpen, onClose, title, footer, children }) => {
  const containerRef = useClickAway((): void => {
    if (isOpen) {
      onClose();
    }
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <m.section
          css={drawerContainer}
          ref={containerRef}
          initial="closed"
          animate={isOpen && "open"}
          exit="closed"
          variants={drawerContainerVariants}
        >
          <m.div className="content-wrapper" variants={drawerContentVariants}>
            <div>
              <header>
                <div>{title}</div>
                <button onClick={onClose}>
                  <CloseSVG height={16} />
                </button>
              </header>
              <p>{children}</p>
            </div>
            {footer && <footer>{footer}</footer>}
          </m.div>
        </m.section>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
