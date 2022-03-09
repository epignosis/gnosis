import React, { FC } from "react";
import {
  LazyMotion,
  m,
  useReducedMotion,
  Variants,
  domAnimation,
  HTMLMotionProps,
} from "framer-motion";
import { mainNavContainer } from "./styles";
import NavItem, { NavItemProps } from "./NavItem";
import NavHandle from "./NavHandle";

export type SidebarProps = HTMLMotionProps<"nav"> & {
  isCollapsed?: boolean;
  navHandleLabel?: string;
  onToggle?: () => void;
};

type SidebarCompoundProps = {
  Item: NavItemProps;
};

const navVariants: Variants = {
  expanded: {
    minWidth: "15rem",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  collapsed: {
    minWidth: "4.75rem",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      delay: 0.1,
    },
  },
  a11yExpanded: {
    minWidth: "15rem",
    transition: {
      duration: 0,
    },
  },
  a11yCollapsed: {
    minWidth: "4.75rem",
    transition: {
      duration: 0,
    },
  },
};

const Sidebar: FC<SidebarProps> & SidebarCompoundProps = ({
  isCollapsed = false,
  navHandleLabel = "Menu",
  onToggle = () => void 0,
  children,
  ...rest
}) => {
  const isReducedMotion = useReducedMotion();
  let animate: string;

  if (isReducedMotion) {
    animate = isCollapsed ? "a11yCollapsed" : "a11yExpanded";
  } else {
    animate = isCollapsed ? "collapsed" : "expanded";
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        css={mainNavContainer}
        initial={false}
        animate={animate}
        variants={navVariants}
        id="sidebar"
        {...rest}
      >
        <div className="nav-items-wrapper">
          <NavHandle
            isExpanded={!isCollapsed}
            navItemLabel={navHandleLabel}
            toggleMainNav={onToggle}
          />
          {children}
        </div>
      </m.nav>
    </LazyMotion>
  );
};

Sidebar.Item = NavItem;

export default Sidebar;
