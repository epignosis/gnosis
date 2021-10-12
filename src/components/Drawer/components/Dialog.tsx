import React, { Children, cloneElement, CSSProperties, FC, ReactElement, useEffect } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m, Variants } from "framer-motion";
import classNames from "classnames";
import { useDrawersContext } from "../drawer-context";
import { drawerContainer } from "./styles";
import Mask from "./Mask";

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

export type DrawerProps = {
  /**
   * A unique `id` that helps manage multiple `Drawer` instances
   */
  id: string;
  isOpen: boolean;
  onClose: () => void;
  placement?: "left" | "right";
  width?: string;
  dialogStyles?: CSSProperties;
};

const Dialog: FC<DrawerProps> = (props) => {
  const {
    id,
    isOpen,
    onClose,
    placement = "left",
    width = "31.5rem",
    dialogStyles,
    children,
  } = props;
  const { state, dispatch } = useDrawersContext();
  // const dialogElement = useTrap<HTMLDivElement>(isOpen);

  const handleOnClose = () => {
    dispatch({ id, type: "close" });
    onClose();
  };
  const clonedChildren = Children.map(children, (child) => {
    return (
      child &&
      cloneElement(child as ReactElement, {
        onClose: (child as ReactElement).props?.closable && handleOnClose,
      })
    );
  });
  const dialogClassNames = classNames({
    dialog: true,
    "placement-left": placement === "left",
    "placement-right": placement === "right",
  });

  useEffect(() => {
    if (isOpen) {
      dispatch({ id, type: "open" });
    }
    // if (!isOpen) {
    //   dispatch({ id, type: "close" });
    // }
  }, [isOpen]);

  // console.log(state.drawers);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <div css={drawerContainer(width)} data-testid="drawer">
            {state.showMask && state.drawers.length === 1 ? <Mask onClose={handleOnClose} /> : null}
            <m.div
              id="drawer-dialog"
              style={dialogStyles}
              className={dialogClassNames}
              // ref={dialogElement}
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
};

export default Dialog;
