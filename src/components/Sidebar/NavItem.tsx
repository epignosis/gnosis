import React, { FC, ReactNode } from "react";
import { m, AnimatePresence, Variants, useReducedMotion } from "framer-motion";
import classNames from "classnames";
import { navItemContainer } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

export type NavItemProps = FC<{
  isExpanded: boolean;
  icon: ReactNode;
  label: string | JSX.Element;
  fontSize?: TypographyLevels;
  isActive?: boolean;
}>;

const labelVariants: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    x: -10,
  },
  visible: ({ isReducedMotion }) => ({
    display: "-webkit-box",
    opacity: 1,
    x: 0,
    transition: {
      duration: isReducedMotion ? 0 : 0.1,
      delay: isReducedMotion ? 0 : 0.2,
    },
  }),
  exit: ({ isReducedMotion }) => ({
    opacity: 0,
    x: -10,
    transition: {
      duration: isReducedMotion ? 0 : 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  }),
};

const NavItem: NavItemProps = ({ isExpanded, label, fontSize = "md", icon, isActive = false }) => {
  const isReducedMotion = useReducedMotion();
  const containerClassNames = classNames({
    selected: isActive,
    "nav-item": true,
  });

  return (
    <div css={(theme) => navItemContainer(theme, fontSize)} className={containerClassNames}>
      <div className="icon-container">{icon}</div>
      <AnimatePresence>
        {isExpanded && (
          <m.div
            className="title"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={labelVariants}
            custom={{ isReducedMotion }}
          >
            {label}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
